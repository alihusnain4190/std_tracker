import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Router } from "@reach/router";
import Landing from "./Pages/Landing";
import AllStudent from "./Pages/AllStudent";
import GraduateStudent from "./Pages/GraduateStudent";
import StudentInBlock from "./Pages/StudentInBlock";
import UpdateStudent from "./Pages/UpdateStudent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Landing path="/" />
        <AllStudent path="/students" />
        <GraduateStudent path="/graduate" />
        <StudentInBlock path="/block" />
        <UpdateStudent path="students/update/:id"></UpdateStudent>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
