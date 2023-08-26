export class PasswordGenerator {
  #availableCombinations
  #availableCombinationsLength = undefined;
  #passwordLength = undefined;
  #existingCombinations = [];

  constructor(combinationsToUse, passwordLength) {
    this.#availableCombinations = (() =>
      combinationsToUse.flat(Infinity))()
    this.#availableCombinationsLength = this.#availableCombinations.length;
    this.#passwordLength = passwordLength;
  }

  #generateCombination(){
    const combination = [];
    let counter = 0;
    while (counter++ < this.#passwordLength ) {
      combination.push(
        Math.floor(Math.random() * this.#availableCombinationsLength)
      );
    }
    return combination;
  }
  
  #generatePassword(combination){
    const password = [];
    let index = 0;
    while (index < this.#passwordLength ) {
      password.push(
        this.#availableCombinations[combination[index++]]
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
