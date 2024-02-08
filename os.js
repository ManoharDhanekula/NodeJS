const os = require("os");

function memory(num) {
  return `${(num / 1024 / 1024 / 1024).toFixed(2)} GB`;
}
console.log("Free Space : ", memory(os.freemem()));
console.log("Total Space : ", memory(os.totalmem()));
console.log("Version : ", os.version());
console.log("Processor : ", os.cpus());
