const express = require("express");
const router = express.Router();
const config = require("config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JayCoin = require("../../BlockchainService/Blockchain");
//User Model
const User = require("../../models/User");

//@route POST api/users
//@desc Register new user
//@access Public
router.post("/", (req, res) => {
  const { name, email, password, public_key, private_key } = req.body;

  //Simple validation
  //TODO: remove the public + private key check, it will be created programatically
  if (!name || !email || !password || !public_key || !private_key) {
    res.status(400).json({
      msg: "Enter all fields"
    });
  }

  //Check for existing user
  User.findOne({
    email
  }).then(user => {
    if (user)
      return res.status(400).json({
        msg: "User already exists"
      });

    const newUser = new User({
      name,
      email,
      password,
      public_key,
      private_key
    });

    // Create salt & hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
          jwt.sign(
            {
              id: user.id
            },
            config.get("jwtSecret"),
            {
              expiresIn: 3600
            },
            (err, token) => {
              if (err) throw err;

              res.json({
                token,
                user: {
                  id: user.id,
                  name: user.name,
                  email: user.email,
                  public_key: user.public_key,
                  private_key: user.private_key
                }
              });
            }
          );
        });
      });
    });
  });
});

module.exports = router;
