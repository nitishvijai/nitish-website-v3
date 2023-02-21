import { React, useRef, useEffect, useState } from 'react';
import styles from './Writing.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import EssayLink from '../EssayLink/EssayLink';
import useMediaQuery from '@mui/material/useMediaQuery';

const Writing = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:1024px)');
  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    gradient.current.style.setProperty('--x', x + 'px');
    gradient.current.style.setProperty('--y', y + 'px');
  }

  let essays = [
    {
      'name': '2020: Parting Thoughts',
      'link': 'placeholder',
      'posted': 'December 31st, 2020'
    },
    {
      'name': 'The Science of the Growth Mindset',
      'link': 'placeholder',
      'posted': 'August 18th, 2019'
    },
    {
      'name': 'Running Linux on Windows via the Windows Subsystem for Linux',
      'link': 'placeholder',
      'posted': 'July 14th, 2019'
    }
  ];

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='4' toggle={setMode} mode={mode} />
      <h1 id={styles.header}>Writing</h1>
      <p id={styles.subheader}>Check out some of my favorite articles I've written!</p>
      <div id={styles.essayList}>
        {essays.map((essay, i) => 
          <EssayLink name={essay.name} link={essay.link} posted={essay.posted}/>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
