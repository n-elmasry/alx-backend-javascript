export default function updateStudentGradeByCity(list, city, newGrades) {
  const filtered = list.filter((student) => student.location === city);

  const studentGrade = filtered.map((student) => {
    // Find the grade for each student and return updated student object
    const gradeEntry = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeEntry ? gradeEntry.grade : 'N/A';
    return { ...student, grade };
  });

  return studentGrade;
}
