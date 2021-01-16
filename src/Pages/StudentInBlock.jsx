import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayStudent from "../Component/DisplayStudent";
import OrderByStudent from "../Component/OrderByStudent";
const StudentInBlock = () => {
  const [block, setBlocks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [section, setSection] = useState("fun");
  const [sort, setSort] = useState("");

  const fetchStudentBlock = async () => {
    console.log("ai");
    try {
      const {
        data: { students },
      } = await axios.get(
        `https://nc-student-tracker.herokuapp.com/api/students?block=${section}&order=${sort}`
      );
      setBlocks(students);
      setLoading(false);
    } catch {
      setError("Something is wrong with api");
    }
  };
  useEffect(() => {
    fetchStudentBlock();
  }, [section, sort]);
  const handleChange = (e) => {
    setSection(e.target.value);
  };
  const setSortStudent = (value) => {
    setSort(value);
  };

  if (isLoading === true) return "...loading";
  if (error) return error;
  return (
    <section>
      <div>
        <select value={section} onChange={handleChange}>
          <option value="fun">Fundamentals</option>
          <option value="be">Backend</option>
          <option value="fe">Frontend</option>
          <option value="proj">Project</option>
          <option value="grad">graduate</option>
        </select>
      </div>

      <OrderByStudent setSortStudent={setSortStudent} sort={sort} />
      <DisplayStudent students={block} />
    </section>
  );
};

export default StudentInBlock;
