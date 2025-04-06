import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import StudentList from "../db/StudentList";
import RegisterStudent from "../db/RegisterStudent";

const Dashboard = () => {
  const navigateTo = useNavigate();
  const { authenticated, logout } = useAuth();

  useEffect(() => {
    if (!authenticated) {
      navigateTo("/");
    }
  }, [authenticated, navigateTo]);

  const handleLogout = () => {
    logout();
    navigateTo("/");
    alert("Logout successful!");
  };

  return (
    <div>
      <h1>Welcome to Dashboard!</h1>
      <button onClick={handleLogout}>Logout</button>
      <div className="flex flex-col">
        <p>What do you want to do?</p>
        <div className="flex flex-row w-3/4 justify-evenly">
          <button
            className="m-1 bg-blue-500 text-white p-2 rounded cursor-pointer"
            onClick={() => navigateTo("/dashboard/register")}
          >
            Register a Student?
          </button>
          <button
            className="m-1 bg-blue-500 text-white p-2 rounded cursor-pointer"
            onClick={() => navigateTo("allStudents")}
          >
            View Student Details?
          </button>
          <button className="m-1 bg-blue-500 text-white p-2 rounded cursor-pointer">
            Manage Attendance?
          </button>{" "}
          <button className="m-1 bg-blue-500 text-white p-2 rounded cursor-pointer">
            Manage Performance?
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

/*

It sounds like you’re building a multi-step registration process where the first step is registering basic student information, and then on the dashboard, you’d allow the admin to select or search for a student by roll number and manage their attendance and performance records. Here’s how you can structure your app flow to achieve that.

Step 1: Register Basic Student Information

In this step, you will only capture the basic student information such as:
	•	firstName
	•	lastName
	•	rollNumber
	•	email
	•	address
	•	admissionDate

You can create a form for this initial registration and store this data in the students collection in Firestore. You don’t need to add attendance or performance data at this stage.

Code for Registering Basic Student Info:

import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';

const registerStudent = async (studentData) => {
  try {
    const docRef = await addDoc(collection(db, 'students'), studentData);
    console.log('Student registered with ID: ', docRef.id);
  } catch (e) {
    console.error('Error registering student: ', e);
  }
};

// Example usage:
registerStudent({
  firstName: 'John',
  lastName: 'Doe',
  rollNumber: 'A123',
  email: 'john@example.com',
  address: '123 Street',
  admissionDate: '2025-04-01',
});

Step 2: Dashboard with 3 Options (Manage Attendance, Performance, and View Student Details)

Once a student has been registered with the basic details, you can navigate to a dashboard page that presents 3 options for the admin:
	1.	Manage Attendance: Allows the admin to add attendance records for the student.
	2.	Manage Performance: Allows the admin to add performance data for the student.
	3.	View Student Details: Displays all the details of the student.

On the dashboard, you will allow the admin to search for students by rollNumber or select them from a list.

How to Query Students by Roll Number (or Search)

To allow the admin to select a student from a list or search by rollNumber, you can query the students collection using Firestore.

Fetching Students from Firestore:

import { query, collection, where, getDocs } from 'firebase/firestore';
import db from './firebase';

const searchStudentByRollNumber = async (rollNumber) => {
  try {
    const studentQuery = query(collection(db, 'students'), where('rollNumber', '==', rollNumber));
    const querySnapshot = await getDocs(studentQuery);

    if (!querySnapshot.empty) {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
        // Handle the student data here
      });
    } else {
      console.log('No student found with this roll number');
    }
  } catch (e) {
    console.error('Error searching student: ', e);
  }
};

// Example usage:
searchStudentByRollNumber('A123');

Fetching All Students (for Dropdown or List Selection):

If you want to display a list of all students on the dashboard for selection:

import { collection, getDocs } from 'firebase/firestore';
import db from './firebase';

const getAllStudents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'students'));
    const students = querySnapshot.docs.map(doc => doc.data());

    console.log('All students:', students);
    // You can use this list to display students in a dropdown or list
  } catch (e) {
    console.error('Error fetching students: ', e);
  }
};

// Example usage:
getAllStudents();

Step 3: Handle Each Option on Dashboard (Attendance, Performance, Details)

Once the admin selects a student (either by roll number or from a list), you can show different options to manage attendance, performance, or view student details.
	•	Manage Attendance: In this section, you’ll allow the admin to add attendance records for the student.
	•	Manage Performance: Here, the admin can add performance data (such as test scores).
	•	View Student Details: Show all the basic student information along with any attendance and performance data if already entered.

Code for Managing Attendance (Dashboard):

After selecting a student, the admin can add attendance like this:

import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';

const addAttendance = async (studentId, attendanceData) => {
  try {
    const docRef = await addDoc(collection(db, 'students', studentId, 'attendance'), attendanceData);
    console.log('Attendance added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding attendance: ', e);
  }
};

// Example usage:
addAttendance('student-uid', {
  date: '2025-04-01',
  status: 'present',
});

Code for Managing Performance (Dashboard):

The admin can add performance data like this:

import { collection, addDoc } from 'firebase/firestore';
import db from './firebase';

const addPerformance = async (studentId, performanceData) => {
  try {
    const docRef = await addDoc(collection(db, 'students', studentId, 'performance'), performanceData);
    console.log('Performance added with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding performance: ', e);
  }
};

// Example usage:
addPerformance('student-uid', {
  testDate: '2025-04-01',
  overallScore: 7.75,
  remarks: 'Good performance',
  modules: {
    speaking: 7.0,
    reading: 7.5,
    writing: 7.0,
    listening: 8.0,
  },
});

Flow Summary:
	1.	Step 1 (Register Student): Register basic student details (name, roll number, etc.).
	2.	Step 2 (Dashboard): On the dashboard, the admin can:
	•	Search/select a student by roll number.
	•	Manage attendance (add/edit attendance).
	•	Manage performance (add/edit performance).
	•	View detailed student information.

UI Considerations:
	•	Search Box: Include a search input to allow the admin to quickly find students by roll number.
	•	Dropdown/List: Display a list or dropdown to select students if the roll number is not known.
	•	Dynamic Forms: Based on the selected student, display forms to add or update attendance or performance data.

Let me know if you need more help implementing any part of the flow or UI!

*/
