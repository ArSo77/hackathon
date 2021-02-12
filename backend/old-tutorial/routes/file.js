const express = require("express");
const router = express.Router();

const file = require("../utils/file");

// Router

router.post("/save", (req, res, next) => {
  console.log("/file/save", req.body);
  file.saveToFile("testFile.json", req.body);
});

router.get("/", (req, res, next) => {
  let response = file.fetchFromFile("testFile.json", (testFileObj) => {
    res.send(testFileObj);
  });
});
module.exports = router;
