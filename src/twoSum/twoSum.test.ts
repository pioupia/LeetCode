import twoSum from "./twoSum";
import * as assert from "assert";

describe('twoSum testing', function () {
    it("First test", () => {
        assert.deepEqual(
            twoSum([2, 7, 11, 15], 9), [1, 0]);
    });

    it("Second test", () => {
        assert.deepEqual(
            twoSum([3, 2, 4], 6), [2, 1]);
    });

    it("Third test", () => {
        assert.deepEqual(
            twoSum([3, 3], 6), [1, 0]);
    });

    it("Four test", () => {
        assert.deepEqual(
            twoSum([-3, 4, 3, 90], 0), [2, 0]);
    });
});