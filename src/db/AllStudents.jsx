import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase";

const AllStudents = () => {
  const [allStudents, setAllStudents] = useState([]);
  useEffect(() => {
    getAllStudents();
  }, []);

  const getAllStudents = async () => {
    try {
      const qwerySnapshot = await getDocs(collection(db, "students"));
      const allStudents = qwerySnapshot.docs.map((doc) => doc.data());
      console.log("All Students:", allStudents);
      setAllStudents(allStudents);
    } catch (err) {
      console.error("Error fetching all students:", err);
    }
  };
  return (
    <div>
      {allStudents &&
        allStudents.map((student) => (
          <div className="flex flex-col" key={student.rollNumber}>
            <p>Roll Number : {student.rollNumber}</p>
            <p>First Name : {student.firstName}</p>
            <p>Last Name : {student.lastName}</p>
            <p>Email : {student.email}</p>
            <p>Address: {student.address}</p>
            <p>Admission Date : {student.admissionDate}</p>
          </div>
        ))}
    </div>
  );
};

export default AllStudents;
