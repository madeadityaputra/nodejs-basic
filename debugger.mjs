//* perintah perintah untuk terminal, untuk mendebug file

//* cont/ c = Continue Execution => langsung jalan ke breakpoint selanjutnya
//* next/ n = Step Next => step kode berikutnya
//* step/ s = Step In => untuk masuk ke dalam function
//* out/ o = Out => untuk keluar dari sebuah function
//* pause = Pause Running Code => untuk mengherntikan running code
//* .exit = untuk keluar

function sayHello(name) {
  debugger;
  return `hello ${name}`;
}

const name = "Made";
debugger;
console.log(sayHello(name));
