const Movie = require("../models/movie");

const createMovie = async (movieData) => {
  const existingMovie = await Movie.findOne({
    where: {
      id: movieData.id,
    },
  });

  if (existingMovie) {
    throw new Error("Movie id already registered.");
  }
  return Movie.create(movieData);
};

const getMovieById = async (movieId) => {
  return Movie.findByPk(movieId);
};

const updateMovie = async (movieId, newData) => {
  const movie = await getMovieById(movieId);
  if (!movie) {
    return null;
  }
  return movie.update(newData);
};

const deleteMovie = async (movieId) => {
  const movie = await getMovieById(movieId);
  if (!movie) {
    return null;
  }
  return movie.destroy();
};

const getAllMovies = async () => {
  return Movie.findAll();
};

module.exports = {
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  getAllMovies,
};
