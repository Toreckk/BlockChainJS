const express = require("express");
const router = express.Router();
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//User Model
const Wallet = require("../../models/Wallet");

//@route POST api/auth
//@desc Authenticate the user
//@access Public
router.post("/", (req, res) => {
  const { email, password } = req.body;

  //Simple validation
  if (!email || !password) {
    res.status(400).json({ msg: "Enter all fields" });
  }

  //Check for existing user
  Wallet.findOne({ email }).then(wallet => {
    if (!wallet) return res.status(400).json({ msg: "Wallet does not exist" });

    // Compare user password hash with sent password
    bcrypt.compare(password, wallet.password).then(isMatch => {
      if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

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

module.exports = router;
