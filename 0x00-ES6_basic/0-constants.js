export function taskFirst() {
  const task = "i prefer const when i can.";
  return task;
}
export function getLast() {
  return "return is okay";
}
export function taskNext() {
  let combination = "But sometimes let";
  combination += getLast();
  return combination;
}
