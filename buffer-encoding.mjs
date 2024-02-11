const buffer = Buffer.from("Made Aditya Putra", "utf-8");

console.log(buffer.toString());
console.log(buffer.toString("hex"));
console.log(buffer.toString("base64"));

const bufferBase64 = Buffer.from("TWFkZSBBZGl0eWEgUHV0cmE=", "base64");
console.log(bufferBase64.toString("utf-8"));
