export function findPossibleCombinations(requestedCombinationsInt) {
  const column = [];

  for (let index = 0; index < requestedCombinationsInt; index++) {
    column.push([]);
    for (
      let currentIndex = index;
      currentIndex < requestedCombinationsInt;
      currentIndex++
    ) {
      column[index].push(currentIndex);
    }
    if (index > 0) {
      for (let recursiveIndex = 0; recursiveIndex < index; recursiveIndex++) {
        column[index].push(recursiveIndex);
      }
    }
  }
  return column;
}
