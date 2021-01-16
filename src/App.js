import "./App.css";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import { Router } from "@reach/router";
import Landing from "./Pages/Landing";
import AllStudent from "./Pages/AllStudent";
import GraduateStudent from "./Pages/GraduateStudent";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Landing path="/" />
        <AllStudent path="/students" />
        <GraduateStudent path="/graduate" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
