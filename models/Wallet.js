const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const WalletSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  publicKey: {
    type: String,
    required: true
  },
  privateKey: {
    type: String,
    required: true
  }
});

module.exports = Wallet = mongoose.model("wallet", WalletSchema);
