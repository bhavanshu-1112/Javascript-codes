//type conversion

console.log("this is tut1");
let myVar= 34;
myVar = String(myVar);
console.log(myVar,(typeof myVar));

var boolean = true;
console.log(boolean)

 boolean = String(true);
console.log(boolean)
console.log(boolean,typeof boolean);
boolean = false;
console.log(boolean, typeof boolean);

let date = new Date();
console.log(date);
date = (String)(date);
console.log(date,typeof date);


let arr= [1,2,3,4];
console.log(arr,typeof arr,arr.length)
arr = String(arr)
console.log(arr,typeof arr);
console.log(arr.length)

let i = 8;
console.log(i.toExponential())
console.log(i.toString())

let stri = "4356f43"

console.log(stri,typeof stri)
stri = Number(stri)
console.log(stri,typeof stri)

let number = parseInt('34')
console.log(number.toFixed(2),typeof number)
console.log(number,typeof number)


// type coercion
let myStr = "43543";
let myNum=  5345;
console.log(myStr + myNum)
myStr = (Number)(myStr)
console.log(myStr  + myNum)

