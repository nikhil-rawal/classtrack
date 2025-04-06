import React from "react";
// import { db } from "../../Firebase";

const StudentList = () => {
  const StudentData = {
    uid: "",
    firstName: "",
    lastName: "",
    rollNumber: "",
    email: "",
    address: "",
    admissionDate: "",
    attendance: [
      { date: "", status: "" },
      { date: "", status: "" },
    ],
    performance: [
      {
        testDate: "",
        modules: {
          reading: "",
          listening: "",
          speaking: "",
          writing: "",
        },
        overall: "",
        remarks: "",
      },
    ],
  };

  return (
    <div>
      StudentList
      <br />
    </div>
  );
};

export default StudentList;

/*
  inputClass
  inputName
  inputType
  inputPlaceholder
  inputValue
  inputOnChange
  inputRequired
  inputAutoComplete


Dashboard - /dashboard - Main nav after login => Student List and Create Student
Student List - /students - View/search/filter all students => List of students and create students link
Create Student - /students/create - Add a new student => create student form and link to all students
Student Profile - /students/:id - View detailed info of one student => Detailed student info of one student
Edit Student - /students/:id/edit - Edit personal info => change student info
Add Attendance - Modal or inline on profile - Add attendance entry => based on today - roll number
Add Performance - Modal or inline on profile - Add test scores

  
*/
