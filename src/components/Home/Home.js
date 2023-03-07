import { React, useRef, useEffect, useState } from 'react';
import styles from './Home.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:600px) and (orientation:portrait)');
  const mobileLandscape = useMediaQuery('(min-width:600px) and (max-width:1023px) and (orientation:landscape)');

  const tabletPortrait = useMediaQuery('(min-width: 601px) and (max-width:1023px) and (orientation:portrait)');
  const tabletLandscape = useMediaQuery('(min-width:1024px) and (max-width:1366px) and (orientation:landscape)');

  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  useEffect(() => {
    document.title = 'Home - Nitish Vijai';

    const handleResize = () => {
      // do magic for resize
      if (window.innerHeight >= 768 && !mobilePortrait) {
        gradient.current.style.setProperty('height', '100%');
      }
      else if (window.innerHeight < 768 || mobilePortrait || mobileLandscape) {
        gradient.current.style.setProperty('height', 'auto');
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  useEffect(() => {
    console.log("Mobile PORTRAIT: " + mobilePortrait);

    if (window.innerHeight >= 768 && !mobilePortrait) {
      gradient.current.style.setProperty('height', '100%');
    }
    else if (window.innerHeight < 768 || mobilePortrait || mobileLandscape) {
      gradient.current.style.setProperty('height', 'auto');
    }
  }, [mobilePortrait, mobileLandscape]);


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

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar toggle={setMode} mode={mode} selected={0} />
      <div id={mobilePortrait ? styles.main_mobile : styles.main}>
        <p className={styles.message}>Hello and welcome to my site! You're in the right place if you're looking for everything I've done in the cool world of tech -- thanks for visiting!</p>
        <p className={styles.message}>To get started, please {mobilePortrait ? "tap" : "click"} on the {mobilePortrait || mobileLandscape || tabletPortrait ? "menu" : "links"} above to learn more about me.</p>
      </div>
      <div id={mobilePortrait ? styles.tldr_mobile : (mobileLandscape || tabletPortrait || tabletLandscape ? styles.tldr_tablet : styles.tldr)}>
        <h2>tl;dr:</h2>
        <div id={mobilePortrait ? styles.left_mobile : styles.left}>
          <img src="/Nitish_2022.jpg" className={mobilePortrait ? styles.headshot_mobile : (tabletPortrait || tabletLandscape ? styles.headshot_tablet : styles.headshot)} />
        </div>
        <div id={mobilePortrait ? styles.right_mobile : styles.right}>
          <h2 className={mobilePortrait ? styles.fact_mobile : styles.fact} id={styles.tldrHeading}>&nbsp;&nbsp;Nitish Vijai</h2>
          <p className={mobilePortrait ? styles.fact_mobile : styles.fact}>〽️ B.S.E. Computer Science and Data Science @ University of Michigan (Class of 2023)</p>
          <p className={mobilePortrait ? styles.fact_mobile : styles.fact}>🖥️ Incoming Associate Software Engineer @ Capital One</p>
          <p className={mobilePortrait ? styles.fact_mobile : styles.fact}>⚒️ Most likely seizing the day</p>
        </div>
      </div>
      {mobilePortrait ? <Footer projects="true" /> : <Footer />}

    </div>
  );
};


export default Home;
