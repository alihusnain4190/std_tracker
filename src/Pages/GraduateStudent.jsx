import React, { useState, useEffect } from "react";
import axios from "axios";
import { studentBlock } from "../utils";
const GraduateStudent = () => {
  const [graduate, setGraduate] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchGraduate = async () => {
    try {
      const { data: students } = await axios.get(
        `https://nc-student-tracker.herokuapp.com/api/students?graduated=true`
      );
      setGraduate(students);
      setLoading(false);
    } catch {
      setError("Something is wrong with api");
    }
  };
  useEffect(() => {
    fetchGraduate();
  }, []);
  if (isLoading === true) return "...loading";
  if (error) return error;
  console.log(graduate.students);
  return (
    <section>
      <table>
        <thead>
          <th>Name</th>
          <th>Starting Cohort</th>
          <th>Block</th>
        </thead>
        <tbody>
          {graduate.students.map((std) => (
            <tr>
              <td>{std.name}</td>

              <td>{std.startingCohort}</td>
              <td>{studentBlock(std.currentBlock)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default GraduateStudent;
