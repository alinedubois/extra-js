// create a function stepByStep that will receive a number as argument and print the numbers starting from 0.
// i.e: stepByStep(5)
// "012345"


const stepByStep = (number) => {
    let str = '';
    for (let i=0; i<=number; i++){
      str = str + i;
    }
return str
}


console.log(stepByStep(5))