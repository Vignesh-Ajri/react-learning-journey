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
import Day15 from "./days/Day15-RouterBasics";
import Day16 from "./days/Day16-NestedRoutes";
import Day17 from "./days/Day17-Navigation";
import Day18 from "./days/Day18-API";
import Day19 from "./days/Day19-Loading-ErrorState";
import Day20 from "./days/Day20-CustomHooks";
import Day21 from "./days/Day21-WeatherApp";
import Day22 from "./days/Day22-ContextApi";
import Day23 from "./days/Day23-useReducer";
import Day24 from "./days/Day24-LocalStorage";
import Day25 from "./days/Day25-PerformanceOptimizations";
import Day26 from "./days/Day26-ErrorBoundaries";
import UserCard from "./days/Day27-PropTypes";

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
          <Route path="/day15/*" element={<Day15 />} />
          <Route path="/day16/*" element={<Day16 />} />
          <Route path="/day17/*" element={<Day17 />} />
          <Route path="/day18" element={<Day18 />} />
          <Route path="/day19" element={<Day19 />} />
          <Route path="/day20" element={<Day20 />} />
          <Route path="/day21" element={<Day21 />} />
          <Route path="/day22" element={<Day22 />} />
          <Route path="/day23" element={<Day23 />} />
          <Route path="/day24" element={<Day24 />} />
          <Route path="/day25" element={<Day25 />} />
          <Route path="/day26" element={<Day26 />} />
          <Route
            path="/day27"
            element={<UserCard name={"Guest"} age={18} isAdmin={true} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
