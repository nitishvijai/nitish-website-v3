import { React, useRef, useEffect, useState } from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
  const mobilePortrait = useMediaQuery('(max-width:1024px)');
  const gradient = useRef(null);
  const [mode, setMode] = useState();
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (mode === 'system') {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode();
      }
      else {
        setLightMode();
      }
    
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
          const colorScheme = event.matches ? "dark" : "light";
          console.log(colorScheme); // "dark" or "light"
          setMode(colorScheme);
        });
    }
  });

  let moveGradient = (e) => {
    let x = e.clientX - 0;
    let y = e.clientY - 0;
    if (!mobilePortrait) {
      gradient.current.style.setProperty('--x', x + 'px');
      gradient.current.style.setProperty('--y', y + 'px');
    } else {
      gradient.current.style.setProperty('--x', '0px');
      gradient.current.style.setProperty('--y', '0px');
    }
  }

  let toggleColorMode = () => {
    if (mode === 'dark') {
      setAuto(false);
      setLightMode();
    }
    else if (mode === 'light') {
      setAuto(true);
      setMode('system');
    }
    else {
      setAuto(false);
      setDarkMode();
    }
  }

  let setLightMode = () => {
    setMode('light');
  }

  let setDarkMode = () => {
    setMode('dark');
  }

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar toggleColorMode={toggleColorMode} setLight={setLightMode} setDark={setDarkMode} />
      <div id={mobilePortrait ? styles.main_mobile : styles.main}>
        <p className={styles.message}>Hello and welcome to my site! You're in the right place if you're looking for everything I've done in the cool world of tech -- thanks for visiting!</p>
        <p className={styles.message}>To get started, please click on the links above to learn more about me.</p>
      </div>
      <div id={mobilePortrait ? styles.tldr_mobile : styles.tldr}>
        <h2>tl;dr:</h2>
        <div id={mobilePortrait ? styles.left_mobile : styles.left}>
          <img src="/Nitish_2022.jpg" className={mobilePortrait ? styles.headshot_mobile : styles.headshot} />
        </div>
        <div id={styles.right}>
          <h2 className={mobilePortrait ? styles.fact_mobile : styles.fact} id={styles.tldrHeading}>&nbsp;&nbsp;Nitish Vijai</h2>
          <p  className={mobilePortrait ? styles.fact_mobile : styles.fact}>〽️ B.S.E. Computer Science and Data Science @ University of Michigan</p>
          <p  className={mobilePortrait ? styles.fact_mobile : styles.fact}>🖥️ Incoming Associate Software Engineer @ Capital One</p>
          <p  className={mobilePortrait ? styles.fact_mobile : styles.fact}>⚒️ Currently working on this website</p>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};


export default Home;
