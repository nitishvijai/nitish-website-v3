import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Writing from './components/Writing/Writing';
import Travel from './components/Travel/Travel';
import Contact from './components/Contact/Contact';
import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [mode, setMode] = useLocalStorage('mode', defaultDark ? 'dark' : 'light');

  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
    }
    else {
      setMode("dark");
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home color={mode} toggle={toggleMode}/>}/>
        <Route path="/about" element={<About color={mode} toggle={toggleMode}/>}/>
        <Route path="/projects" element={<Projects color={mode} toggle={toggleMode}/>} />
        <Route path="/resume" element={<Resume color={mode} toggle={toggleMode}/>} />
        <Route path="/essays" element={<Writing color={mode} toggle={toggleMode}/>} />
        <Route path="/travels" element={<Travel color={mode} toggle={toggleMode}/>} />
        <Route path="/contact" element={<Contact color={mode} toggle={toggleMode}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
