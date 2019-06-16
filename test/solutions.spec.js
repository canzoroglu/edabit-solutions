const expect = require('chai').expect;
//const should = require('chai').should();
const {secretSociety, isSpecialArray,
  largestSwap, progressDays, testJackpot, checkEquals,
  alternatingCaps, factorize, flatten, doubleLetters} = require("../solutions");

describe("Easy Challenges", () => {

  describe("#Secret Society", function() {
    it("Parameter must be Array", () => {
      expect(secretSociety.bind(null, {})).to.throw("Parameter must be Array");
    });
    it("Parameter is Array", () => {
      expect(secretSociety.bind(null, [])).to.not.throw("Parameter must be Array");
    });
    it("Return value must be String", () => {
      expect(secretSociety([])).to.be.a("string");
    });
    it("Parameter elements must be String", () => {
      expect(secretSociety.bind(null, ["dadf", 1, undefined])).to.throw("Elements must be String");
    });
    it("Parameter elements are String", () => {
      expect(secretSociety.bind(null, ["dadf", "1", "undefined"])).to.not.throw("Elements must be String");
    });
    it("Return ACET", () => {
      expect(secretSociety(["Erma", "Cho", "Ais", "Tabe"])).to.equal("ACET");
    });
    it("Return BGHO", () => {
      expect(secretSociety(["Osa", "beri", "gar", "Hus"])).to.equal("BGHO");
    });
  });

  describe("#Special Array", function() {
    it("Parameter must be Array", () => {
      expect(isSpecialArray.bind(null, {})).to.throw("Parameter must be Array");
    });
    it("Parameter is Array", () => {
      expect(isSpecialArray.bind(null, [])).to.not.throw("Parameter must be Array");
    });
    it("Return value must be Boolean", () => {
      expect(isSpecialArray([])).to.be.a("boolean");
    });
    it("Parameter elements must be Number", () => {
      expect(isSpecialArray.bind(null, ["dadf", 1, undefined])).to.throw("Elements must be Number");
    });
    it("Parameter elements are Number", () => {
      expect(isSpecialArray.bind(null, [1, 0, 3])).to.not.throw("Elements must be Number");
    });
    it("Return true", () => {
      expect(isSpecialArray([2, 3, 4, 5])).to.equal(true);
    });
    it("Return false", () => {
      expect(isSpecialArray([1, 3, 4, 5])).to.equal(false);
    });
  });

  describe("#Largest Swap", function() {
    it("Parameter must be two-digit Number", () => {
      expect(largestSwap.bind(null, "12")).to.throw("Parameter must be two-digit Number");
    });
    it("Parameter must be two-digit Number", () => {
      expect(largestSwap.bind(null, 1)).to.throw("Parameter must be two-digit Number");
    });
    it("Parameter is two-digit Number", () => {
      expect(largestSwap.bind(null, 15)).to.not.throw("Parameter must be two-digit Number");
    });
    it("Return value must be Boolean", () => {
      expect(largestSwap(72)).to.be.a("boolean");
    });
    it("Return true", () => {
      expect(largestSwap(65)).to.equal(true);
    });
    it("Return false", () => {
      expect(largestSwap(23)).to.equal(false);
    });
  });

});

