const products = [];

module.exports = class Product {
  constructor({ title }) {
    this.title = title;
  }

  save() {
    products.push(this);
  }

  //Tylko na Product.fetchAll();
  static fetchAll() {
    return products;
  }
};
