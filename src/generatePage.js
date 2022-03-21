const fs = require('fs');

const writeToFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File content was successfully created!"
      });
    });
  });
};

const copyToFile = () => {
  return new Promise ((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "Style sheet was successfully copied"
      });
    });
  });
};

module.exports = {writeToFile, copyToFile};