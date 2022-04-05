const express = require("express");
const {
  getShakes,
  postShakes,
  putShakes,
  delShakes,
  getMore,
} = require("../controllers/shakesController");

const router = express.Router();
const { protect } = require("../middlewares/auth");

router.route("/").get(protect, getShakes).post(protect, postShakes);
router
  .route("/:id")
  .get(protect, getMore)
  .put(protect, putShakes)
  .delete(protect, delShakes);

module.exports = router;
