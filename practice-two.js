// Practice Exercises

// Que 1: Given an array. Write a function to change all even numbers in an array to odd numbers by adding 1 to it.
// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be:
// [1, 3, 3, 59, 5, 7, 25, 9, 15, 5]

// const arrayToOdd=num=>num%2===0 ? num+1:num;
// console.log(arr.map(arrayToOdd));

// Que 2:Get the names in an array for only those who have a cycle.
const family = [
	{
		name: "Tanay",
		haveCycle: true,
	},
	{
		name: "Akanksha",
		haveCycle: false,
	},
	{
		name: "Tanvi",
		haveCycle: true,
	},
	{
		name: "Kanak",
		haveCycle: false,
	},
];
//   Your output should be: ['Tanay', 'Tanvi']

// const names=(newFamily,value)=>value.haveCycle ? [...newFamily, value.name] : newFamily;

// console.log(family.reduce(names, []));

// OR

// const haveCycle=value=>value.haveCycle;
// const names=value=>value.name;

// const filtered=(family.filter(haveCycle));
// console.log(filtered.map(names));

// OR

// const haveCycle=family.filter(value=>value.haveCycle).map(value=>value.name);

// console.log(haveCycle);

// Que 3: Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.

// const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];

// Your output should be: [2, 6, 4]

// const evenLessThan8=nums=>nums<8 && nums%2===0 ;
// console.log(`Numbers less than 8 and even are :- ${arr.filter(evenLessThan8)}`);
// console.log(arr.filter(evenLessThan8));

// Que 4: Given an array. Write a function that takes in the given array and prints only the words which are more than 5 characters in length.
// const arr = ['eat', 'sleep', 'repeat', 'code'];

// Your output should be: ['repeat']

// const moreThan5=item=>item.length>5;

// console.log(arr.filter(moreThan5));

// Que 5:- Given an array. Write a function to get the sum of all elements which are greater than 50.

// const arr = [1, 2, 3, 58, 5, 6, 62, 8, 70];

// Your output should be: 190

// const sum = arr.filter(elements=>elements>50).reduce((result,elements)=>result+=elements);

// console.log(sum);

// Que 6:-Given an array. Write a function to find the product of all elements which are even.
// const arr = [1, 2, 3, 7, 5, 6, 8, 9];

// Your output should be: 96

// const product= arr.filter(elements=>elements%2===0).reduce((result,elements)=>result*=elements)

// console.log(product);

// Que 7: Given an array of objects. Write a function to find the sum of ages of each person.
// const arr = [
// 	{
// 		name: "Jay",
// 		age: 60
// 	},
// 	{
// 		name: "Gloria",
// 		age: 36
// 	},
// 	{
// 		name: "Manny",
// 		age: 16
// 	},
// 	{
// 		name: "Joe",
// 		age: 9
// 	}
// ]
// Your output should be: 121 /*** 60+36+16+9 ***/

// const ageSum=arr.map(items=>items.age).reduce((result,element)=>result+=element);

// console.log(ageSum);

// Que 8:- Given an array. Convert it in to an object with key as the index of each element and value as the element itself.

// const arr = ["You", "all", "are", "rockstars"];

// Your output should be:
// {'0': "You", '1': "all", '2': "are", '3': "rockstars"}

// const output=(acc,items,index)=> ({...acc,[index]:items});
// console.log(arr.reduce(output,{}));

// Que 9:- Given an array of objects. If the name of an item is more than 5 characters in length, add type as ‘vegetable’. If the name of an item is less than or equal to 5 characters in length, add type as ‘fruit’.

// const arr = [
// 	{
// 		name: "Apple"
// 	},
// 	{
// 		name: "Mango"
// 	},
// 	{
// 		name: "Potato"
// 	},
// 	{
// 		name: "Guava"
// 	},
// 	{
// 		name: "Capsicum"
// 	}
// ]

