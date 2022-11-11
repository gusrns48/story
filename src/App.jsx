import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "component/home"
import About from "component/about"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;