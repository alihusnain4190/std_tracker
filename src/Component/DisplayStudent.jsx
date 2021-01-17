import React from "react";
import { studentBlock } from "../utils";
import { Link } from "@reach/router";
const DisplayStudent = ({ students }) => {
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
              <Link to={`single/${std._id}`}>update</Link>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayStudent;
