import { React, useRef, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import styles from './Contact.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';

const Contact = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:600px) and (orientation:portrait)');
  const mobileLandscape = useMediaQuery('(min-width:600px) and (max-width:1023px) and (orientation:landscape)');

  const gradient = useRef(null);
  const [mode, setMode] = [props.color, props.toggle];

  // Form state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDesc] = useState("");

  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => {
    document.title = "Contact - Nitish Vijai";
    if (window.innerHeight <= 1000) {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', 'auto');
    }
    else {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', '100%');
    }
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

    if (window.innerHeight <= 1024) {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', 'auto');
    }
    else {
      gradient.current.style.setProperty('overflow-y', 'hidden');
      gradient.current.style.setProperty('height', '100%');
    }
  }

  let handleUserInput = (e, field) => {
    if (field === "name") {
      setName(e.target.value);
    }
    else if (field === "email") {
      setEmail(e.target.value);
      if (e.target.value != "") {
        setEmailValid(email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/));
      }
    }
    else {
      setDesc(e.target.value);
    }
  }

  let submitFields = (e) => {
    e.preventDefault();
    alert("Form successfully submitted - placeholder");
    resetFields();
  }

  let resetFields = () => {
    setName("");
    setEmail("");
    setDesc("");
    setEmailValid(true);
  }

  return (
    <div className={mobilePortrait ? (mode === 'dark' ? styles.darkgradient_mobile : styles.lightgradient_mobile) : (mode === 'dark' ? styles.darkgradient : styles.lightgradient)} onMouseMove={(e) => moveGradient(e)} ref={gradient}>
      <Navbar selected='6' toggle={setMode} mode={mode} />
      <h1 id={styles.header}>Contact me</h1>
      <p id={styles.subheader}>Check me out on the other side of the web below!</p>
      <div id={styles.methods}>
        <a href="https://www.linkedin.com/in/nitish-vj" className={styles.btngrad} id={styles.linkedin} target="_blank">LinkedIn</a>
        <a href="mailto:nitishv@umich.edu" className={styles.btngrad} id={styles.email}>Email</a>
        <a href="https://www.github.com/nitishvijai" className={styles.btngrad} id={styles.github} target="_blank">GitHub</a>
      </div>
      <p className={styles.message}>Let's talk -- submit the form below and I will get back to you ASAP:</p>
      <div id={styles.contactme}>
        <form id={styles.contactForm} method="POST" action="https://formspree.io/f/meqpekvo" onSubmit={(event) => submitFields(event)}>
          <input type="text" id={mobilePortrait || mobileLandscape ? styles.fullName_mobile : styles.fullName} name="fullname" placeholder="Name" value={name} onChange={(event) => handleUserInput(event, "name")} />
          <br />
          <input type="text" id={mobilePortrait || mobileLandscape ? styles.emailadd_mobile : styles.emailadd} name="mailadd" placeholder="E-mail address" value={email} onChange={(event) => handleUserInput(event, "email")} />
          <br />
          <textarea id={mobilePortrait || mobileLandscape ? styles.subject_mobile : styles.subject} name="subject"
              placeholder="What's up?" value={description} onChange={(event) => handleUserInput(event, "desc")}></textarea>
          <br /><br />
          <input id={styles.submitButton} className={styles.btngrad} name="submit" type="submit" value="Submit" disabled={!(name && email && description)}/>
          <input id={styles.resetButton} className={styles.resetBtn} type="reset" value="Reset" onClick={resetFields} />
        </form>
        <div id={styles.errors}>
          <p className={(name && email && description) && styles.hide_error}>All fields are required</p>
          {!emailValid && <p>Email address is invalid</p>}
        </div>
      </div>
      <Footer projects='true'/>
    </div>
  );
};

export default Contact;
