import { stringToArrayOfNumbers, toNumber } from "./helpers/helpers.js";

const findTriple = (numbers, targetSum) => {
  const triple = [];
  if (!numbers) {
    return triple;
  }

  const sortedNumbers = numbers.sort((numA, numB) => numA - numB);
  let indexC = sortedNumbers.length - 1;

  for (let indexA = 0; indexA < indexC; indexA++) {
    let indexB = indexA + 1;

    while (indexB < indexC) {
      const numA = sortedNumbers[indexA];
      const numB = sortedNumbers[indexB];
      const numC = sortedNumbers[indexC];

      const sum = numA + numB + numC;

      if (sum === targetSum) {
        triple.push([numA, numB, numC]);
        indexB = indexB + 1;
      } else if (sum > targetSum) {
        indexC = indexC - 1;
      } else if (sum < targetSum) {
        indexB = indexB + 1;
      }
    }
  }

  return triple;
};

// node three-sum 1,2,3,-1,-2,-3,0 0
const run = () => {
  const stringArray = process.argv[2];
  const stringTarget = process.argv[3];

  const array = stringToArrayOfNumbers(stringArray) || [12, 3, 1, 2, -6, 5, -8, 6];
  const targetSum = toNumber(stringTarget) || 0;

  const results = findTriple(array, targetSum);

  console.log(results);

  return results;
};

const [, executableFile] = process.argv;

if (!executableFile.endsWith("jest.js")) {
  run();
}

export { findTriple };
