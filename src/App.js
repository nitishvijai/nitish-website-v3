import './App.css';
import Navbar from './components/Navbar/Navbar';

function App() {
  const moveGradient = (e) => {
    let btn = document.querySelector('.gradient, a');
    let x = e.clientX - 0;
    let y = e.clientY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  };

  return (
    <div className="App gradient" onMouseMove={(e) => moveGradient(e)}>
      <Navbar />
      <h1>Nitish Website v3.0</h1>
    </div>
  );
}

export default App;
