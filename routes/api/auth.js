const express = require("express");
const router = express.Router();
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//User Model
const Wallet = require("../../models/Wallet");

//@route POST api/auth
//@desc Authenticate the user & get token
//@access Public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    res.status(400).json({ errors: [{ msg: "Enter all fields" }] });
  }

  //Check for existing user
  Wallet.findOne({ email }).then(wallet => {
    if (!wallet)
      return res
        .status(400)
        .json({ errors: [{ msg: "Wallet does not exist" }] });

    // Compare user password hash with sent password
    bcrypt.compare(password, wallet.password).then(isMatch => {
      if (!isMatch)
        return res
          .status(400)
          .json({ errors: [{ msg: "Invalid credentials" }] });

      jwt.sign(
        { id: wallet.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
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

//@route GET api/auth
//@desc Authenticate the user
//@access Public
router.get("/", auth, (req, res) => {
  Wallet.findById(req.wallet.id)
    .select("-password -privateKey")
    .then(wallet => res.json(wallet))
    .catch(err => res.status(500).send("Server error"));
});

module.exports = router;
