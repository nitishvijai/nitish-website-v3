import { React, useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Contact.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Contact = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:1024px)');
  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  let moveGradient = (e) => {
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    gradient.current.style.setProperty('--x', x + 'px');
    gradient.current.style.setProperty('--y', y + 'px');

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
      <Navbar selected='6' toggle={setMode} mode={mode} />
      <h1 id={styles.header}>Contact me</h1>
      <p id={styles.subheader}>Check me out on the other side of the web below!</p>
      <div id={styles.methods}>
        <p className={styles.btngrad} id={styles.linkedin}>LinkedIn</p>
        <p className={styles.btngrad} id={styles.email}>Email</p>
        <p className={styles.btngrad} id={styles.github}>GitHub</p>
      </div>
      <p className={styles.message}>Let's talk -- submit the form below and I will get back to you ASAP:</p>
      <div id={styles.contactme}>
        <form id={styles.contactForm}>
          <input type="text" id={styles.fullName} name="fullname" placeholder="Name" />
          <br />
          <input type="text" id={styles.emailadd} name="mailadd" placeholder="E-mail address" />
          <br />
          <textarea id={styles.subject} name="subject"
              placeholder="What's up?"></textarea>
          <br /><br />
          <input id="submitButton" className={styles.formBtns} name="submit" type="submit" value="Submit" />
          <input id="resetButton" className={styles.formBtns} type="reset" value="Reset" />
        </form>
      </div>
      <Footer projects='true'/>
    </div>
  );
};

export default Contact;
