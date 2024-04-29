import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Garage from "./components/garage/Garage";
import Winners from "./components/winners/Winners";

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/winners" element={<Winners />} />
          <Route path="/" element={<Garage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
