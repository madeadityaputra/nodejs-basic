function samplePromise() {
  return Promise.resolve("Made");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
