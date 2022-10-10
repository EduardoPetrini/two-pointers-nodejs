import { findTriple } from "../../three-sum";

describe("test three sum function ", () => {
  it("should return an empty array from undefined", () => {
    const results = findTriple();

    expect(results).toBeDefined();
    expect(results.length).toBe(0)
  });

  it("should return an empty array from empty array", () => {
    const results = findTriple([]);

    expect(results).toBeDefined();
    expect(results.length).toBe(0)
  });

  it("should return [[-1, 3, 6], [-1, 4, 5]]", () => {
    const numbers = [4, 3, 5, 2, -1, 6];
    const targetSum = 8;

    const results = findTriple(numbers, targetSum);

    expect(results).toEqual([[-1, 3, 6], [-1, 4, 5]]);
  });

  it("should return [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]", () => {
    const numbers = [12, 3, 1, 2, -6, 5, -8, 6];
    const targetSum = 0;

    const results = findTriple(numbers, targetSum);

    expect(results).toEqual([[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]);
  });
  
  it("should return an empty array due to finding no solution", () => {
    const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    const targetSum = 0;

    const results = findTriple(numbers, targetSum);

    expect(results).toEqual([]);
  });
});
