import React from 'react';
import styles from './Writing.module.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Writing = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector('.gradient, a');
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }

  return (
    <div className="Writing gradient" onMouseMove={(e) => moveGradient(e)}>
      <Navbar selected='4' />
      <h1 id={styles.header}>Writing</h1>
      <p id={styles.subheader}>Check out some of my favorite articles I've written!</p>
      <Footer />
    </div>
  );
};

export default Writing;
