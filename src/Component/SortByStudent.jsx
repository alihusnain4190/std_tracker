import React from "react";

const SortByStudent = (props) => {
  const handleChange = (e) => {
    const data = e.target.value;

    props.setSortStudent(data);
  };
  return (
    <section>
      <select value={props.sort} onChange={handleChange}>
        <option value={"asc"}>ASC</option>
        <option value={"desc"}>DESC</option>
      </select>
    </section>
  );
};

export default SortByStudent;
