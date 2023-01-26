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
      <div id={styles.main}>
        <p className={styles.message}>Hello and welcome to my site! You're in the right place if you're looking for everything I've done in the cool world of tech -- thanks for visiting!</p>
        <p className={styles.message}>To get started, please click on the links above to learn more about me.</p>
      </div>
      <div id={styles.tldr}>
        <h2>tl;dr:</h2>
        <div id={styles.left}>
          <img src="/Nitish_2022.jpg" className={styles.headshot} />
        </div>
        <div id={styles.right}>
          <h2 className={styles.fact} id={styles.tldrHeading}>&nbsp;&nbsp;Nitish Vijai</h2>
          <p  className={styles.fact}>📚 B.S.E. Computer Science and Data Science @ University of Michigan</p>
          <p  className={styles.fact}>🖥️ Incoming Associate Software Engineer @ Capital One</p>
          <p  className={styles.fact}>⚒️ Currently working on this website</p>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};


export default Home;
