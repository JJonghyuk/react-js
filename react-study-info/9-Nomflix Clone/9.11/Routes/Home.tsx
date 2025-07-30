import { useQuery } from "@tanstack/react-query";
import { getMovies, IGetMoviesResult } from "../api";
import styled from "styled-components";
import { makeImagePath } from "../utils";
import { motion, AnimatePresence, Variants } from "motion/react";
import { useState } from "react";
import useWindowWidth from "../useWindowWidth";
import { useHistory, useRouteMatch } from "react-router-dom";

const Wrapper = styled.div`
  overflow-x: hidden;
  padding-bottom: 200px;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgPhoto",
})<{ bgPhoto: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(6, 1fr);
  width: 100%;
`;

const Box = styled(motion.button).withConfig({
  shouldForwardProp: (prop) => prop !== "bgPhoto",
})<{ bgPhoto: string }>`
  cursor: pointer;
  display: block;
  height: 200px;
  color: #fff;
  font-size: 66px;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.span)`
  opacity: 0;
  position: absolute;
  bottom: 0;
  display: block;
  padding: 10px;
  width: 100%;
  background-color: ${(props) => props.theme.black.lighter};
  span {
    display: block;
    font-size: 18px;
    text-align: center;
  }
`;

// const rowVariants = {
//   hidden: {
//     x: window.outerWidth,
//   },
//   visible: {
//     x: 0,
//   },
//   exit: {
//     x: -window.outerWidth,
//   },
// };

const boxVariants: Variants = {
  normal: {
    scale: 1,
  },
  active: {
    scale: 1.3,
    y: -50,
    transition: {
      delay: 0.5,
      duration: 0.2,
      type: "tween",
    },
  },
};

const infoVariants: Variants = {
  active: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.2,
      type: "tween",
    },
  },
};

const offset = 6;

function Home() {
  const history = useHistory();
  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  const { data, isLoading } = useQuery<IGetMoviesResult>({
    queryKey: ["movies", "nowPlaying"],
    queryFn: getMovies,
  });
  // console.log(data);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const incaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data.results.length;
      const maxIndex = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => setLeaving((prev) => !prev);
  const width = useWindowWidth();
  const onBoxClicked = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={incaseIndex}
            bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <Overview>{data?.results[0].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                // variants={rowVariants}
                initial={{ x: width }}
                animate={{ x: 0 }}
                exit={{ x: -width }}
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      key={movie.id}
                      bgPhoto={makeImagePath(
                        movie.backdrop_path || movie.poster_path,
                        "w500",
                      )}
                      variants={boxVariants}
                      initial="normal"
                      whileHover="active"
                      whileFocus="active"
                      onClick={() => onBoxClicked(movie.id)}
                      transition={{ type: "tween" }}
                      type="button"
                    >
                      <Info variants={infoVariants}>
                        <span>{movie.title}</span>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <motion.div
                layoutId={bigMovieMatch.params.movieId}
                style={{
                  position: "absolute",
                  top: 0,
                  width: "500px",
                  height: "500px",
                  backgroundColor: "green",
                }}
              ></motion.div>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
}
export default Home;
