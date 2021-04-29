// create a canIGoToTheBank function that will receive 2 parameters: the day of the week and the time.
// The function must return true only if the bank is still open.
// keep in mind that the bank is open from Monday through Friday and from 10:00 until 18:00

const open = ["monday", "tuesday", "wednesday", "thursday", "friday"];
const hour = [10, 11, 12,13, 14, 15, 16, 17, 18];

const canIGoToTheBank = (day, time) => {

    if (open.includes(day) && hour.includes(time)){
        return true;
    } else {
        return false;
    }
  
};

console.log(canIGoToTheBank("saturday", 10));
