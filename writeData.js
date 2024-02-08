const fs = require("fs");
const data = `Dream is not that which you see while sleeping it is something that does not let you sleep.\nWe cannot solve problems with the kind of thinking we employed when we came up with them.`;
fs.writeFile("names.txt", data, (msg) => {
  console.log("Completed Writing ✍");
});
