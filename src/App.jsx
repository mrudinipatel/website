// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import './App.css'
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';
import About from './sections/About/About';
import Footer from './sections/Footer/Footer';

function App() {
  return ( 
    <>
      <Home/>
      <About />
      <Projects />
      <Footer />
    </>
  );
};

export default App
