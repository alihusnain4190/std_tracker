import React, { useState, useEffect } from "react";
import axios from "axios";
import UpdateBlock from "../Component/UpdateBlock";
const UpdateStudent = (props) => {
  const [student, setStudent] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [boolean, setBoolean] = useState(false);
  const [id, setId] = useState("");
  const fetchStudent = async () => {
    try {
      const {
        data: { student },
      } = await axios.get(
        `https://nc-student-tracker.herokuapp.com/api/students/${props.id}`
      );

      setStudent(student);
      setLoading(false);
    } catch (err) {
      setError("something wrong with API");
    }
  };
  useEffect(() => {
    fetchStudent();
  }, []);
  const hadnleClick = (value) => {
    console.log("asd");
    setBoolean(true);
    setId(value);
  };
  if (isLoading === true) return "...Loading";
  if (error) return error;

  return (
    <section>
      <h1>Name: {student.name}</h1>
      <p>Staring cohort{student.startingCohort}</p>
      <table>
        <thead>
          <tr>
            <th>Block Name</th>
            <th>Block Number</th>
          </tr>
        </thead>
        <tbody>
          {student.blockHistory.map((std) => (
            <tr key={std._id}>
              <td>{std.name}</td>
              <td>{std.number}</td>

              <button
                onClick={() => {
                  hadnleClick(std._id);
                }}
              >
                UpdateStudent
              </button>
            </tr>
          ))}
        </tbody>
      </table>
       <UpdateBlock id={id} /> 
    </section>
  );
};

export default UpdateStudent;
