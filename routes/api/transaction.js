const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const Transaction = require("../../BlockchainService/Transaction");
const JayCoin = require("../../BlockchainService/Blockchain");
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

//Wallet Model
const Wallet = require("../../models/Wallet");

//@route POST /transaction
//@desc Create a new transaction
//@params amount, toAddress
//@access Public
router.post("/", auth, (req, res) => {
  Wallet.findById(req.wallet.id)
    .select("-password")
    .then(wallet => {
      const tx = new Transaction(
        req.body.amount,
        wallet.publicKey,
        req.body.toAddress
      );
      tx.signTransaction(ec.keyFromPrivate(wallet.privateKey));
      JayCoin.addTransaction(tx);
    })
    .then(() => res.json(tx))
    .catch(err => res.json(err));
});

module.exports = router;
