function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

export default function ammountOfCombinations(ammountOfSymbols, lengthOfRequestedCombination){
return factorial(ammountOfSymbols) / (factorial(lengthOfRequestedCombination) * factorial(ammountOfSymbols - lengthOfRequestedCombination));
}