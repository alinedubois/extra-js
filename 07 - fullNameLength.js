// create a function fullNameLength that receives the name and surname as parameters
//   and returns the length of the full name,
//   counting with the extra space that separates
//   both names

const fullNameLength = (name, surname) => {

    return `${name} ${surname}`.length;
  
};

console.log(fullNameLength("bob", "smith"));
