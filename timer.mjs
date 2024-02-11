//* timer merupakan standard library untuk melakukan scedhuling
//* function ini terdapat di globals node js, sehinnga kita bisa melakukannya tanpa melakukan import, namun semmua function timer menggunakan callback
//* di node js terdapat timer version promise , dan jika kita ingin menggunakannya kita harus menginport module timer/promise

//* fersi callback
setInterval(() => {
  console.log(` Start time at ${new Date()}`);
}, 1000);

//* untuk menyelesaikan program yang berjalan gunkan ( ctrl + c )
