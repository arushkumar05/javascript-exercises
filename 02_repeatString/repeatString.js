const repeatString = function (line, num) {
  let ans = "";
  if (num < 0) {
    return "ERROR";
  } else {
    for (let i = 1; i <= num; i++) {
      ans = ans + line;
    }
    return ans;
  }
};

// Do not edit below this line
module.exports = repeatString;
