function samplePromise() {
  return Promise.resolve("Made");
}

const name = await samplePromise();
console.log(name);
