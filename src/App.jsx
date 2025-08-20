import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Day01 from "./days/Day01-HelloWorld";
import Day02 from "./days/Day02-JSX-Component";
import { FunctionalComponent, ClassComponent, Card } from "./days/Day03-Props";
import { CounterAppFunctional, CounterAppClass } from "./days/Day04-State";
import { ToggleTextFunctional, ToggleTextClass } from "./days/Day05-Events";

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
          <Route
            path="/day03"
            element={
              <>
                <FunctionalComponent name="Joe" />
                <ClassComponent name="Joe" />

                <Card title="Children Example">
                  <p>This paragraph is passed as children!</p>
                  <button>Click Me</button>
                </Card>
              </>
            }
          />
          <Route
            path="/day04"
            element={
              <>
                <CounterAppFunctional />
                <CounterAppClass />
              </>
            }
          />
          <Route
            path="/day05"
            element={
              <>
                <ToggleTextFunctional />
                <ToggleTextClass />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
