const products = [];

exports.getProduct = (req, res, next) => {
  res.send({ produkty: products });
  res.redirect("/");
};

exports.postAddProdcut = (req, res, next) => {
  products.push({ title: req.body.title || "test" });
};
