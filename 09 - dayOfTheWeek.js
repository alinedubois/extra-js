// create a function dayOfTheWeek that will receive a string of a day of the week as a parameter,
// and return 'take some rest!'if the argument received is 'Sunday',
//  otherwise, return 'no time to rest, it's just ...' where ... is the day of the week

const dayOfTheWeek = (day) => {
    if (day==="Sunday"){

        return "take some rest!";
    }else{
        return "no time to rest, it's just " +day;
    }

   
}

console.log(dayOfTheWeek("Saturday"))