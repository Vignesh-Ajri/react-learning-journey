import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./componets/Header";
import Search from "./componets/Search";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/dashboard" element={<></>} />
        <Route path="/blog/new" element={<></>} />
        <Route path="/login" element={<></>} />
        <Route path="/register" element={<></>} />
        <Route path="*" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
