import React, { useState, useEffect } from "react";
import axios from "axios";
import { studentBlock } from "../utils";
import OrderByStudent from "../Component/OrderByStudent";
import SortByName from "../Component/SortByName";
import DisplayStudent from "../Component/DisplayStudent";
const AllStudent = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [sort, setSort] = useState("");
  const [error, setError] = useState("");
  const [sortData, setSortData] = useState("name");
  const fetchAllStudent = async () => {
    try {
      const { data } = await axios.get(
        `https://nc-student-tracker.herokuapp.com/api/students?order=${sort}&sort_by=${sortData}`
      );
      setStudents(data);
      setLoading(false);
    } catch {
      setError("Something is wrong with api");
    }
  };
  useEffect(() => {
    fetchAllStudent();
  }, [sort, sortData]);
  const setSortStudent = (value) => {
    setSort(value);
  };
  const setSortDataByNameAndCohort = (value) => {
    setSortData(value);
  };
  if (error) return error;
  if (isLoading === true) return "loading";
  return (
    <div>
      <OrderByStudent setSortStudent={setSortStudent} sort={sort} />
      <SortByName
        sortData={sortData}
        setSortDataByNameAndCohort={setSortDataByNameAndCohort}
      />
      <DisplayStudent students={students.students} />
    </div>
  );
};

export default AllStudent;
