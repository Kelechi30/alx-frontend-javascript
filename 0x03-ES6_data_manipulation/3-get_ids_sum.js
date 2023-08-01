export default function getStudentIdsSum(getListStudents) {
  const getSum = getListStudents.reduce((acc, curv) => acc + curv.id, 0);
  return getSum;
}
