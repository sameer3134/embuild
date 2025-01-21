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
      // style={{
      //   backgroundImage: `url(${bg})`,
      //   backgroundSize: "cover", // Ensure the image covers the entire area
      //   backgroundRepeat: "no-repeat", // Prevent the image from repeating
      //   backgroundPosition: "center", // Center the image
      //   minHeight: "100vh", // Ensure it covers the viewport height
      // }}
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
