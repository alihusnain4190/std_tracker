import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";

import { SortByName, OrderByStudent, DisplayStudent } from "../Component/index";
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
  if (isLoading === true)
    return <Loader type="Rings" color="#00BFFF" height={80} width={80} />;

  if (error) return error;
  return (
    <section>
      <div className="student__sort__wrapper">
        <div className="block">
          <select
            className="select__block"
            value={section}
            onChange={handleChange}
          >
            <option className="block__opt" value="fun">
              Fundamentals
            </option>
            <option className="block__opt" value="be">
              Backend
            </option>
            <option className="block__opt" value="fe">
              Frontend
            </option>
            <option className="block__opt" value="proj">
              Project
            </option>
            <option className="block__opt" value="grad">
              graduate
            </option>
          </select>
        </div>

        <OrderByStudent setSortStudent={setSortStudent} sort={sort} />
        <SortByName
          sortData={sortData}
          setSortDataByNameAndCohort={setSortDataByNameAndCohort}
        />
      </div>
      <DisplayStudent students={block} handleDelete={handleDelete} />
    </section>
  );
};

export default StudentInBlock;
