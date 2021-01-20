import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayStudent from "../Component/DisplayStudent";
import OrderByStudent from "../Component/OrderByStudent";
import SortByName from "../Component/SortByName";
const StudentInBlock = () => {
  const [block, setBlocks] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [section, setSection] = useState("fun");
  const [sort, setSort] = useState("");
  const [sortData, setSortData] = useState("name");

  const fetchStudentBlock = async () => {
    try {
      const {
        data: { students },
      } = await axios.get(
        `https://nc-student-tracker.herokuapp.com/api/students?block=${section}&order=${sort}&sort_by=${sortData}`
      );
      setBlocks(students);
      setLoading(false);
    } catch {
      setError("Something is wrong with api");
    }
  };
  useEffect(() => {
    fetchStudentBlock();
  }, [section, sort, sortData]);
  const handleChange = (e) => {
    setSection(e.target.value);
  };
  const setSortStudent = (value) => {
    setSort(value);
  };

  const setSortDataByNameAndCohort = (value) => {
    setSortData(value);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://nc-student-tracker.herokuapp.com/api/students/${id}`
      );

      await fetchStudentBlock();
    } catch (err) {
      setError("delete request is not working");
    }
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
      <SortByName
        sortData={sortData}
        setSortDataByNameAndCohort={setSortDataByNameAndCohort}
      />

      <DisplayStudent students={block} handleDelete={handleDelete} />
    </section>
  );
};

export default StudentInBlock;
