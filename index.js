
const { map, filter, reduce, groupBy, partition, sum } = require('./src/arrayUtils');
const { add, multiply, range, isEven } = require('./src/mathUtils');
const { titleCase, toUpper } = require('./src/stringUtils');
const { pipe, compose } = require('./src/compose');


const students = Object.freeze([
  { name: "juan dela cruz", course: "BSIT", grades: [85, 90, 88, 92] },
  { name: "maria santos", course: "BSCS", grades: [95, 93, 97, 91] },
  { name: "pedro garcia", course: "BSIT", grades: [78, 82, 75, 80] },
  { name: "ana reyes", course: "BSCS", grades: [88, 85, 90, 87] },
  { name: "jose rizal", course: "BSIT", grades: [92, 94, 96, 93] },
  { name: "rosa luna", course: "BSCS", grades: [70, 72, 68, 74] },
  { name: "carlo mendoza", course: "BSIT", grades: [60, 65, 58, 62] },
]);


const average = (arr) => sum(arr) / arr.length;

const addGPA = (student) => ({
  ...student,
  gpa: Math.round(average(student.grades) * 100) / 100,
  name: titleCase(student.name)
});

const isPassing = (student) => student.gpa >= 75;

const getHonorStatus = (student) => ({
  ...student,
  honor:
    student.gpa >= 95
      ? "With Highest Honors"
      : student.gpa >= 90
      ? "With Honors"
      : student.gpa >= 85
      ? "With Distinction"
      : "None"
});

const formatStudent = (student) =>
  `${student.name} | ${student.course} | GPA: ${student.gpa} | ${student.honor}`;


const processStudents = pipe(
  (data) => map(addGPA, data),          
  (data) => map(getHonorStatus, data)   
);

const processedStudents = processStudents(students);

const [passing, failing] = partition(isPassing, processedStudents);


const byCourse = groupBy((s) => s.course, passing);

console.log('======================================');
console.log(' FP TOOLKIT JS - Student Grade Report ');
console.log('======================================');

console.log('\n--- All Processed Students ---');
processedStudents.forEach((s) => console.log(formatStudent(s)));

console.log(`\n--- Passing Students (${passing.length}) ---`);
passing.forEach((s) => console.log(formatStudent(s)));

console.log(`\n--- Failing Students (${failing.length}) ---`);
failing.forEach((s) => console.log(formatStudent(s)));

console.log('\n--- Grouped by Course (Passing Only) ---');
Object.entries(byCourse).forEach(([course, students]) => {
  console.log(`\n ${course}:`);
  students.forEach((s) => console.log(` - ${s.name} (GPA: ${s.gpa})`));
});

const classAverage = Math.round(
  average(map((s) => s.gpa, processedStudents)) * 100
) / 100;

const highestGPA = reduce(
  (max, s) => (s.gpa > max.gpa ? s : max),
  processedStudents[0],
  processedStudents
);

console.log('\n--- Class Statistics ---');
console.log(` Class Average GPA: ${classAverage}`);
console.log(` Highest GPA: ${highestGPA.name} (${highestGPA.gpa})`);
console.log(` Total Students: ${processedStudents.length}`);
console.log(` Passing Rate: ${Math.round((passing.length / processedStudents.length) * 100)}%`);
console.log('\n======================================');