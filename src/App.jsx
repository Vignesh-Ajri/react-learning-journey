import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Day01 from "./days/Day01-HelloWorld";
import Day02 from "./days/Day02-JSX-Component";
import { FunctionalComponent, ClassComponent, Card } from "./days/Day03-Props";
import { CounterAppFunctional, CounterAppClass } from "./days/Day04-State";
import { ToggleTextFunctional, ToggleTextClass } from "./days/Day05-Events";
import { TodoListFunctional, TodoListClass } from "./days/Day06-ListsAndKeys";
import InteractiveDay07 from "./days/Day07-ConditionalRendering";
import Day08StyledButton from "./days/Day08-StyledButton";
import Counter from "./days/Day09-Tailwind-CSS";
import Posts from "./days/Day10-UseEffect";
import Day11Form from "./days/Day11-Form";
import TemperatureConverter from "./days/Day12-LiftingStateUp";
import DevToolsDemo from "./days/Day13-DevToolsDemo";
import ToDo from "./days/Day14-ToDoApp";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <Header />

        {/* Navigation */}
        <NavBar />

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
          <Route
            path="/day06"
            element={
              <>
                <TodoListFunctional />
                <TodoListClass />
              </>
            }
          />
          <Route path="/day07" element={<InteractiveDay07 />} />
          <Route path="/day08" element={<Day08StyledButton />} />
          <Route path="/day09" element={<Counter />} />
          <Route path="/day10" element={<Posts />} />
          <Route path="/day11" element={<Day11Form />} />
          <Route path="/day12" element={<TemperatureConverter />} />
          <Route path="/day13" element={<DevToolsDemo />} />
          <Route path="/day14" element={<ToDo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
