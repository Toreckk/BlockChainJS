const express = require("express");
const mongoose = require("mongoose");

const config = require("config");
const JayCoin = require("./BlockchainService/Blockchain");

const wallet = require("./routes/api/wallet");
const address = require("./routes/api/address");

const app = express();

// Body Parser Middleware
app.use(express.json());

//DB Config
const db = config.get("mongoURI");

//Connect to mongo DB
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

//Use Routes
app.use("/wallet", wallet);
app.use("/address", address);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started in port ${port}`));
