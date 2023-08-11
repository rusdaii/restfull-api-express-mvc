const movieRepository = require("../repositories/movieRepository");

const createMovie = async (movieData) => {
  return movieRepository.createMovie(movieData);
};

const getMovieById = async (movieId) => {
  return movieRepository.getMovieById(movieId);
};

const updateMovie = async (movieId, newData) => {
  return movieRepository.updateMovie(movieId, newData);
};

const deleteMovie = async (movieId) => {
  return movieRepository.deleteMovie(movieId);
};

const getAllMovies = async () => {
  return movieRepository.getAllMovies();
};

module.exports = {
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  getAllMovies,
};
