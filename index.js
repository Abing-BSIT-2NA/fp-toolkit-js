const { map, filter, partition, groupBy, sum } = require("./src/arrayUtils");

const students = [
  { name: "Juan Dela Cruz", course: "BSIT", grades: [85, 90, 88] },
  { name: "Maria Santos", course: "BSCS", grades: [95, 93, 94] },
  { name: "Pedro Garcia", course: "BSIT", grades: [78, 80, 79] },
  { name: "Ana Reyes", course: "BSCS", grades: [88, 87, 90] }
];

const average = (arr) => sum(arr) / arr.length;

const addGPA = (student) => ({
  ...student,
  gpa: average(student.grades)
});

const processed = map(addGPA, students);

const passing = filter((s) => s.gpa >= 75, processed);

console.log("\nStudent Report\n");

processed.forEach((s) =>
  console.log(`${s.name} | ${s.course} | GPA: ${s.gpa}`)
);

console.log("\nPassing Students:", passing.length);

