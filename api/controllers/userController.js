const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validate = require("email-validator");

const User = require("../models/userModel");

//?     Post        /api/v1/user        PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("please fill every fields");
  }

  const emailValidate = await validate.validate(email);
  if (!emailValidate) {
    res.status(400);
    throw new Error("Invalid Email");
  }

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("email already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });
  if (!user) {
    res.status(400);
    throw new Error("invalid credentials");
  } else {
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      id: user._id,
      username: user.userName,
    });
  }
});

//?     Post        /api/v1/user/login        PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("please fill every fields");
  }

  const emailValidate = await validate.validate(email);
  if (!emailValidate) {
    res.status(400);
    throw new Error("Invalid Email");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = generateToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });
    res.status(200).json({
      success: true,
      username: user.userName,
    });
  } else {
    res.status(400);
    throw new Error("invalid credentials");
  }
});

//?     get        /api/v1/user/logout        Private
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.status(200).json({
    success: true,
    message: "logged out",
  });
});

//?     Get        /api/v1/user/me        PRIVATE
const meUser = asyncHandler(async (req, res) => {
  const { _id, userName, email } = res.locals.user;
  res.status(200).json({
    success: true,
    id: _id,
    username: userName,
    email,
  });
});

//*     FUNCTIONS
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  meUser,
};
