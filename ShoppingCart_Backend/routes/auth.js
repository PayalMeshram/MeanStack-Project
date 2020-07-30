
const express = require('express')
const { check } = require("express-validator");
const router = express.Router();

const {signUp,signIn,getAllUser} = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 })
  ],
  signUp
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 1 })
  ],
  signIn
);

router.get("/get",getAllUser);

module.exports = router;



