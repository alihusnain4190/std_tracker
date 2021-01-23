import React from "react";

const SortByName = (props) => {
  return (
    <div className="sort">
      <select
        value={props.sortData}
        className="select__sort"
        onChange={(e) => {
          props.setSortDataByNameAndCohort(e.target.value);
        }}
      >
        <option className="sort__opt" value="name">
          Name
        </option>
        <option className="sort__opt" value="startingCohort">
          Cohort
        </option>
      </select>
    </div>
  );
};

export default SortByName;
