const API_KEY = "";
const BASE_PATH = "https://api.themoviedb.org/3";

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json(),
  );
}

// * 이미지 불러오기
// https://image.tmdb.org/t/p/original/ + 이미지 경로
