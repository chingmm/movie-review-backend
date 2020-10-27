require ("dotenv").config();
const express = require("express");
const app = express();
const {PORT = 3000} = process.env;
const cors = require ("cors");
const morgan = require ("morgan");
const mongoose = require ("./db/db");
const AuthRouter = require("./controllers/user")
const MovieRouter = require("./controllers/movies")
const auth = require("./auth")

//Middleware

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"))

//Routers
app.get("/", auth, (req, res) => {
    res.json(req.payload)
});

app.use("/auth", AuthRouter)

app.use("/movie", MovieRouter);

//Listeners

app.listen(PORT, () => {
    console.log(`you are listening on port ${PORT}`)
});