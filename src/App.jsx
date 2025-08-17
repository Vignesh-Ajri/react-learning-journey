import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Day01 from "./days/Day01-HelloWorld";
import Day02 from "./days/Day02-JSX-Component";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Header />

        {/* Navigation */}
        <nav>
          <ul style={{ display: "flex", gap: "15px" }}>
            <li>
              <Link to="/day01">Day 01 - Hello World</Link>
            </li>
            <li>
              <Link to="/day02">Day 02 - JSX & Components</Link>
            </li>
            <li>
              <Link to="/day03">Day 03 - Props</Link>
            </li>
            <li>
              <Link to="/day04">Day 04 - State</Link>
            </li>
            <li>
              <Link to="/day05">Day 05 - Events</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/day01" element={<Day01 />} />
          <Route path="/day02" element={<Day02 />} />
          {/* <Route path="/day03" element={<Day03 />} />
          <Route path="/day04" element={<Day04 />} />
          <Route path="/day05" element={<Day05 />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
