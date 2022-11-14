import { findPossibleCombinations } from "./findPossibleCombinations.mjs";
import { generatePossibleCombinations } from "./generatePossibleCombinations.mjs";

function generatePossibleCombinationsMultiDimensionalPrivate(entryOfArrays) {
  const combinations = findPossibleCombinations(entryOfArrays.length);

  for (let combination of combinations) {
    let index = 0;
    for (let entry of combination) {
      combination[index++] = entryOfArrays[entry];
    }
  }
  return combinations;
}

/**
 * @field1 accepts a one dimesntional array with all requested uni characters to create combinations with.
 * @returns a 3 dimensional array with all possible combinantions. */
export function generatePossibleCombinationsMultiDimensional(
  availableCombinations
) {
  return generatePossibleCombinationsMultiDimensionalPrivate(
    generatePossibleCombinations(availableCombinations)
  );
}
