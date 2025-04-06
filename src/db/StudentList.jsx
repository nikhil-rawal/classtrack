import React from "react";

const StudentList = () => {
  const Student = {
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
*/
