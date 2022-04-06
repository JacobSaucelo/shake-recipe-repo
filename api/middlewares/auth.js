const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const authenticate = jwt.verify(token, process.env.JWT_SECRET);
      res.locals.user = await User.findById(authenticate.id).select(
        "-password"
      );
      next();
    } catch (error) {
      res.status(401);
      throw new Error("Unauthorized invalid token");
    }
  } else {
    res.status(401);
    throw new Error("Unauthorized no token");
  }
});

const checkUser = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;
  if (token) {
    try {
      const authenticate = jwt.verify(token, process.env.JWT_SECRET);
      res.locals.user = await User.findById(authenticate.id).select(
        "-password"
      );
      next();
    } catch (error) {
      console.log("no token");
      next();
    }
  } else {
    console.log("no token");
    next();
  }
});

module.exports = { protect, checkUser };
