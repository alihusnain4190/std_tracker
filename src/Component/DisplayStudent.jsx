import React, { useEffect, useState } from "react";
import { studentBlock } from "../utils";
import axios from "axios";
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
              {/* <button onClick={() => handleDelete(std._id)}>Delete</button> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayStudent;
