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

  // testJackpot() returns true if given array's elements are the same
  // @param {Array} result
  // @returns {Boolean}
  function testJackpot(result) {
  	if(!Array.isArray(result)) throw new Error("Parameter must be Array");
  	if(!result.length) return false;
  	if(result.length === 1) return true;
  	let setResult = new Set(result);
  	return setResult.size === 1;
  }

  // checkEquals() returns true if elements of given array's are the same
  // @param {Array, Array} arr1, arr2
  // @returns {Boolean}
  function checkEquals(arr1, arr2){
    if(!Array.isArray(arr1) || !Array.isArray(arr2)) throw new Error("Parameters must be Array");
    if(!arr1.length || !arr2.length) return false;
    for(let i of arr1){
      if(arr2.indexOf(i) < 0) return false;
    }
    return true;
  }

  // alternatingCaps() returns string whose characters' case opposite of adjacent ones
  // first char's case is upper
  // @param {String} str
  // @return {String}
  function alternatingCaps(str){
    if(typeof str !== "string") throw new Error("Parameter must be string");
    if(!str.length) throw new Error("String length must be bigger than 0");
    let strArr = str.split("");
    return strArr.map((c, i) => i % 2 === 0 ? c.toUpperCase() :
                                       c.toLowerCase()).join("");
  }

  // factorize() returns array of numbers which are factors of given num
  // @param {Integer[1,]} num
  // @return {Array}
  function factorize(num){
    if(typeof num !== "number" || num < 1 || Math.round(num) !== num){
      throw new Error("Parameter must be a positive Integer");
    }
    let factors = [1];
    let preFactor = 2;
    while(preFactor <= num){
      if(num % preFactor === 0){
        factors.push(preFactor);
      }
      preFactor++;
    }
    return factors;
  }

  // flatten() flattens given array of subarrays into one array
  // @param {Array} arr
  // @return {Array}
  function flatten(arr) {
    if(!Array.isArray(arr)) throw new Error("Parameter must be Array");
    return arr.reduce((flat, el) => flat.concat(el), []);
  }

  // doubleLetters() returns true if given word has two consecutive identical letters
  // @param {String} str
  // @return {Boolean}
  function doubleLetters(str) {
    if(typeof str !== "string") throw new Error("Parameter must be String");
    return /(\w)\1/.test(str);
  }

  return {
    progressDays,
    missingNum,
    testJackpot,
    checkEquals,
    alternatingCaps,
    factorize,
    flatten,
    doubleLetters
  };
}

module.exports = {
  secretSociety: easy().secretSociety,
  isSpecialArray: easy().isSpecialArray,
  largestSwap: easy().largestSwap,
  progressDays: medium().progressDays,
  testJackpot: medium().testJackpot,
  checkEquals: medium().checkEquals,
  alternatingCaps: medium().alternatingCaps,
  factorize: medium().factorize,
  flatten: medium().flatten,
  doubleLetters: medium().doubleLetters
};
