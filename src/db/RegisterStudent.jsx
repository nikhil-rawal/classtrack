import React, { useState } from "react";
import InputForm from "../components/InputForm";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase";

const RegisterStudent = () => {
  const [studentData, setStudentData] = useState({
    firstName: "",
    lastName: "",
    rollNumber: "",
    email: "",
    address: "",
    admissionDate: "",
  });

  // attendance: [{ date: "", status: "" }],
  // performance: [
  //   {
  //     testDate: "",
  //     overallBands: "",
  //     remarks: "",
  //     modules: {
  //       listening: "",
  //       reading: "",
  //       speaking: "",
  //       writing: "",
  //     },
  //   },
  // ],

  const registerStudent = async (studentData) => {
    try {
      const docRef = await addDoc(collection(db, "students"), studentData);
      console.log("Student registered with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding student: ", err);
    }
  };

  //   const getStudents = async () => {
  //     const qwerySnapshot = await getDocs(collection(db, "students"));
  //     const students = qwerySnapshot.docs.map((doc) => doc.data());
  //     console.log(students);
  //     return students;
  //   };

  //   const updateAttendance = async (studentId, date, status) => {
  //     try {
  //       const docRef = db("attendance", studentId);
  //       await setDoc(docRef, {
  //         date: date,
  //         status: status,
  //       });
  //       console.log("Attendance updated!");
  //     } catch (err) {
  //       console.error("Error updating attendance: ", err);
  //     }
  //   };

  const submitStudentForm = (e) => {
    e.preventDefault();
    registerStudent(studentData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form
        className="flex flex-col justify-center items-center"
        onSubmit={submitStudentForm}
      >
        {/* First Name */}
        <InputForm
          inputClass="m-1 border dark:border-white border-gray-900"
          inputName="firstName"
          inputType="text"
          inputPlaceholder="First Name"
          inputValue={studentData.firstName}
          inputOnChange={(e) =>
            setStudentData({ ...studentData, firstName: e.target.value })
          }
          inputRequired="required"
          inputAutoComplete="off"
        />
        {/* Last Name */}
        <InputForm
          inputClass="m-1 border dark:border-white border-gray-900"
          inputName="lastName"
          inputType="text"
          inputPlaceholder="Last Name"
          inputValue={studentData.lastName}
          inputOnChange={(e) =>
            setStudentData({ ...studentData, lastName: e.target.value })
          }
          inputRequired="required"
          inputAutoComplete="off"
        />
        {/* Roll Number */}
        <InputForm
          inputClass="m-1 border dark:border-white border-gray-900"
          inputName="rollNumber"
          inputType="number"
          inputPlaceholder="Roll Number"
          inputValue={studentData.rollNumber}
          inputOnChange={(e) =>
            setStudentData({ ...studentData, rollNumber: e.target.value })
          }
          inputRequired="required"
          inputAutoComplete="off"
        />
        {/* Email */}
        <InputForm
          inputClass="m-1 border dark:border-white border-gray-900"
          inputName="email"
          inputType="email"
          inputPlaceholder="Email"
          inputValue={studentData.email}
          inputOnChange={(e) =>
            setStudentData({ ...studentData, email: e.target.value })
          }
          inputRequired="required"
          inputAutoComplete="off"
        />
        {/* Address */}
        <InputForm
          inputClass="m-1 border dark:border-white border-gray-900"
          inputName="address"
          inputType="text"
          inputPlaceholder="Address"
          inputValue={studentData.address}
          inputOnChange={(e) =>
            setStudentData({ ...studentData, address: e.target.value })
          }
          inputRequired="required"
          inputAutoComplete="off"
        />
        {/* Admission Date */}
        <InputForm
          inputClass="m-1 border dark:border-white border-gray-900"
          inputName="admissionDate"
          inputType="date"
          inputPlaceholder="Admission Date"
          inputValue={studentData.admissionDate}
          inputOnChange={(e) =>
            setStudentData({ ...studentData, admissionDate: e.target.value })
          }
          inputRequired="required"
          inputAutoComplete="off"
        />
        <button
          type="submit"
          onClick={submitStudentForm}
          className="m-1 bg-blue-500 text-white p-2 rounded"
        >
          Create Student
        </button>
      </form>
    </div>
  );
};

export default RegisterStudent;

/*

students {
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
  
  inputClass
  inputName
  inputType
  inputPlaceholder
  inputValue
  inputOnChange
  inputRequired
  inputAutoComplete

  import { doc, setDoc } from 'firebase/firestore';
import db from './firebase';

const updateAttendance = async (studentId, date, status) => {
  try {
    const docRef = doc(db, 'attendance', studentId);
    await setDoc(docRef, {
      date: date,
      status: status,
    });
    console.log('Attendance updated!');
  } catch (e) {
    console.error('Error updating attendance: ', e);
  }
};

// Example usage: update attendance for student with ID 'studentId'
updateAttendance('studentId', '2025-04-06', 'present');

import { doc, setDoc } from 'firebase/firestore';
import db from './firebase';

const updatePerformance = async (studentId, exam, score) => {
  try {
    const docRef = doc(db, 'performance', studentId);
    await setDoc(docRef, {
      exam: exam,
      score: score,
    });
    console.log('Performance updated!');
  } catch (e) {
    console.error('Error updating performance: ', e);
  }
};

// Example usage: update performance for student with ID 'studentId'
updatePerformance('studentId', 'IELTS', 8.5);
  */
