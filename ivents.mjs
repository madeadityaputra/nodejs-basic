import { EventEmitter } from "events";

const emmiter = new EventEmitter();

emmiter.addListener("hello", (name) => {
  console.log(`hello ${name}`); //* masukan nama event dan berikakn callback atau function
});
emmiter.addListener("hello", (name) => {
  console.log(`hai ${name}`);
});

emmiter.emit("hello", "made"); //* nama iventnya dan nama dari variable name
