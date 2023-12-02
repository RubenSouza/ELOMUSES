const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");

//Start express

const app = express();

//PORT

const PORT = process.env.PORT || 3001;

//.env file

dotenv.config();

//Connect to MongoDB

//JSON

app.use(express.json());

//Helmet

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

//Morgan

app.use(morgan("common"));

//Body Parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CORS

app.use(cors());

//MODELS

require("./models");

//ROUTES

app.use("/", require("./routes"));

//APP LISTEN

app.listen(PORT, error => {
  if (error) throw error;
  console.log(`Server is running in http://localhost:${PORT}`);
});
