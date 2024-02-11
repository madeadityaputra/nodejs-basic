import { Console } from "console";
import fs from "fs";

//* membuat file
const file = fs.createWriteStream("application.log");

//* menentukan (log) akan di kirim kemana
const log = new Console({
	stdout: file,
	stderr: file,
});

log.info("Hello World");
log.error("Upss");

//* membuat data untuk table
const person = {
	firstName: "Made",
	lastName: "Aditya",
};
log.table(person);
