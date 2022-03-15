let studentInfo = {
	id: 20,
	name: "Mohit",
	place: "UK",
};
// console.log(`${studentInfo.id} ${studentInfo.name} ${studentInfo.place}`);

// console.log(studentInfo["id"], studentInfo["name"], studentInfo["place"]);

const {
	id: identity,
	name: naam,
	place: jagah,
	resident: now = "DDN",
} = studentInfo;

console.log(identity, naam, jagah, now);

// let options = {
// 	size: {
// 		width: 100,
// 		height: 200,
// 	},
// 	items: ["Cake", "Donut"],
// 	extra: true,
// };

// const {
// 	size: { width: w, height: h },
// 	items: [item1, item2],
// 	title = "Menu",
// } = options;
// // console.log(w, h, item1, item2, title);

// const showMenu = a => {
// 	console.log(a);
// };
// showMenu(options);

// let options = {
// 	title: "My menu",
// 	items: ["sweet", "potato"],
// };

// const showMenu = ({
// 	title = "Untitled",
// 	width: w = 100,
// 	height: h = 200,
// 	items: [item1, item2],
// }) => {
// 	console.log(`${title} ${w} ${h}`);
// 	console.log(item1);
// 	console.log(item2);
// };

// showMenu(options);

// showMenu({}); // ok, all values are default

// showMenu(); // this would give an error

// syntax
// let {prop : varName = default, ...rest} = object

// let user = { name: "John", years: 30 };
// const { name, years: age, isAdmin = false } = user;
// console.log(name, age, isAdmin);

let num = 45678986543325567888999876n;
console.log(num + 5n);
