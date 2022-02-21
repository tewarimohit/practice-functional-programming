

// const name = "Mohit";
// function greet(){
// console.log("hi my name is="+name);
// };


// Faunctional Programming 


// Que 1
// const printName= nameLength=> console.log(`OMG! My name is ${nameLength} long !`);

// printName("Mohit");
// const Obj={};
// Obj.printName=nameLength=> console.log(`OMG! My name is ${nameLength} long !`);
// Obj.printName("Mohit");
// arr=["1","2",nameLength=> console.log(`OMG! My name is ${nameLength} long !`),"4"];
// arr[2](5);


// Que 2
const mohit={
    mother:"Pushpa",age: 26
}
// const aparna={
//     ...mohit,age:mohit.age+3
// }

// console.log(mohit);
// console.log(aparna);
// console.log(mohit===aparna);

// Que 3

// const birthday=(name,age)=>{
//      const Obj={
//          name:name,
//          age:age+5
//      }
//      console.log(`my name is ${Obj.name} and age is ${Obj.age}`);
// }
// birthday("Mohit",25);

// const birthday=(person)=>({...person,age:person.age+5})
// mohitForBirthday=birthday(mohit);
// console.log(mohitForBirthday); 


// Que 4 filter

const numbers=[1,5,99,43,2,8,98,9];
// const isMoreThan10=num=>num>10;
// console.log(numbers.filter(isMoreThan10));


// Que 5 Map

// const incrementByTwo=num=>num+2;
// console.log(numbers.map(incrementByTwo));
// console.log(numbers);


// Que 6 Reduce
// const add=(accumulator,current)=>{
//     if(current<10)
//     accumulator+=current;
//     return accumulator;
// }
// console.log(` The sum of numbers less than 10 is : ${numbers.reduce(add,0)}`);

// Que 7
// const nums=[1,3,5,2,22,11,9];
// const isOdd=(sum,num)=>{
//     if(num%2!==0)
//     sum+=num;
//     return sum;
// }


// console.log(`The sum of odd numbers is :- ${nums.reduce(isOdd,0)}`);


// Que 8 even odd object

// const sum=(oddEvenObject,num)=>
// num%2===0 ?
// {...oddEvenObject,Even:oddEvenObject.Even+num}:
// {...oddEvenObject,Odd:oddEvenObject.Odd+num}
// ;

// const oddEvenObject={Even:0,Odd:0};
// console.log(nums.reduce(sum,oddEvenObject));


// Que 9 currying
// const giveYourName=name=>msg=>`${name} says ${msg}`;
// const mohitSays=giveYourName("Mohit")
// console.log(mohitSays("Hello"));


// Que 10 composition
// const logWithName=msg=>`Mohit says : ${msg}`;
// const logWithId=msg=>`ID:19-10-95 says :: ${msg}`;
// const logWithNameId=msg=>logWithId(logWithName(msg));
// console.log(logWithNameId("We are awesome!!!"));

// Homework

//Que 1 return obj of each item in an array using map

// const output=(num,index)=>{return {[`item ${index +1}`] : num}};

// const objOfArray={item:0};
// console.log(numbers.map(output));

// Que 2 return obj of each item in an array using reduce

// const output=(acc,num,index)=> {return [...acc,{[`items ${index+1}`]:num}]};

// const objOfArray={item:0};
// console.log(numbers.reduce(output,[]));


// Que 3 create reducer using for loop

// const myReduce=(array,function_,initialValue)=>{
//    if(!array.length &&!initialValue ){
//        throw new Error(`Array can't be empty.`)
//     }
//     else{
//         let accumulator=initialValue===undefined?array[0]:initialValue;
//         let currentIndex =initialValue=== undefined? 1: 0;
//             for(let i=currentIndex;i<array.length;i++){
//              accumulator=function_(accumulator,array[i]);
//             }
//             return accumulator;
    
//     }
    
// }

// const sum=(add,num)=>
//     add+=num;



// console.log(myReduce(numbers,sum,0));

//Que 4 currying

// const add=a=>a+1;
// const square=s=>s*s;
// const cube=c=>c*c*c;
// const reducer=(acc,val)=>val(acc);
// const compose=(...fun)=>(num)=>fun.reduce(reducer,num);
// console.log(`Result is :- ${compose(cube,square,add)(2)}`);

//Que 5:Given an array. Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number.
// const arr = [1,2,3,58,5,6,24,8,15,4];
// output=[2,6,8,4]

// let arr = [1,2,3,58,5,6,24,8,15,4];
// const evenLessThan8=num=>num%2===0 && num<=8;
// console.log(arr.filter(evenLessThan8));


// using map
// let arr1=[];
// const evenLessThan8=num=>num%2===0 && num<=8 ?arr1.push(num):0;
// arr.map(evenLessThan8);
// console.log(arr1);
// console.log(arr);


// Que 6: Given an array. Write a function to find the product of all elements which are even.
// const arr=[1,2,3,7,5,6,8,9];
// output should be=96

// const arr=[1,2,3,7,5,6,8,9];
// const productEven=(acc,num)=>{num%2===0 ? acc*=num : 0 ; 
// return acc;
// }
// console.log(arr.reduce(productEven,1));



// By using filter,reduce and without if.

// const arr=[1,2,3,7,5,6,8,9];

// const evenFilter=items=>items%2===0;
// const productEven=(acc,num)=>acc*=num;

// const filteredArray=arr.filter(evenFilter);
// console.log(`Product of all even numbers is :- ${filteredArray.reduce(productEven)}`);


// Que 7: Given an array of objects.If the name of an item is more than 5 char in length,add type as 'vegetable'. If the name of an item is less than or equal to 5 char in length, add type as 'fruit'.
// Input:

const arr=[
    {
        name:"Apple"
    },
    {
        name:"Mango"
    },
    {
        name:"Potato"
    },
    {
        name:"Guava"
    },
    {
        name:"Capsicum"
    }
]

//  Output:[
//  {
//      name:"Apple",
//      type:"fruit"
//  }
// ]


// Ans:-

// const arrayWithType=items=>items.name.length <=5 ? 
// {...items, "type" : "fruit" }:
//  {...items, "type" : "vegetable"};

// console.log(arr.map(arrayWithType));

// OR

// const arrayWithType=items=>({...items, "type":items.name.length>5?"vegetable":"fruit"});

// console.log(arr.map(arrayWithType));











