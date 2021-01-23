import React from "react";

const OrderByStudent = (props) => {
  return (
    <div className="order">
      <select
        value={props.sort}
        className="select__order"
        onChange={(e) => {
          props.setSortStudent(e.target.value);
        }}
      >
        <option className="order__opt" value={"asc"}>
          ASC
        </option>
        <option className="order__opt" value={"desc"}>
          DESC
        </option>
      </select>
    </div>
  );
};

export default OrderByStudent;
