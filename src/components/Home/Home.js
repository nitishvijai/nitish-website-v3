import { React, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Home = (props) => {
  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  useEffect(() => {
    document.title = 'Home - Nitish Vijai';
  }, []);

  let moveGradient = (e) => {
    let x = e.clientX - 0;
    let y = e.clientY - 0;
    gradient.current.style.setProperty('--x', x + 'px');
    gradient.current.style.setProperty('--y', y + 'px');
  }

  return (
    <div className={(mode === 'dark' ? 'darkgradient' : 'lightgradient')} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar toggle={setMode} mode={mode} selected={0} />
      <div id={styles.main}>
        <p className={styles.message}>Hello and welcome to my site! You're in the right place if you're looking for everything I've done in the cool world of tech -- thanks for visiting!</p>
        <p className={styles.message}>To get started, please click on the links above to learn more about me.</p>
      </div>
      <div id={styles.tldr}>
        <h2>tl;dr:</h2>
        <div id={styles.left}>
          <img src="/Nitish_2023.JPG" className={styles.headshot} />
        </div>
        <div id={styles.right}>
          <h2 className={styles.fact} id={styles.tldrHeading}>&nbsp;&nbsp;Nitish Vijai</h2>
          <p className={styles.fact}>🖥️ Associate Software Engineer @ Capital One</p>
          <p className={styles.fact}>〽️ B.S.E. CS + DS @ University of Michigan 2023 Grad</p>
          <p className={styles.fact}>⚒️ Most likely seizing the day</p>
          <p className={styles.fact}>📲 Let's talk? Connect with me <Link to="/contact" className="pgLink">here</Link></p>
        </div>
      </div>
      <Footer/>

    </div>
  );
};


export default Home;
