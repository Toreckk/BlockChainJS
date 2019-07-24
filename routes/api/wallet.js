const express = require("express");
const router = express.Router();
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator/check");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

//Wallet Model
const Wallet = require("../../models/Wallet");

//@route POST api/wallet
//@desc Create a new wallet
//@access Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    //Check for existing user
    Wallet.findOne({
      email
    }).then(wallet => {
      if (wallet)
        return res.status(400).json({
          msg: "User already exists"
        });
      const key = ec.genKeyPair();

      const publicKey = key.getPublic("hex");
      const privateKey = key.getPrivate("hex");

      const newWallet = new Wallet({
        name,
        email,
        password,
        publicKey,
        privateKey
      });

      // Create salt & hash
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newWallet.password, salt, (err, hash) => {
          if (err) throw err;
          newWallet.password = hash;
          newWallet.save().then(wallet => {
            jwt.sign(
              {
                id: wallet.id
              },
              config.get("jwtSecret"),
              {
                expiresIn: 3600
              },
              (err, token) => {
                if (err) throw err;

                res.json({
                  token
                });
              }
            );
          });
        });
      });
    });
  }
);

module.exports = router;
