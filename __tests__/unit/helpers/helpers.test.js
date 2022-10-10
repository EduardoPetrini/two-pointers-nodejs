import { stringToArrayOfNumbers, toNumber } from "../../../helpers/helpers";

describe("test stringToArrayOfNumbers", () => {
  it("should return undefined", () => {

    const results = stringToArrayOfNumbers("");

    expect(results).toBeUndefined();
  });

  it("should return an array of number from string", () => {

    const results = stringToArrayOfNumbers("1");

    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);

  });

  it("should return an array of number from string", () => {

    const results = stringToArrayOfNumbers("1,2,3,4,5");

    expect(results).toBeDefined();
    expect(results.length).toBeGreaterThan(0);

  });
});

describe("test toNumber", () => {
  it("should return undefined", () => {

    const results = toNumber("");

    expect(results).toBeUndefined();
  });
  
  it("should return a number from string", () => {

    const results = toNumber("1");

    expect(results).toBe(1);
  });
});