describe("Medium Challenges", () => {

  describe("#Progress Days", () => {
    it("Parameter must be Array", () => {
      expect(progressDays.bind(null, {})).to.throw("Parameter must be Array");
    });
    it("Parameter is Array", () => {
      expect(progressDays.bind(null, [])).to.not.throw("Parameter must be Array");
    });
    it("Parameter elements must be Number", () => {
      expect(progressDays.bind(null, ["dadf", 1, undefined])).to.throw("Elements must be Number");
    });
    it("Parameter elements are Number", () => {
      expect(progressDays.bind(null, [1, 0, 3])).to.not.throw("Elements must be Number");
    });
    it("Returns 0", () => {
      expect(progressDays([2,2,2,2])).to.equal(0);
    });
    it("Returns 3", () => {
      expect(progressDays([10, 11, 12, 9, 10])).to.equal(3);
    });
    it("Returns 1", () => {
      expect(progressDays([6, 5, 4, 3, 2, 9])).to.equal(1);
    });
  });

  describe("#Missing Number", () => {
    it("Parameter must be Array", () => {
      expect(missingNum.bind(null, {})).to.throw("Parameter must be Array");
    });
    it("Parameter is Array", () => {
      expect(missingNum.bind(null, [])).to.not.throw("Parameter must be Array");
    });
    it("Parameter elements must be Number", () => {
      expect(missingNum.bind(null, ["dadf", 1, undefined])).to.throw("Elements must be Number");
    });
    it("Parameter elements are Number", () => {
      expect(missingNum.bind(null, [1, 0, 3])).to.not.throw("Elements must be Number");
    });
    it("Parameter elements must be bt 0 ls 11", () => {
      expect(missingNum.bind(null, [1, 0, 3, 4, 5, 6, 7, 8, 2])).to.throw("Parameter elements must be bt 0 ls 11");
    });
    it("Parameter elements must be bt 0 ls 11", () => {
      expect(missingNum.bind(null, [11, 2, 3, 1, 4, 5, 6, 7, 8, 9])).to.throw("Parameter elements must be bt 0 ls 11");
    });
    it("Parameter elements are bt 0 ls 11", () => {
      expect(missingNum.bind(null, [1, 2, 3, 5, 6, 7, 8, 9, 10])).to.not.throw("Parameter elements must be bt 0 ls 11");
    });
    it("One number must be missing", () => {
      expect(missingNum.bind(null, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).to.throw("One number must be missing");
    });
    it("Only one number must be missing", () => {
      expect(missingNum.bind(null, [1, 3, 4, 5, 6, 7, 8, 10])).to.throw("Only one number must be missing");
    });
    it("One number is missing", () => {
      expect(missingNum.bind(null, [1, 2, 3, 4, 5, 6, 7, 9, 10])).to.not.throw("One number must be missing");
    });
    it("Parameter elements must not be repeated", () => {
      expect(missingNum.bind(null, [1, 2, 3, 3, 5, 6, 7, 8, 9])).to.throw("Parameter elements must not be repeated");
    });
    it("Returns 6", () => {
      expect(missingNum([1, 2, 3, 4, 5, 7, 8, 9, 10])).to.equal(6);
    });
    it("Returns 1", () => {
      expect(missingNum([2, 3, 4, 5, 6, 7, 8, 9, 10])).to.equal(1);
    });
    it("Returns 10", () => {
      expect(missingNum([1, 2, 3, 4, 5, 6, 7, 8, 9])).to.equal(10);
    });
  });

  describe("#Hitting the Jackpot", () => {
    it("Parameter must be Array", () => {
      expect(testJackpot.bind(null, {})).to.throw("Parameter must be Array");
    });
    it("Parameter is Array", () => {
      expect(testJackpot.bind(null, [])).to.not.throw("Parameter must be Array");
    });
    it("Return False", () => {
      expect(testJackpot([])).to.equal(false);
    });
    it("Return True", () => {
      expect(testJackpot(["a"])).to.equal(true);
    });
    it("Return False", () => {
      expect(testJackpot(["a", "b"])).to.equal(false);
    });
    it("Return True", () => {
      expect(testJackpot(["a", "a", "a"])).to.equal(true);
    });
  });

  describe("#Fix the Error: Value vs. Reference Types", () => {
    it("Parameters must be Array", () => {
      expect(checkEquals.bind(null, {}, [])).to.throw("Parameters must be Array");
    });
    it("Parameters are Array", () => {
      expect(checkEquals.bind(null, [1,2], [1,2])).to.not.throw("Parameter must be Array");
    });
    it("Return False", () => {
      expect(checkEquals([], [1])).to.equal(false);
    });
    it("Return True", () => {
      expect(checkEquals(["a", 1], [1, "a"])).to.equal(true);
    });
    it("Return False", () => {
      expect(checkEquals(["a", "b"], ["a", "c"])).to.equal(false);
    });
    it("Return True", () => {
      expect(checkEquals([1, "a", "c"], ["a", "c", 1])).to.equal(true);
    });
  });

  describe("#Alternating Caps", () => {
    it("Parameter must be string", () => {
      expect(alternatingCaps.bind(null, 12)).to.throw("Parameter must be string");
    });
    it("String length must be bigger than 0", () => {
      expect(alternatingCaps.bind(null, "")).to.throw("String length must be bigger than 0");
    });
    it("Hello Return HeLlO", () => {
      expect(alternatingCaps("Hello")).to.equal("HeLlO");
    });
    it("Return HeY, hOw aRe yOu?", () => {
      expect(alternatingCaps("Hey, how are you?")).to.equal("HeY, hOw aRe yOu?");
    });
  });

  describe("#Factorize a Number", () => {
    it("Parameter must be a positive Integer", () => {
      expect(factorize.bind(null, "1")).to.throw("Parameter must be a positive Integer");
    });
    it("Parameter must be a positive Integer", () => {
      expect(factorize.bind(null, -12)).to.throw("Parameter must be a positive Integer");
    });
    it("factorize(4) returns [1,2,4]", () => {
      expect(factorize(4)).to.eql([1,2,4]);
    });
    it("factorize(12) returns [1,2,3,4,6,12]", () => {
      expect(factorize(12)).to.eql([1,2,3,4,6,12]);
    });
  });

  describe("#Flatening an Array", () => {
    it("Parameter must be an Array", () => {
      expect(flatten.bind(null, {})).to.throw("Parameter must be Array");
    });
    it("[[1, 2], [3, 4]] returns [1, 2, 3, 4]", () => {
      expect(flatten([[1, 2], [3, 4]])).to.eql([1, 2, 3, 4]);
    });
    it("[[true, false], [false, false]] returns [true, false, false, false]", () => {
      expect(flatten([[true, false], [false, false]])).to.eql([true, false, false, false]);
    });
  });

  describe("#Double Letters", () => {
    it("Parameter must be String", () => {
      expect(doubleLetters.bind(null, 12)).to.throw("Parameter must be String");
    });
    it("loop returns true", () => {
      expect(doubleLetters("loop")).to.equal(true);
    });
    it("orange returns false", () => {
      expect(doubleLetters("orange")).to.equal(false);
    });
  });

});
