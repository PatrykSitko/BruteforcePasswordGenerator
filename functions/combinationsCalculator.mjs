function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

export default function ammountOfCombinations(ammountOfSymbols, lengthOfRequestedCombination){
    return factorial(ammountOfSymbols) / (factorial(lengthOfRequestedCombination) * factorial(ammountOfSymbols - lengthOfRequestedCombination));
}