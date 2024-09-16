const express = require("express");
const cors=require ('cors')
const app = express();

require("dotenv").config(); // load env variables into process.env 

/**
 * to read the env files we have install a package dotenv
 * it read the .env files and populates the process.env object
 */

const connectDB = require("./config/db")

// routes
const userRouter  = require("./routes/userRoutes")
app.use(cors());
app.use(express.json());
app.use("/api/users", userRouter)

connectDB();
app.listen(5000, () => {
    console.log("Server is on port 5000")
})
