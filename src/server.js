import express from "express";
import { config } from "dotenv";

// Import Routes
import { movie, nestedmovies, homeroute } from "./routes/movieRoutes.js";


const app = express()
config();
// API Routes
app.use("/", movie);

app.use("/hello", nestedmovies);

app.use("/", homeroute);

const PORT = 5001;

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World!" });
})





app.listen(PORT, () => {
  console.log(`Server is running on PORt ${PORT}`);
})


// GET , POST , PUT , DELETE 
// http://localhost:5001 



// We needs routes for each api & endpoints
// AUTH - SignIn , SignUp = http://localhost:5001/auth
// MOVIES - Getting All movies  = http://localhost:5001/movies
// USER - Profile = http://localhost:5001/USER
// WATCHLIST - All watchlist operations = http://localhost:5001/watchlist





























