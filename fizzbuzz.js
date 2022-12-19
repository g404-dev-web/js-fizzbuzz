//
// This is only a SKELETON file for the 'FizzBuzz' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

let fizzbuzz = function (x) {
   


const divisiblePar3 = (x % 3 === 0);
const divisiblePar5 = (x % 5 === 0);

let FizzBuzz = "";

if (divisiblePar3 && x % 5 != 0){
    console.log("fizz")
    return FizzBuzz += "Fizz";
}

else if (divisiblePar5 && x % 3 != 0) {
    console.log("Buzz")
    return FizzBuzz += "Buzz";
}

else if (divisiblePar3 && divisiblePar5){
    console.log("fizzbuzz")
    return FizzBuzz += "fizzbuzz" ;
}
else {
    console.log(x)
    return x
};

};

fizzbuzz(2) 
fizzbuzz(5) 
fizzbuzz(6) 
fizzbuzz(11) 
fizzbuzz(30) 
