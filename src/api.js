import axios from "axios";
export const postStudent = (name, startingCohort) => {
  return axios
    .post("https://nc-student-tracker.herokuapp.com/api/students/", {
      name: name,
      startingCohort: startingCohort,
    })
    .then(({ data: { student } }) => {
      return { student: student };
    });
};
