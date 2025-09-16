import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Search from "./componets/Search";
import Home from "./pages/Home";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<></>} />
          <Route path="/blog/new" element={<></>} />
          <Route path="/blog/:id" element={<></>} />
          <Route path="/login" element={<></>} />
          <Route path="/register" element={<></>} />
          <Route path="*" element={<></>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
