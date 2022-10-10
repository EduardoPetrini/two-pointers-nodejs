import { findPair } from "../../two-sum";

describe("test two sum function ", () => {
  it("should return an empty array from undefined", () => {
    const results = findPair();

    expect(results).toBeDefined();
    expect(results.length).toBe(0)
  });

  it("should return an empty array from empty array", () => {
    const results = findPair([]);

    expect(results).toBeDefined();
    expect(results.length).toBe(0)
  });

  it("should return [-1,4]", () => {
    const numbers = [4, 3, 1, 6, -1, 4];
    const targetSum = 3;

    const results = findPair(numbers, targetSum);

    expect(results).toEqual([-1,4]);
  });

  it("should return [-2,11]", () => {
    const numbers = [4, 1, 2, -2, 11, 16, 1, -1, -6, -4];
    const targetSum = 9;

    const results = findPair(numbers, targetSum);

    expect(results).toEqual([-2,11]);
  });
});
