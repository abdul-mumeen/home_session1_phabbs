 'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require("../fizzbuzz/fizzbuzz.js");

describe("Fizz Buzz tests ", function() {

  it("should return `Fizz` for number divisible by 3", function() {
    expect(myApp.fizzBuzz(3) == 'Fizz');
  });

  it("should return `Invalid number` for number divisible by k", function() {
    expect(myApp.fizzBuzz('k') == 'Invalid number');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(myApp.fizzBuzz(5) == 'Buzz');
  });

  it("should return `Buzz` for number divisible by 25", function() {
    expect(myApp.fizzBuzz(25) == 'Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(myApp.fizzBuzz(15) == 'FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(myApp.fizzBuzz(45) == 'FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(myApp.fizzBuzz(90) == 'FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(myApp.fizzBuzz(63) == 'Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(7) == 7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(myApp.fizzBuzz(101) == 101);
  });

});