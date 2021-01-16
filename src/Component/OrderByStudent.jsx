import React from "react";

const OrderByStudent = (props) => {
  return (
    <section>
      <select
        value={props.sort}
        onChange={(e) => {
          props.setSortStudent(e.target.value);
        }}
      >
        <option value={"asc"}>ASC</option>
        <option value={"desc"}>DESC</option>
      </select>
    </section>
  );
};

export default OrderByStudent;
