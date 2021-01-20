import React, { useState, useRef } from "react";
import axios from "axios";
const UpdateBlock = ({ id }) => {
  console.log(id);
  const textInput = useRef();
  const [student, setStudent] = useState("");
  const hadnleChange = () => {
    setStudent(textInput.current.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.patch(
      `https://nc-student-tracker.herokuapp.com/api/students/${id}?progress=true`,
      { data: 2 }
    );
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          updaBlock
          <input
            type="text"
            value={student}
            ref={textInput}
            onChange={hadnleChange}
          ></input>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UpdateBlock;
