import React, { useState, useEffect } from "react";
import axios from "axios";
const UpdateStudent = (props) => {
  const [student, setStudent] = useState([]);
  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        `https://nc-student-tracker.herokuapp.com/api/students:id=${props.id}`
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);
  return <div>asddas</div>;
};

export default UpdateStudent;
