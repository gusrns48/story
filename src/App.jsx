import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "component/home"
import About from "component/about"
import Ex from "component/ex"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ex" element={<Ex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;