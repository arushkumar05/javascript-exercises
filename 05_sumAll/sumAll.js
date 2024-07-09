const sumAll = function (one, two) {
  if (one < 0 || two < 0) {
    return "ERROR";
  } else if (typeof one != "number" || typeof two != "number") {
    return "ERROR";
  } else {
    let sum = 0;
    if (one > two) {
      let temp = two;
      two = one;
      one = temp;
    }
    for (let i = one; i <= two; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
