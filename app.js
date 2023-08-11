const express = require("express");
const app = express();
const port = 3000;
const moviesRouter = require("./routes/movies.route");
const userRouter = require("./routes/user.route");
const path = require("path");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(moviesRouter);
app.use(userRouter);
app.use("/images", express.static(path.join(__dirname, "/images")));

app.listen(port, () => {
  console.log(`Server is live on port ${port}`);
});
