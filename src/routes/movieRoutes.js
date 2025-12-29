import express from "express";

const router = express.Router()


export const nestedmovies = router.get("/movie/hello", (req, res) => {
  res.json({ message: "Hello Janeman movie dekhogi!" });
})


export const homeroute = router.get("/", (req, res) => {
  res.json({ message: "Welcome to our Home page or / route" });
})


export const movie = router.get("/movie", (req, res) => {
  res.json({ message: "This is the main movie page!" });
})






