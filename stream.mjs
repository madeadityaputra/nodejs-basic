import fs from "fs";

const writer = fs.createWriteStream("target.log"); //* membuat file bernama target.log

writer.write("Made\n");
writer.write("Aditya\n");
writer.write("Putra\n");
writer.end();

const reader = fs.createReadStream("target.log"); //* untuk membaca isi file di dalam fiel target.log dan memunculkannay di dalam terminal

reader.addListener("data", (data) => {
  console.log(data.toString());
});

//* jika kita membuat aplikasi berbasisi client server , kita akan banyak menggunakan class stream ini
