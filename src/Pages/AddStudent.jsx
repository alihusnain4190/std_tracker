import React, { Component } from "react";
import * as api from "../api";

class AddStudent extends Component {
  state = {
    name: "",
    startingCohort: "",
    msg: "",
    err: "",
  };

  addStudent = () => {
    const { name, startingCohort } = this.state;
    api
      .postStudent(name, startingCohort)
      .then(({ student }) => {
        this.setState({
          msg: `${student.name} has been added to the system.`,
          name: "",
          startingCohort: "",
        });
      })
      .catch((err) => {
        console.dir(err);
        this.setState({
          err: { status: err.response.status, msg: err.response.data.message },
        });
      });
  };

  handleAddStudent = (event) => {
    event.preventDefault();
    this.addStudent();
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, startingCohort, msg, err } = this.state;
    if (err) return "error";
    return (
      <>
        <main>
          <div>
            <h2>Add Student</h2>
            <form onSubmit={this.handleAddStudent} className="form">
              <div className="row">
                <div className="col-25">
                  <label htmlFor="name">Name: </label>
                </div>
                <div className="col-75">
                  <input
                    className="text"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter student name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-25">
                  <label htmlFor="cohort">Cohort :</label>
                </div>
                <div className="col-75">
                  <input
                    className="text"
                    placeholder="enter starting cohort"
                    id="cohort"
                    type="number"
                   step="1"
                    name="startingCohort"
                    value={startingCohort}
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="row">
                <button className="btn btn__submit" type="submit">
                  Submit
                </button>
              </div>
            </form>
            {msg && <p>{msg}</p>}
          </div>
        </main>
      </>
    );
  }
}
export default AddStudent;
