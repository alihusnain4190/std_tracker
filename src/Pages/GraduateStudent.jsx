import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import axios from "axios";
import {SortByName,OrderByStudent,DisplayStudent} from "../Component/index";
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
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://nc-student-tracker.herokuapp.com/api/students/${id}`
      );

      await fetchGraduate();
    } catch (err) {
      setError("delete request is not working");
    }
  };
  if (isLoading === true)
    return <Loader type="Rings" color="#00BFFF" height={80} width={80} />;
  if (error) return error;
  return (
    <section>
      <OrderByStudent setSortStudent={setSortStudent} sort={sort} />
      <SortByName
        sortData={sortData}
        setSortDataByNameAndCohort={setSortDataByNameAndCohort}
      />
      <DisplayStudent
        handleDelete={handleDelete}
        students={graduate.students}
      />
    </section>
  );
};

export default GraduateStudent;
