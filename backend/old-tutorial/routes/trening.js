const express = require("express");

const controller = require("../controllers/details");

const router = express.Router();

// Router

router.use("/add-product", (req, res, next) => {
  console.log("ADD PRODUCT");
  res.send(
    '<form action="/product" method="POST"><input type="text" name="title"/><button type="submit">ZAPISZ</button></form>'
  );
});

router.get("/product", controller.getProduct);

module.exports = router;
