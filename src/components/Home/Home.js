import { React, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    if (window.innerHeight < 768 || mobilePortrait) {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', 'auto');
    }
    else if (window.innerHeight >= 768 && !mobilePortrait) {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', '100%');
    }

  }, []);

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
    <div className={mobilePortrait ? (mode === 'dark' ? 'darkgradient_mobile' : 'lightgradient_mobile') : (mode === 'dark' ? 'darkgradient' : 'lightgradient')} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar toggle={setMode} mode={mode} selected={0} />
      <div id={mobilePortrait ? styles.main_mobile : styles.main}>
        <p className={styles.message}>Hello and welcome to my site! You're in the right place if you're looking for everything I've done in the cool world of tech -- thanks for visiting!</p>
        <p className={styles.message}>To get started, please {mobilePortrait || mobileLandscape ? "tap" : "click"} on the {mobilePortrait || mobileLandscape || tabletPortrait ? "menu" : "links"} above to learn more about me.</p>
      </div>
      <div id={mobilePortrait ? styles.tldr_mobile : (mobileLandscape || tabletPortrait || tabletLandscape ? styles.tldr_tablet : styles.tldr)}>
        <h2>tl;dr:</h2>
        <div id={mobilePortrait ? styles.left_mobile : styles.left}>
          <img src="/Nitish_2023.JPG" className={mobilePortrait ? styles.headshot_mobile : (tabletPortrait || tabletLandscape ? styles.headshot_tablet : styles.headshot)} />
        </div>
        <div id={mobilePortrait ? styles.right_mobile : styles.right}>
          <h2 className={mobilePortrait ? styles.fact_mobile : styles.fact} id={styles.tldrHeading}>&nbsp;&nbsp;Nitish Vijai</h2>
          <p className={mobilePortrait ? styles.fact_mobile : styles.fact}>🖥️ Associate Software Engineer @ Capital One</p>
          <p className={mobilePortrait ? styles.fact_mobile : styles.fact}>〽️ B.S.E. CS + DS @ University of Michigan 2023 Grad</p>
          <p className={mobilePortrait ? styles.fact_mobile : styles.fact}>⚒️ Most likely seizing the day</p>
          <p className={mobilePortrait ? styles.fact_mobile : styles.fact}>📲 Let's talk? Connect with me <Link to="/contact" className="pgLink">here</Link></p>
        </div>
      </div>
      {mobilePortrait ? <Footer projects="true" /> : <Footer />}

    </div>
  );
};


export default Home;
