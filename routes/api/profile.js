const express = require("express");
const router = express.Router();
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

const Jaycoin = require("../../BlockchainService/Blockchain");

//User Model
const Wallet = require("../../models/Wallet");

//@route GET /api/profile
//@desc Get users profile
//@access private
/*
Profile:
x - Public key
x - Name
x - Email
x - Balance
x - Sent Transactions
x - Received Transactions
x - Pending Transactions
x - Mined blocks
- Blockchain difficulty
- Blockchain mining reward
*/
router.get("/", auth, (req, res) => {
  Wallet.findById(req.wallet.id)
    .select("-password -privateKey")
    .then(wallet => {
      if (!wallet)
        return res
          .status(400)
          .json({ errors: [{ msg: "Wallet does not exist" }] });

      const { name, email, publicKey } = wallet;

      const balance = Jaycoin.getBalance(publicKey);

      const sentTxs = Jaycoin.getSentTransactions(publicKey);
      const receivedTxs = Jaycoin.getReceivedTransactions(publicKey);
      const pendingTxs = Jaycoin.getPendingTransactions(publicKey);
      const minedBlocks = Jaycoin.getMinedBlocks(publicKey);

      const difficulty = Jaycoin.getDifficulty();
      const miningReward = Jaycoin.getMiningReward();

      const profile = {
        name,
        email,
        publicKey,
        balance,
        sentTxs,
        receivedTxs,
        pendingTxs,
        minedBlocks,
        difficulty,
        miningReward
      };
      return res.json(profile);
    })
    .catch(err => res.send(err));
});

module.exports = router;
