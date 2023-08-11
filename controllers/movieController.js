const movieService = require("../services/movieService");
const responseHandler = require("../middlewares/responseHandler");
const errorHandler = require("../middlewares/errorHandler");

const createMovie = async (req, res) => {
  try {
    const { id, title, genres, year } = req.body;
    const imgFileName = req.file ? req.file.filename : null;

    if (!imgFileName) {
      return responseHandler(res, { message: "No image selected" }, 400);
    }
    const imageUrl = `http://localhost:3000/images/${imgFileName}`;

    const movieData = {
      id,
      title,
      genres,
      year,
      photo: imageUrl,
    };

    const newMovie = await movieService.createMovie(movieData);
    responseHandler(
      res,
      {
        message: "Movie created successfully.",
        movie: newMovie,
      },
      201
    );
  } catch (error) {
    if (error.message === "Movie id already registered.") {
      return responseHandler(
        res,
        { message: "Movie already registered." },
        400
      );
    }
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await movieService.getAllMovies();
    responseHandler(res, allMovies);
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const getMovieById = async (req, res) => {
  try {
    const movieId = req.params.id;
    const movie = await movieService.getMovieById(movieId);
    if (!movie) {
      return responseHandler(res, { message: "Movie not found." }, 404);
    }
    responseHandler(res, movie);
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const newData = req.body;
    const updatedMovie = await movieService.updateMovie(movieId, newData);
    if (!updatedMovie) {
      return responseHandler(res, { message: "Movie not found." }, 404);
    }
    responseHandler(res, {
      message: "Movie updated successfully.",
      movie: updatedMovie,
    });
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id;
    const deletedMovie = await movieService.deleteMovie(movieId);
    if (!deletedMovie) {
      return responseHandler(res, { message: "Movie not found." }, 404);
    }
    responseHandler(res, { message: "Movie deleted successfully." });
  } catch (error) {
    errorHandler(res, 500, "Internal Server Error.");
  }
};

module.exports = {
  createMovie,
  getMovieById,
  updateMovie,
  deleteMovie,
  getAllMovies,
};
