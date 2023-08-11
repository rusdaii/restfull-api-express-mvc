const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const upload = require("../middlewares/multer");

router.get("/movies", movieController.getAllMovies);
router.post("/movie", upload.single("photo"), movieController.createMovie);
router.get("/movie/:id", movieController.getMovieById);
router.put("/movie/:id", movieController.updateMovie);
router.delete("/movie/:id", movieController.deleteMovie);

module.exports = router;
