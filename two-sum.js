import { stringToArrayOfNumbers, toNumber } from "./helpers/helpers.js";

const findPair = (numbers, targetSum) => {
  if (!numbers) {
    return [];
  }

  const sortedNumbers = numbers.sort((numA, numB) => numA - numB);

  let indexA = 0;
  let indexB = sortedNumbers.length - 1;

  while (indexA < indexB) {
    const numA = sortedNumbers[indexA];
    const numB = sortedNumbers[indexB];

    const sum = numA + numB;

    if (sum === targetSum) {
      return [numA, numB];
    }

    if (sum > targetSum) {
      indexB = indexB - 1;
    } else if (sum < targetSum) {
      indexA = indexA + 1;
    }
  }

  return [];
};

// node two-sum 1,2,3,4,5,6 3
const run = () => {
  const stringArray = process.argv[2];
  const stringTarget = process.argv[3];

  const array = stringToArrayOfNumbers(stringArray) || [4, 1, 2, -2, 11, 16, 1, -1, -6, -4];
  const targetSum = toNumber(stringTarget) || 9;

  const results = findPair(array, targetSum);

  console.log(results);

  return results;
}

const [, executableFile] = process.argv;

if (!executableFile.endsWith("jest.js")) {
  run();
}

export { findPair };
