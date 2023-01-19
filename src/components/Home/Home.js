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
      <p className={styles.message}>Hello and welcome to my site! You're in the right place if you're looking for everything I've done in the cool world of tech -- thanks for visiting!</p>
      <p className={styles.message}>To get started, please click on the links above to learn more about me.</p>
      <Footer />
    </div>
  );
};


export default Home;
