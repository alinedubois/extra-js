// create a function called triple, that receives a number as argument and returns it multiplied by 3.

const triple = (number) => {
 return number*3;
};

// create a function called tripleTheSum that receives 2 numbers as arguments, add both numbers and return the triple of the result, by calling the triple function.

const tripleTheSum = (a, b) => {
 const sum = a+b;
 return triple(sum);
};

console.log(tripleTheSum(4, 6))
