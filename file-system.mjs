import fs from "fs/promises";

const buffer = await fs.readFile("file-system.mjs");
console.log(buffer.toString());

//* disini juga ada banyak juga standard library nya , tinggal di cek di website resminya
