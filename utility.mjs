import util from "util";

const firstName = "Made ";
const lastName = "Aditya";

console.log(`hello ${firstName} ${lastName}`);
console.log(util.format("hello %s %s", firstName, lastName));
//* hasilnya akan sama saja

const person = {
	firstName: "Made",
	lastName: "Aditya",
};
console.log(`person : ${JSON.stringify(person)}`);
console.log(util.format("person : %j", person));
//* ini juga hasilnya sama
