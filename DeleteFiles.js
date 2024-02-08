const fs = require("fs");
const argument = process.argv;
for (n = 1; n <= argument[2]; n++) {
  fs.unlinkSync(`./dataBackup/text-${n}.html`);
}
