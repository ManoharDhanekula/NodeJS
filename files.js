const fs = require("fs");
const data = `Dream is not that which you see while sleeping it is something that does not let you sleep.\nWe cannot solve problems with the kind of thinking we employed when we came up with them.`;

function dataWritingNfiles() {
  const argument = process.argv;

  for (n = 1; n <= argument[2]; n++) {
    fs.writeFile(`./dataBackup/text-${n}.html`, data, (msg) => {
      console.log("Completed Writing ✍");
    });
  }
}
dataWritingNfiles();
