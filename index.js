require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//My routes

const productRoutes = require("./Views/product");


//DB Connection
mongoose
  .connect(  process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//Middlewares
app.use(bodyParser());
app.use(cookieParser());
app.use(cors());

//My Routes

app.use("/api", productRoutes);

//PORT
const port =  8080;


//Starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
