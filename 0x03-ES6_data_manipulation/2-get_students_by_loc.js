export default function getStudentsByLocation(list, city) {
  if (Array.isArray(list)) {
    return list.filter((student) => student.location === city);
  }
  return [];
}
