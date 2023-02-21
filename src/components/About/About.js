import { React, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './About.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import useMediaQuery from '@mui/material/useMediaQuery';

const About = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:1024px)');
  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  useEffect(() => {
    if (mobilePortrait) {
      gradient.current.style.setProperty('--x', '0px');
      gradient.current.style.setProperty('--y', '0px');
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', 'auto');
    } else {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', '100%');
    }
  }, [mobilePortrait]);

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    if (!mobilePortrait) {
      gradient.current.style.setProperty('--x', x + 'px');
      gradient.current.style.setProperty('--y', y + 'px');
    } else {
      gradient.current.style.setProperty('--x', '0px');
      gradient.current.style.setProperty('--y', '0px');
    }

    if (window.innerHeight <= 1000) {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', 'auto');
    }
    else {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', '100%');
    }
  }

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='1' toggle={setMode} mode={mode} />
      <h1 id={styles.header}>A little about me</h1>
      <div className={mobilePortrait ? styles.parent_mobile : styles.parent}>
        <div className={mobilePortrait ? styles.pic_mobile : styles.pic}>
          <img id={mobilePortrait ? styles.nitish_mobile : styles.nitish} src="/Nitish_Diwali.jpg" alt="Nitish celebrating Diwali at UMich, 2022"/>
        </div>
        <div className={mobilePortrait ? styles.aboutMe_mobile : styles.aboutMe}>
          <p className={mobilePortrait ? styles.paragraph_mobile : styles.paragraph}>Hi there! I'm Nitish and I'm a senior (in my last semester!) double majoring in computer science and data science at the <a className={styles.pgLink} target="_blank" href="https://umich.edu">University of Michigan</a>. After graduating in April, I plan on joining <a className={styles.pgLink} href="https://www.capitalone.com/" target="_blank">Capital One</a> as an Associate Software Engineer in August.</p>
          <p className={mobilePortrait ? styles.paragraph_mobile : styles.paragraph}>I enjoy the field of computer science because it allows me to utilize my problem-solving skills and love for technology to help people around me do more and have a better day.</p>
          <p className={mobilePortrait ? styles.paragraph_mobile : styles.paragraph}>My primary interests are in full-stack web and app development, database management, UI/UX design, and machine learning. As a firm believer in the growth mindset, I've always preferred to gain a breadth of experience in various technologies.</p>
          <p className={mobilePortrait ? styles.paragraph_mobile : styles.paragraph}>With that out of the way, here are a few fun facts about me:</p>
          <ul id={mobilePortrait ? styles.list_mobile : styles.list}>
            <li>🖥️ I've been interested in tech for as long as I can remember -- I love catching up on the latest tech news and look forward to doing a PC build one day</li>
            <li>🌐 I have a bad habit of going on random Wikipedia binges online...</li>
            <li>🦅 I'm an Eagle Scout from Ohio</li>
            <li>🎶🕺🏽 I enjoy listening and dancing to Indian/Tamil music and have frequently taken part in Michigan IASA's Annual Cultural Show -- check out my most recent performance <a className={styles.pgLink} target="_blank" href='https://www.youtube.com/watch?v=0jPigyHwCYg'>here</a></li>
            <li>✈️ I love traveling -- check out my Traveling <Link to="/travels" className={styles.pgLink}>page</Link> to hear more about my adventures</li>
            <li>🏍️ I got my motorcycle license last summer</li>
            <li>🏃🏽🏋🏽 I'm a fitness freak -- find me in the NCRB every day either running or lifting weights</li>
            <li>🍳🔥 Finally, I'm also a below-average cook -- trying to learn new recipes but for now I guess I'm an expert at cooking eggs...</li>
          </ul>
        </div>
      </div>
      <Footer />
      
    </div>
  );
};

export default About;
