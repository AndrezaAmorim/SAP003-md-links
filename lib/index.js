const fs = require("fs");

const mdLinks = (path) => {
  const regex = /([^[]+)\](\([^)]*)/gm;
  return new Promise ((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        reject("Arquivo não encontrado");
      } else {
        const combined = data.match(regex);
        if (combined == null) {
          reject("Arquivo não contêm links");
        } else {
          const result = combined.map((e) => {
            const split = e.split("](");
            return {text: split[0].replace("\n ", ""), link: split[1]};
          });
          resolve(result);
        }
      }   
    }
    );
  });
};
module.exports = mdLinks;