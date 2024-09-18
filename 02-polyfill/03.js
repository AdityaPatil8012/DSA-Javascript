// calculate the average score of students who scored above 90;

const students = [
  {name: "John", score: 85},
  {name: "Sarah", score: 92},
  {name: "Michael", score: 88},
  {name: "Emma", score: 95},
  {name: "Daniel", score: 90},
];

const above90 = students.filter(student => student.score > 90)

above90

const averageMarks = above90.reduce((sum, student,i, arr)=>  sum + student.score/ arr.length, 0);

console.log(averageMarks)