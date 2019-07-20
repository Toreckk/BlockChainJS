const express = require("express");
const router = express.Router();

const JayCoin = require("../../BlockchainService/Blockchain");

//@route GET /
//@desc Get blockchain
//@access Public
router.get("/", (req, res) => {
  return res.json(JSON.stringify(JayCoin.getChain()));
});

module.exports = router;
