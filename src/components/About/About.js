import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const About = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector('.gradient, a');
    let x = e.clientX - 0;
    let y = e.clientY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }

  return (
    <div className="About gradient" onMouseMove={(e) => moveGradient(e)}>
      <Navbar selected='1' />
      <h1 id={styles.header}>A little about me</h1>
      <div className={styles.parent}>
        <div className={styles.pic}>
          <img id={styles.nitish} src="/Nitish_Diwali.jpg" />
        </div>
        <div className={styles.aboutMe}>
          <p>Hi there! I'm Nitish and I'm a senior (in my last semester!) double majoring in computer science and data science at the University of Michigan. After graduating in April, I plan on joining Capital One as an Associate Software Engineer next August.</p>
          <p>My primary interests are in full-stack web and app development, database management, UI/UX design, and machine learning. As a firm believer in the growth mindset, I've always preferred to gain a breadth of experience in various technologies.</p>
          <p>With that out of the way, here are a few fun facts about me:</p>
          <ul>
            <li>I've been interested in tech for as long as I can remember -- I love catching up on the latest tech news and look forward to doing a PC build one day!</li>
            <li>I have a bad habit of going on random Wikipedia binges online...</li>
            <li>I'm an Eagle Scout from Ohio!</li>
            <li>I enjoy dancing to Indian/Tamil music and have frequently taken part in Michigan IASA's Annual Cultural Show -- check out my most recent performance here!</li>
            <li>I love traveling -- check out my Traveling page for more info!</li>
            <li>I got my motorcycle license last summer!</li>
            <li>I'm a fitness freak -- catch me in the NCRB every day either running or lifting weights!</li>
            <li>Finally, I'm also a semi-decent cook -- trying to learn new recipes but for now I guess I'm an expert at cooking eggs...</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
