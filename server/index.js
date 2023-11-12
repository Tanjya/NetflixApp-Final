const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const movies = require("./movies.json")

//! all movie list
app.get("/movies/list", (req, res) => {
    return res.send(movies);
});

//! particular movie
app.get("/movies/:id", (req, res) => {
    // console.log(req);
    const id = req.params.id;
    const movie = movies.find(m => m.id === id)
    return res.send(movie);
});
app.listen(4000, () => {
    console.log("server running port 4000!")
})