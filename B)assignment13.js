let students = [
  { name: "John", marks: "92" },
  { name: "Oliver", marks: "85" },
  { name: "Michael", marks: "79" },
  { name: "Dwight", marks: "95"},
  { name: "Oscar", marks: "64" },
  { name: "Kevin", marks: "48" },
];

// a) Calculate grades on basis of marks
function calculateGrade(marks) {
  if (marks > 90) {
    return "A";
  } else if (marks > 80) {
    return "B";
  } else if (marks > 70) {
    return "C";
  } else if (marks > 60) {
    return "D";
  } else if (marks > 50) {
    return "E";
  } else {
    return "F";
  }
}

// b) Map the grades of each student
let grades = students.map(student => ({name: student.name, grade: calculateGrade(student.marks)}));

// c) Group students according to the grades they have received and display
let grouped = {};
grades.forEach(student => {
  if (!grouped[student.grade]) {
    grouped[student.grade] = [student];
  } else {
    grouped[student.grade].push(student);
  }
});

console.log(grouped);
