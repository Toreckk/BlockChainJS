const express = require("express");
const router = express.Router();

const Transaction = require("./BlockchainService/Transaction");
const JayCoin = require("../../BlockchainService/Blockchain");

//@route POST /transaction
//@desc Create a new transaction
//@access Public
router.post("/", (req, res) => {
  //const { publicKey } = req.params;
  //const balance = JayCoin.getBalance(publicKey);
  //res.json({ balance });
});

module.exports = router;
