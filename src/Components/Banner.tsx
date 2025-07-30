import styled from "styled-components";
import { makeImagePath } from "../utils";
import { getMovies, IGetMoviesResult } from "../api";
import { useQuery } from "@tanstack/react-query";

const BannerItem = styled.div.withConfig({
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
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 24px;
  width: 50%;
`;

interface BannerProps {
  type: string;
  category: string;
}

function Banner({ type, category }: BannerProps) {
  const { data } = useQuery<IGetMoviesResult>({
    queryKey: [type, category],
    queryFn: () => getMovies({ type, category }),
  });
  return (
    <>
      <BannerItem bgPhoto={makeImagePath(data?.results[0].backdrop_path || "")}>
        <Title>{data?.results[0].title}</Title>
        <Overview>{data?.results[0].overview}</Overview>
      </BannerItem>
    </>
  );
}

export default Banner;
