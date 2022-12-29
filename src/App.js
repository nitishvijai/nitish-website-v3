import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
