import { generatePossibleCombinationsMultiDimensional } from "../functions/generatePossibleCombinationsMultiDimensional.mjs";

export class PasswordGenerator {
  #availableCombinations = undefined;
  #multiCombo = undefined;
  #passwordLength = undefined;
  #existingCombinations = [];

  constructor(combinationsToUse, passwordLength) {
    this.#availableCombinations = (() =>
      combinationsToUse.flat(Infinity))().length;
    this.#passwordLength = passwordLength;
    this.#multiCombo = generatePossibleCombinationsMultiDimensional(
      combinationsToUse.flat(Infinity)
    );
  }

  #generateNextCombination() {
    let newCombination;
    do {
      newCombination = [];
      let counter = 0;
      while (counter++ < this.#passwordLength * 3) {
        newCombination.push(
          Math.floor(Math.random() * this.#availableCombinations)
        );
      }
    } while (this.#existingCombinations.includes(newCombination));
    this.#existingCombinations.push(newCombination);
  }

  get nextPassword() {
    this.#generateNextCombination();
    const lastCombination =
      this.#existingCombinations[this.#existingCombinations.length - 1];
    const newPassword = [];
    let index = 0;
    while (index < this.#passwordLength * 3) {
      newPassword.push(
        this.#multiCombo[lastCombination[index++]][lastCombination[index++]][
          lastCombination[index++]
        ]
      );
    }
    return newPassword.join("");
  }
}
