import "./App.css";
import Header from "./components/header.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bg from "./assets/bg.png";
import Contact from "./components/contact.js";
import Footer from "./components/footer.js";
import Navbar from "./components/navbar.js";
import About from "./components/about.js";

function App() {
  return (
    <div
      className="App"
    >
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
