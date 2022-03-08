// const numList = [1, 3, 55, 22, 44];
// const sumObj = { Even: 0, Odd: 0 };

// const oddAndEvenSumReducer = (accumulator, value) =>
// 	value % 2 === 0
// 		? { ...accumulator, Even: accumulator.Even + value }
// 		: { ...accumulator, Odd: accumulator.Odd + value };

// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, sumObj);
// console.log(oddAndEvenSum);

// const numList = [
// 	{ type: "odd", payload: 1 },
// 	{ type: "odd", payload: 3 },
// 	{ type: "odd", payload: 55 },
// 	{ type: "even", payload: 22 },
// 	{ type: "even", payload: 44 },
// ];
// const sumObj = { Even: 0, Odd: 0 };
// const oddAndEvenSumReducer = (accumulator, value) =>
// 	value.type === "even"
// 		? { ...accumulator, Even: accumulator.Even + value.payload }
// 		: { ...accumulator, Odd: accumulator.Odd + value.payload };

// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, sumObj);
// console.log(oddAndEvenSum);

const numList = [
	{ type: "odd", payload: 1 },
	{ type: "odd", payload: 3 },
	{ type: "odd", payload: 55 },
	{ type: "even", payload: 22 },
	{ type: "even", payload: 44 },
];
const sumObj = { Even: 0, Odd: 0 };
const oddAndEvenSumReducer = (accumulator, value) => {
	switch (value.type) {
		case "even":
			return { ...accumulator, Even: accumulator.Even + value.payload };

		case "odd":
			return { ...accumulator, Odd: accumulator.Odd + value.payload };
	}
};

const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, sumObj);
console.log(oddAndEvenSum);
