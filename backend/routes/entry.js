const express = require("express");
// const { body } = require('express-validator/check');
// const isAuth = require('../middleware/is-auth');
const trainingController = require("../controllers/training");

const router = express.Router();

// GET /entry/posts
router.get("/entry", entryController.getEntries);

// POST /entry/post
router.post(
  "/post",
  entryController.createPost,
);

router.get("/post/:postId", entryController.getEntry);

router.put(
  "/post/:postId",
  entryController.updatePost,
);

router.delete("/post/:postId", entryController.deletePost);

module.exports = router;
