const path = require("path");
const rootDir = require("../utils/path");
exports.get404 = (req, res, next) => {
  console.log("......");
  res.status(404).sendFile(path.join(rootDir, "views", "404.html"));
};
