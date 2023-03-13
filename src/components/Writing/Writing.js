import { React, useRef, useEffect, useState } from 'react';
import styles from './Writing.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import EssayLink from '../EssayLink/EssayLink';
import useMediaQuery from '@mui/material/useMediaQuery';

const Writing = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:600px) and (orientation:portrait)');
  const mobileLandscape = useMediaQuery('(min-width:600px) and (max-width:1023px) and (orientation:landscape)');

  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  useEffect(() => {
    document.title = 'Writing - Nitish Vijai';
  }, []);

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;

    if (!mobilePortrait && !mobileLandscape) {
      gradient.current.style.setProperty('--x', x + 'px');
      gradient.current.style.setProperty('--y', y + 'px');
    }
    else {
      gradient.current.style.setProperty('--x', '0px');
      gradient.current.style.setProperty('--y', '0px');
    }
  }

  let essays = [
    {
      'name': '2020: Parting Thoughts',
      'link': '/blog-posts/2020-parting-thoughts',
      'highlight': 'One of the worst (yet most eye-opening) years of my life.',
      'posted': 'December 31st, 2020'
    },
    {
      'name': 'The Science of the Growth Mindset',
      'link': '/blog-posts/growth-mindset',
      'highlight': 'An analysis of its applications in engineering, education, and life',
      'posted': 'August 18th, 2019'
    },
    {
      'name': 'Running Linux on Windows via the Windows Subsystem for Linux',
      'link': '/blog-posts/wsl',
      'highlight': 'Attaining the full power of UNIX on the Windows platform',
      'posted': 'July 14th, 2019'
    },
    {
      'name': 'First Post',
      'link': '/blog-posts/first-post',
      'highlight': 'My first post, more to follow...',
      'posted': 'June 9th, 2019'
    }
  ];

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='4' toggle={setMode} mode={mode} />
      <h1 id={styles.header}>Writing</h1>
      <p id={styles.subheader}>Check out some of my favorite articles I've written!</p>
      <div id={mobilePortrait ? styles.essayList_mobile : (mobileLandscape ? styles.essayList_landscape : styles.essayList)}>
        {essays.map((essay, i) => 
          <EssayLink name={essay.name} link={essay.link} posted={essay.posted} highlight={essay.highlight} toggle={setMode} color={mode}/>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Writing;
