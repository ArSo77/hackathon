const fs = require("fs");
const path = require("path");

exports.fetchFromFile = function (fileName, cb) {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "database",
    fileName,
  );
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    }
    cb(JSON.parse(fileContent));
  });
};

exports.saveToFile = function (fileName, obj) {
  const p = path.join(
    path.dirname(process.mainModule.filename),
    "database",
    fileName,
  );
  console.log("p", p);
  fs.readFile(p, (err, fileContent) => {
    let bufferObj = [];
    if (!err) {
      bufferObj = JSON.parse(fileContent);
    }
    bufferObj.push(obj);
    fs.writeFile(p, JSON.stringify(bufferObj), (err) => {
      console.log(err);
    });
  });
};
