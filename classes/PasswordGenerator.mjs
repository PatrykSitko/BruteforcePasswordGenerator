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

  #generateCombination(){
    const combination = [];
    let counter = 0;
    while (counter++ < this.#passwordLength * 3) {
      combination.push(
        Math.floor(Math.random() * this.#availableCombinations)
      );
    }
    return combination;
  }
  
  #generatePassword(combination){
    const password = [];
    let index = 0;
    while (index < this.#passwordLength * 3) {
      password.push(
        this.#multiCombo[combination[index++]][combination[index++]][
          combination[index++]
        ]
      );
    }
    return password.join("");
  }

  #generateNextCombination() {
    let newCombination;
    do {
    const combination = this.#generateCombination();
    newCombination = this.#generatePassword(combination);
    } while (this.#existingCombinations.includes(newCombination));
    this.#existingCombinations.push(newCombination);
  }

  get nextPassword() {
    this.#generateNextCombination();
    return this.#existingCombinations[this.#existingCombinations.length - 1];
  }
}
