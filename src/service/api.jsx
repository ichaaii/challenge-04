import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  return movie.data.results;
};

export const searchMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};

export const getMovieDetail = async (movieId) => {
  const detail = await axios.get(
    `${baseUrl}/movie/${movieId}?api_key=${apiKey}`
  );
  return detail.data;
}

export const getMovieVideos = async (movieId) => {
  const video = await axios.get(
    `${baseUrl}/movie/${movieId}/videos?api_key=${apiKey}`
  );
  return video.data;
}
