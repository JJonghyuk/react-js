import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion, useScroll } from "motion/react";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../api";
import { useHistory, useRouteMatch } from "react-router-dom";
import { makeImagePath } from "../utils";

const Overlay = styled(motion.div)`
  opacity: 0;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const BigMovie = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  border-radius: 15px;
  background-color: ${(props) => props.theme.black.lighter};
`;

const BigCover = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
  }
`;

const BigImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center center;
`;

const BigTitle = styled.h2`
  color: ${(props) => props.theme.white.lighter};
  text-align: center;
  font-size: 36px;
`;

const BigOverview = styled.p``;

const CloseBtn = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`;

interface MovieProps {
  type: string;
  category: string;
}

function MovieInfo({ type, category }: MovieProps) {
  const { scrollY } = useScroll();
  const history = useHistory();
  const { data } = useQuery<IGetMoviesResult>({
    queryKey: [type, category],
    queryFn: () => getMovies({ type, category }),
  });
  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => String(movie.id) === bigMovieMatch.params.movieId,
    );
  console.log(clickedMovie);

  const onOverlayClick = () => history.push("/");
  return (
    <>
      <AnimatePresence>
        {bigMovieMatch ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <BigMovie
              layoutId={bigMovieMatch.params.movieId}
              style={{
                top: scrollY.get() + 100,
              }}
            >
              {clickedMovie && (
                <>
                  <BigCover>
                    <BigImg src={makeImagePath(clickedMovie.backdrop_path)} />
                  </BigCover>
                  <BigTitle>{clickedMovie.title}</BigTitle>
                  <BigOverview>{clickedMovie.overview}</BigOverview>
                </>
              )}
              <CloseBtn type="button" onClick={onOverlayClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30px"
                  viewBox="0 -960 960 960"
                  width="30px"
                  fill="#e3e3e3"
                >
                  <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
              </CloseBtn>
            </BigMovie>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}

export default MovieInfo;
