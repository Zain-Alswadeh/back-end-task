let students[studet];
function createStudent(name, age, mark) {
    return {name: name,age: age, mark: mark};
}
students.push( createStudent("zain", 20, 88)); 
students.push( createStudent("rana", 20, 30)); 
students.push( createStudent("dana", 20, 76)); 
students.push(createStudent("bayan", 20,45)); 
students.push(createStudent("leen", 20, 55)); 

let successStudents = [];
let failedStudents = [];

for (let i = o; i < students; i++) {
    if (students[i].mark >= 50) {
        successStudents.push(students[i]);
}
    else {
        failedStudents.push(students[i]);
}
}
console.log("Success Students", successStudents);
console.log("Failed Students", failedStudents);
