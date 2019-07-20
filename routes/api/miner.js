const express = require("express");
const router = express.Router();

const JayCoin = require("../../BlockchainService/Blockchain");

//@route POST /mine
//@desc Mine pending transactions
//@access Public
router.post("/", (req, res) => {
  const { publicKey } = req.body;
  JayCoin.minePendingTransactions(publicKey);
  res.json({ success: true });
});

module.exports = router;
