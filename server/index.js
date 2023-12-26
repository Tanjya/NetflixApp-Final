const express = require("express");
const cors = require("cors");
const { prisma } = require("./db");

const app = express();
app.use(cors());

//! all movie list
app.get("/movies/list", async (req, res) => {
  const offset = parseInt(req.query.offset) || 0;
  const movies = await prisma.movie.findMany({
    skip: offset,
    take: 12,
  });
  const count = await prisma.movie.count();

  return res.json({ movies, count });
});

//! particular movie
app.get("/movies/:id", async (req, res) => {
  // console.log(req);
  const id = req.params.id;
  const movie = await prisma.movie.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  return res.send(movie);
});
app.listen(4000, () => {
  console.log("server running port 4000!");
});
