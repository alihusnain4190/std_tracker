import React from "react";
import { studentBlock } from "../utils";
const DisplayStudent = ({ students, handleDelete }) => {
  const handleID = (id) => {
    handleDelete(id);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Student Name</th>

            <th>Starting Cohort</th>

            <th>Starting Block</th>
          </tr>
        </thead>
        <tbody>
          {students.map((std) => (
            <tr key={std._id}>
              <td>{std.name}</td>

              <td>{std.startingCohort}</td>
              <td>{studentBlock(std.currentBlock)}</td>
              <td>
                <button onClick={() => handleID(std._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayStudent;
