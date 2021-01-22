import "./App.css";

import { Router } from "@reach/router";
import { Navbar, Footer, Error } from "./Component/index";

import {
  Landing,
  AllStudent,
  GraduateStudent,
  StudentInBlock,
  AddStudent,
} from "./Pages/index";
// import AllStudent from "./Pages/AllStudent";
// import GraduateStudent from "./Pages/GraduateStudent";
// import StudentInBlock from "./Pages/StudentInBlock";
// import UpdateStudent from "./Pages/UpdateStudent";
// import AddStudent from "./Pages/AddStudent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Landing path="/" />
        <AllStudent path="/students" />
        <GraduateStudent path="/graduate" />
        <StudentInBlock path="/block" />
        {/* <UpdateStudent path="students/single/:id"></UpdateStudent> */}
        <AddStudent path="/add"></AddStudent>
        <Error default />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
