function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

export default function ammountOfCombinations(ammountOfSymbols, lengthOfRequestedCombination){
const result = `${factorial(ammountOfSymbols) / (factorial(lengthOfRequestedCombination) * factorial(ammountOfSymbols - lengthOfRequestedCombination))}`;
    return isCeil(result) ? Math.ceil(Number(result)):Math.floor(result);
}

function isCeil(digit){
    if(digit.indexOf(".") === -1){
        return false;
    }
    const afterComaDigit = digit.substring(digit.indexOf(".") + 1, digit.length);
    const lastAfterComaDigit = `${afterComaDigit}`.substring(afterComaDigit.length - 1, afterComaDigit.length);
    if(lastAfterComaDigit > 4){
        return true;
    }
    return isCeil(Number(afterComaDigit.substring(0,afterComaDigit.length - 1)));
}