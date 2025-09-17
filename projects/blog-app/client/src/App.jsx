import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home"

function App() {
  return (
    <div className="">
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<p>Page Not Found</p>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
