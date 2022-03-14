// Destructuring of array

// const name = ["Mohit", "Tewari"];
// const [firstname, surname] = "Mohit Tewari and   his friends".split("  ");
// console.log(firstname);

const [firstname, surname, ...info] = [
	"Mohit",
	"Tewari ",
	"and   his friends",
	"are awesome",
];
console.log(...info);
