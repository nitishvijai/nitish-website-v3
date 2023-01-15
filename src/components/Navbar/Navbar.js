import { React, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import MediaQuery from 'react-responsive';

const Navbar = (props) => {
  const dropdown = useRef(null);

  let openMenu = () => {
    if (dropdown.current.style.opacity == '0') {
      dropdown.current.style.opacity = '1';
    }
    else {
      dropdown.current.style.opacity = '0';
    }
  }

  return (
    <div className={styles.Navbar}>
      <MediaQuery minWidth={1025}>
        <div className={styles.links}>
          <p><Link to="/about" className={`${props.selected == 1 ? styles.selected : styles.normal}`}>About</Link></p>
          <p><Link to="/projects" className={`${props.selected == 2 ? styles.selected : styles.normal}`}>Projects</Link></p>
          <p><Link to="/resume" className={`${props.selected == 3 ? styles.selected : styles.normal}`}>Resume</Link></p>
          <p id={styles.Nitish}><Link to="/" className={styles.normal}>Nitish Vijai</Link></p>
          <p>Writing</p>
          <p>Traveling</p>
          <p>Contact</p>
        </div>
        <div className={styles.toggle}>
          <p>Light Mode</p>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024} >
        <div className={styles.start}>
          <button className={styles.dropbtn} onClick={openMenu}>Nitish Vijai</button>
        </div>
        <div id="dropdown" className={styles.dropdowncontent} ref={dropdown} style={{opacity: 0, visibility: 'visible'}}>
          <p>About</p>
          <p>Projects</p>
          <p>Resume</p>
          <p>Writing</p>
          <p>Traveling</p>
          <p>Contact</p>
          <p>Light/Dark Mode</p>
        </div>
      </MediaQuery>
    </div>
  );
};

export default Navbar;
