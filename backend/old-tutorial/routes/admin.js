const express = require("express");

const router = express.Router();

// Router

router.get("/user", (req, res, next) => {
  console.log(req.body);
  res.send({ name: "ArSo", id: 12345 });
});

module.exports = router;
