const removeFromArray = function (input, ...args) {
  const newArray = [];
  //   input.forEach((item) => {
  //     if (!args.includes(item)) {
  //       newArray.push(item);
  //     }
  //   });

  //   for (let i = 0; i < input.length; i++) {
  //     if (!args.includes(input[i])) {
  //       newArray.push(input[i]);
  //     }
  //   }

  return input.filter((val) => !args.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
