import React, { useState, useEffect } from "react";
import axios from "axios";
import SortByName from "../Component/SortByName";
import { studentBlock } from "../utils";
import OrderByStudent from "../Component/OrderByStudent";
import DisplayStudent from "../Component/DisplayStudent";
const GraduateStudent = () => {
  const [graduate, setGraduate] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [sort, setSort] = useState("");
  const [sortData, setSortData] = useState("name");

  const fetchGraduate = async () => {
    try {
      const { data: students } = await axios.get(
        `https://nc-student-tracker.herokuapp.com/api/students?graduated=true&?order=${sort}&sort_by=${sortData}`
      );
      setGraduate(students);
      setLoading(false);
    } catch {
      setError("Something is wrong with api");
    }
  };
  useEffect(() => {
    fetchGraduate();
  }, [sort, sortData]);
  const setSortStudent = (value) => {
    setSort(value);
  };

  const setSortDataByNameAndCohort = (value) => {
    setSortData(value);
  };
  if (isLoading === true) return "...loading";
  if (error) return error;
  return (
    <section>
      <OrderByStudent setSortStudent={setSortStudent} sort={sort} />
      <SortByName
        sortData={sortData}
        setSortDataByNameAndCohort={setSortDataByNameAndCohort}
      />
      <DisplayStudent students={graduate.students} />
    </section>
  );
};

export default GraduateStudent;
