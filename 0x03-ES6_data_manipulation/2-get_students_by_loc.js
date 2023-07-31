export default function getStudentsByLocation(getListStudents, city) {
  const list = getListStudents.filter((el) => el.location === city);
  return list;
}
