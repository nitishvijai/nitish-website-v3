import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Writing from './components/Writing/Writing';
import Travel from './components/Travel/Travel';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/essays" element={<Writing />} />
        <Route path="/travels" element={<Travel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
