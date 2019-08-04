const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const Jaycoin = require("../../BlockchainService/Blockchain");

//User Model
const Wallet = require("../../models/Wallet");
