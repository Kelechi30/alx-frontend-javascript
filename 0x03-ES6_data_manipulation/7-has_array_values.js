export default function hasValuesFromArray(theSet, theArray) {
  return theArray.every((value) => theSet.has(value));
}
