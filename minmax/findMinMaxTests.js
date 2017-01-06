(function() {
  'use strict';
  var chai = require('chai');
  var expect = chai.expect;

  var myApp = require("../minmax/findMinMax.js");

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
        expect(myApp.findMinMax([1, 2, 3, 4])) == [1, 4];
      });

      it('should return [-4,-1] for [-1, -2, -3 , -4]', function () {
        expect(myApp.findMinMax([-1, -2, -3, -4])) == [-4,-1];
      });

      it('should return [1] for [1]', function () {
        expect(myApp.findMinMax([1])) == [1];
      });

      it('should return "Empty Array" for []', function () {
        expect(myApp.findMinMax([])) == "Empty Array";
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(myApp.findMinMax([6, 4])) == [4, 6];
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(myApp.findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])) == [2, 78];
      });

       it('should return [8,9] for [8, 8, 8, 8, 8, 8, 8, 8, 9]', function () {
        expect(myApp.findMinMax([8, 8, 8, 8, 8, 8, 8, 8, 9])) == [8, 9];
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(myApp.findMinMax([4, 4, 4, 4])) == [4];
      });

      it('should return [8] for [8, 8, 8, 8, 8, 8, 8, 8]', function () {
        expect(myApp.findMinMax([8, 8, 8, 8, 8, 8, 8, 8])) == [8];
      });

    });

  });

})();