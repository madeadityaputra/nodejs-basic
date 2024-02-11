import os from "os";

console.log(os.platform());
console.log(os.arch());
console.table(os.cpus());
console.log(os.uptime());
console.log(os.totalmem());
console.log(os.freemem());
console.table(os.networkInterfaces());
console.log(os.hostname());
