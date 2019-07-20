const express = require("express");
const router = express.Router();

const JayCoin = require("../../BlockchainService/Blockchain");
//@route GET api/wallet/balance
//@desc Get the balance of a given wallet
//@access Public
router.get("/:publicKey", (req, res) => {
  const { publicKey } = req.params;
  const balance = JayCoin.getBalance(publicKey);
  res.json({ balance });
});

module.exports = router;