// Your Output should be:
// [
// 	{
// 		name: "Apple",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Mango",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Potato"
// 		type: "vegetable"
// 	},
// 	{
// 		name: "Guava",
// 		type: "fruit"
// 	},
// 	{
// 		name: "Capsicum",
// 		type: "vegetable"
// 	}
// ]

// const output=(items)=>({...items,"type":items.name.length>5 ? "vegetable":"fruit"})

// console.log(arr.map(output));

// How to do it using reduce?

// Que 10:-Given an array of objects.
// Question:
// a. Get all the items in an array whose quantity is less than 2.
// b. Get the total quantity of items present in the inventory.
// c. Find the object which contains the item whose quantity is zero.

const inventory = [
	{ name: "fans", quantity: 3 },
	{ name: "chimneys", quantity: 0 },
	{ name: "bulbs", quantity: 5 },
	{ name: "stove", quantity: 1 },
];
// a.
// const quantityLessThan2=inventory.filter(num=>num.quantity<3).map(item=>item.name);
// console.log(quantityLessThan2);

// b.
// const sum=(acc,value)=>acc+=value.quantity;
// console.log(inventory.reduce(sum,0));

// c.
// const zeroQuantity=item=>item.quantity===0;
// console.log(inventory.filter(zeroQuantity));

//   Que 11:-Given an array. Write a function to join all elements of the array with a hyphen in between them.

// const arr = ["Violet", "Indigo", "Blue", "Green", "Yellow", "Orange", "Red"];

// Your output should be:
// Violet-Indigo-Blue-Green-Yellow-Orange-Red

// const output=(acc,value)=>`${acc}-${value}`;
// console.log(arr.reduce(output));

// Que 12:-Write a function that accepts a number as input and inserts hyphens between every two even numbers.

// If your input is: 24345687

// Your output should be: 2-23456-87
// let number=24345687;
// number+="";
// const num=number.split("");
// const addHiphen=(element1,index,element2)=>element1%2===0 && element2[index+1]%2===0 ?`${element1}-`:element1;
// const result=num.map(addHiphen);
// console.log(result.join(""));

// Que 13:-Write a function that takes in a string and converts all the characters to uppercase. (Hint: toUpperCase())
// If your input is: "neogrammer"
// Your output should be: "NEOGRAMMER"

// If your input is: "neoG"
// Your output should be: "NEOG"

// const input="neogrammer";
// console.log(input.toUpperCase());

// Que 14:-Write a function that takes in a string and converts only the vowels to uppercase and all other characters to lowercase.
// If your input is: "neoG"
// Your output should be: "nEOg"

// const [...input]="mohit";

// const output=element=>element==='a'||element==='e'||element==='i'||element==='o'||element==='u' ? element.toUpperCase():element;
// console.log(input.map(output));

// Que 15:-Flatten an array without using flat().

// const input = [
//     ['a', 'b', 'c'],
//     ['c', 'd', 'e'],
//     ['e', 'd', 'f'],
//   ];

//   Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']

// console.log(input.flat());
// const array=(acc,value)=>[...acc,...value];
// console.log(input.reduce(array));

// Que 16:- Count the occurrences of distinct elements in the given array.
const input = [
	["a", "b", "c", "c"],
	["c", "d", "e", "d"],
	["e", "d", "f", "b"],
];

//   Your output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
// const newInput = input.flat();
// const output = (acc, value) =>
// 	acc[value] === undefined
// 		? { ...acc, [value]: 1 }
// 		: { ...acc, [value]: acc[value] + 1 };
// console.log(newInput.reduce(output, {}));

// const x = () => {
// 	for (var i = 1; i <= 5; i++) {
// 		const time = x => {
// 			setTimeout(() => console.log(x), x * 1000);
// 		};

// 		time(i);
// 	}
// };
// x();

const output = input.reduce((acc, value) => {
	acc[value] === undefined
		? { ...acc, [value]: 1 }
		: { ...acc, [value]: acc[value] + 1 };
}, {});
console.log(output);
