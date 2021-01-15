import React, { useState, useEffect } from "react";
import axios from "axios";
import { studentBlock } from "../utils";
const AllStudent = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchAllStudent = async () => {
    try {
      const { data } = await axios.get(
        "https://nc-student-tracker.herokuapp.com/api/students"
      );
      setStudents(data);
      setLoading(false);
    } catch {
      setError("Something is wrong with api");
    }
  };
  useEffect(() => {
    fetchAllStudent();
  }, []);

  if (isLoading === true) return "loading";
  return (
    <table>
      <thead>
        <tr>
          <th>Student Name</th>

          <th>Starting Cohort</th>

          <th>Starting Block</th>
        </tr>
      </thead>
      {students.students.map((std) => (
        <tr>
          <td>{std.name}</td>

          <td>{std.startingCohort}</td>
          <td>{studentBlock(std.currentBlock)}</td>
        </tr>
      ))}
    </table>
  );
};

export default AllStudent;
