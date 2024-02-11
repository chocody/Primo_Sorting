"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ts_1 = require("./ts");
describe('MergeFunction', function () {
    it('should merge sorted collections correctly', function () {
        // const collection1 = [1, 3, 4, 5];
        // const collection2 = [2, 5, 7, 7];
        // const collection3 = [9, 5, 3, 1];
        var collection1 = [1, 2, 3, 9, 10];
        var collection2 = [4, 5, 6, 10, 11];
        var collection3 = [7, 3, 2];
        var merged = ts_1.default.merge(collection1, collection2, collection3);
        console.log(merged);
        //   expect(merged).toEqual([1,1,2,3,3,4,5,5,5,7,7,9]);
        expect(merged).toEqual([1, 2, 2, 3, 3, 4, 5, 6, 7, 9, 10, 10, 11]);
    });
    // Add more test cases to cover various scenarios
});
