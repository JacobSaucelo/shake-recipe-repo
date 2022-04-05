const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  meUser,
} = require("../controllers/userController");
const { protect } = require("../middlewares/auth");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/logout", protect, logoutUser);
router.get("/me", protect, meUser);

module.exports = router;
