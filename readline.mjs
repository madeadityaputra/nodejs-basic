import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

const name = await rl.question("hello whats your name ? ");

console.log(`hello, my name is ${name}`);

rl.close();
