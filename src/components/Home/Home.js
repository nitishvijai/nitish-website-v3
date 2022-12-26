import React from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector('.gradient, a');
    let x = e.clientX - 0;
    let y = e.clientY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }

  return (
    <div className="Home gradient" onMouseMove={(e) => moveGradient(e)}>
      <Navbar />
      <p id={styles.message}>Hello and welcome to my site! To get started, click on some of the links above to learn more about me.</p>
      <Footer />
    </div>
  );
};


export default Home;