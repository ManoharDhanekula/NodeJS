const fs = require("fs");

fs.readFile(`names.txt`, "utf-8", (err, msg) => {
  if (err) {
    console.log(err);
  }
  console.log(msg);
});
