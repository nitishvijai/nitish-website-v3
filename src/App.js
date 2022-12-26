import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
