import { React, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import MediaQuery from 'react-responsive';
import Cookies from 'universal-cookie';

const Navbar = (props) => {
  const dropdown = useRef(null);
  const [mode, setMode] = useState();
  const [auto, setAuto] = useState(true);
  const cookies = new Cookies();

  useEffect(() => {
    if (cookies.get("color") === undefined) {
      cookies.set("color", "system");
    }
    else if (cookies.get("color") === "system") {
      setAuto(true);
    } else {
      setAuto(false);
      if (cookies.get("color") === "light") {
        setMode('light');
        props.setLight();
      } else {
        setMode('dark');
        props.setDark();
      }
    }


    if (auto) {
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log("Dark Mode");
        setMode('dark');
        props.setDark();
      }
      else {
        setMode('light');
        console.log("Light Mode");
        props.setLight();
      }
  
      window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', event => {
          const colorScheme = event.matches ? "dark" : "light";
          console.log(colorScheme); // "dark" or "light"
          setMode(colorScheme);
        });
    }
    
  });

  let openMenu = () => {
    if (dropdown.current.style.opacity == '0') {
      dropdown.current.style.opacity = '1';
    }
    else {
      dropdown.current.style.opacity = '0';
    }
  }

  let toggleColorMode = () => {
    props.toggleColorMode();

    if (mode === 'dark') {
      setMode('light');
      cookies.set("color", "light");
    }
    else {
      setMode('dark');
      cookies.set("color", "dark");
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
          <a className={styles.toggleSelect} onClick={toggleColorMode}>Light/Dark</a>
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
