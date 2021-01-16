import React from "react";

const SortByName = (props) => {
  return (
    <div>
      <select
        value={props.sortData}
        onChange={(e) => {
          props.setSortDataByNameAndCohort(e.target.value);
        }}
      >
        <option value="name">Name</option>
        <option value="startingCohort">Cohort</option>
      </select>
    </div>
  );
};

export default SortByName;
