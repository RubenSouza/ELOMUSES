const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
// const cron = require("node-cron");

//Start express

const app = express();

//PORT

const PORT = process.env.PORT || 3001;

//.env file

dotenv.config();

//Connect to MongoDB

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Error:", error);
    process.exit(1);
  }
};

// // NODE-CRON para execução a cada 2 minutos para teste
// cron.schedule("*/2 * * * *", () => {
//   // Lógica da tarefa a ser executada a cada 2 minutos
//   console.log("Tarefa a cada 2 minutos executada!");
//   // Aqui você pode adicionar a lógica que deseja testar
// });

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

connectDB().then(() => {
  app.listen(PORT, error => {
    if (error) throw error;
    console.log(`Server is running in http://localhost:${PORT}`);
  });
});
