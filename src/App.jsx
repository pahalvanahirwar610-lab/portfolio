<<<<<<< HEAD

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
=======
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from "./components/Projects"
import Footer from './components/Footer'
import Experience from './components/Experience';

>>>>>>> b3d9d91e4301b01ad4ad4a2f558c3ed61097873a

function App() {
  return (
    <>
<<<<<<< HEAD
      < Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
      </Routes>
      <Footer />
=======
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
      
>>>>>>> b3d9d91e4301b01ad4ad4a2f558c3ed61097873a
    </>
  );
}

export default App;
