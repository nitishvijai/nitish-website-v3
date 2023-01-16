import React from 'react';
import styles from './Writing.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import EssayLink from '../EssayLink/EssayLink';

const Writing = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector('.Writing_gradient__SRi6o, a');
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
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
    <div className={`${styles.gradient}`} onMouseMove={(e) => moveGradient(e)}>
      <Navbar selected='4' />
      <h1 id={styles.header}>Writing</h1>
      <p id={styles.subheader}>Check out some of my favorite articles I've written!</p>
      <div id={styles.essayList}>
        {essays.map((essay, i) => 
          <EssayLink name={essay.name} link={essay.link} posted={essay.posted}/>
        )}
      </div>
      <Footer projects='true' />
    </div>
  );
};

export default Writing;
