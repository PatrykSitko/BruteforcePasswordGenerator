import { findPossibleCombinations } from "./findPossibleCombinations.mjs";

export function generatePossibleCombinations(arrayOfEntries) {
  const combinations = findPossibleCombinations(arrayOfEntries.length);

  for (let combination of combinations) {
    let index = 0;
    for (let entry of combination) {
      combination[index++] = arrayOfEntries[entry];
    }
  }
  return combinations;
}
