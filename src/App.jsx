import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Pages/Navbar";
import Front from "./Pages/Front";
import Services from "./Pages/Services";
import End from "./Pages/End"
import Cursor from "./Pages/Cursor"
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"

function App() {
  return (

   <div className="font-poppins">

    <BrowserRouter>
      <Navbar />
      <Cursor />
      <Routes>
        <Route path="/" element={<Front />} />       
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<End />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;