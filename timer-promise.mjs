import timers from "timers/promises";

// console.log(new Date());
// const name = await timers.setTimeout(3000, "Made");
// console.log(new Date());
// console.log(name);

for await (const startTime of timers.setInterval(1000, "ignored")) {
  console.log(`start time at ${new Date()}`);
}
