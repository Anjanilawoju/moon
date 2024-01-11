var student = {
    name: "David Rayy",
    class: "VI",
    rollno: 14
};

// Function to update name if rollno is 14
function updateName(studentObj, rollno, newName) {
    if (studentObj.rollno = rollno) {
        studentObj.name = newName;
    }
}

// Update name if rollno is 14
updateName(student, 14, "Jason");

// List properties: name, sclass, rollno
console.log("name:", student.name);
console.log("class:", student.class);
console.log("rollno:", student.rollno);
