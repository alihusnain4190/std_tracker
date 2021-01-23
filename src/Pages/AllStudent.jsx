import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import axios from "axios";
import { OrderByStudent, SortByName, DisplayStudent } from "../Component/index";

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
  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://nc-student-tracker.herokuapp.com/api/students/${id}`
      );

      await fetchAllStudent();
    } catch (err) {
      console.log(err);
    }
  };
  if (error) return error;
  if (isLoading === true)
    return <Loader type="Rings" color="#00BFFF" height={80} width={80} />;
  return (
    <div>
      <div className="student__sort__wrapper">
        <OrderByStudent setSortStudent={setSortStudent} sort={sort} />
        <SortByName
          sortData={sortData}
          setSortDataByNameAndCohort={setSortDataByNameAndCohort}
        />
      </div>
      <DisplayStudent
      
        handleDelete={handleDelete}
        students={students.students}
      />
    </div>
  );
};

export default AllStudent;
