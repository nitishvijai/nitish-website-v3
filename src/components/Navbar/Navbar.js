import { React, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import MediaQuery from 'react-responsive';
import Cookies from 'universal-cookie';
import DarkModeToggle from 'react-dark-mode-toggle';

const Navbar = (props) => {
  const dropdown = useRef(null);
  const [mode, setMode] = [props.mode, props.toggle];
  const cookies = new Cookies();

  

  let openMenu = () => {
    if (dropdown.current.style.opacity == '0') {
      dropdown.current.style.opacity = '1';
    }
    else {
      dropdown.current.style.opacity = '0';
    }
  }

  let renderMode = () => {
    if (mode === 'dark') {
      return "DARK";
    }
    else {
      return "LIGHT";
    }
  }

  

  return (
    <div className={styles.Navbar}>
      <MediaQuery minWidth={1025}>
        <div className={mode === 'dark' ? styles.linksdark : styles.linkslight}>
          <p><Link to="/about" className={`${props.selected == 1 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>About</Link></p>
          <p><Link to="/projects" className={`${props.selected == 2 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Projects</Link></p>
          <p><Link to="/resume" className={`${props.selected == 3 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Resume</Link></p>
          <p id={styles.Nitish}><Link to="/" className={mode === 'dark' ? styles.normaldark : styles.normallight}>Nitish Vijai</Link></p>
          <p><Link to="/essays" className={`${props.selected == 4 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Writing</Link></p>
          <p><Link to="/travels" className={`${props.selected == 5 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Traveling</Link></p>
          <p><Link to="/contact" className={`${props.selected == 6 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Contact</Link></p>
        </div>
        <div className={styles.toggle}>
          <DarkModeToggle onChange={setMode} checked={mode === 'dark'} />
          <span className={styles.tooltipText}>{mode === 'dark' ? "Dark Mode" : "Light Mode"}</span>
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
