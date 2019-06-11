// easy challenges
function easy() {

  // secretSociety() returns strings whose chars obtain from given array's elements'
  // first letters by sorting them alphabetically
  // @param {Array} arr
  // @return {String}
  function secretSociety(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Parameter must be Array");
    }
    if(!arr.every(item => typeof item === "string")) throw new Error("Elements must be String");
    return arr.map(item => item.toUpperCase()).sort().
               reduce((char, elem) => char + elem[0], "");
  }

  // isSpecialArray() returns true if even indices contains even number, odds are odds else false
  // @param {Array} arr
  // @return {Boolean}
  function isSpecialArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Parameter must be Array");
    }
    if(!arr.every(item => typeof item === "number")) throw new Error("Elements must be Number");
    return arr.every((item, index) => (item + index) % 2 === 0);
  }

  // largestSwap() returns true if given positive two-digit number is the largest swap else false
  // @param {positive two-digit Number} num
  // @return {Boolean}
  function largestSwap(num) {
    let strNum = String(num);
    if (typeof num !== "number" || strNum.length !== 2) {
      throw new Error("Parameter must be two-digit Number");
    }
    let swapped = strNum.split("").reverse().join("");
    return swapped <= strNum;
  }

  return {
    secretSociety,
    isSpecialArray,
    largestSwap
  };
}

// medium challenges
function medium() {

  // progressDays() returns number of days in which number in the current week exceeds the previous one
  // @param {Array} arr -> array of numbers of miles a person run in a week
  // @return {Number} -> indicates number of days which progress is made
  function progressDays(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Parameter must be Array");
    }
    if(!arr.every(item => typeof item === "number")) throw new Error("Elements must be Number");
    if(!arr.length) return 0;
    let progress = 0;
    for (let i = 1; i < arr.length; i++) {
      progress += Number(arr[i] > arr[i - 1]);
    }
    return progress;
  }

  // given array of numbers between 0-11, missingNum() returns missing number among these numbers
  // @param {Array} arr -> One number between 0-11 must be missing
  // @return {Number[1,10]} num
  function missingNum(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("Parameter must be Array");
    }
    if(!arr.every(item => typeof item === "number")) throw new Error("Elements must be Number");
    if(arr.length < 9) throw new Error("Only one number must be missing");
    let lt1bg10 = arr.filter(item => item < 1 || item > 10); // filter out numbers lt 1 bg 10
    if(lt1bg10.length) throw new Error("Parameter elements must be bt 0 ls 11");
    let s1 = new Set(arr);
    if(s1.size !== arr.length) throw new Error("Parameter elements must not be repeated");
    if(arr.length === 10) throw new Error("One number must be missing");
    for (let i = 1; i <= 10; i++) {
      if(arr.indexOf(i) < 0) return i;
    }
  }

  return {
    progressDays,
    missingNum
  };
}

module.exports = {
  secretSociety: easy().secretSociety,
  isSpecialArray: easy().isSpecialArray,
  largestSwap: easy().largestSwap,
  progressDays: medium().progressDays
};
