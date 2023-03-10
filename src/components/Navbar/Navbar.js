import { React, useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import MediaQuery from 'react-responsive';
import DarkModeToggle from 'react-dark-mode-toggle';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar = (props) => {
  const mobilePortrait = useMediaQuery('(max-width:600px) and (orientation:portrait)');
  const mobileLandscape = useMediaQuery('(min-width:600px) and (max-width:1023px) and (orientation:landscape)');

  const dropdown = useRef(null);
  const button = useRef(null);
  const [mode, setMode] = [props.mode, props.toggle];
  const [opened, setOpened] = useState(false);
  const [closed, setClosed] = useState(true);

  useEffect(() => {
    function clickOut(event) {
      if (dropdown.current && !dropdown.current.contains(event.target) && !button.current.contains(event.target)) {
        setOpened(false);
        dropdown.current.style.opacity = '0';
        dropdown.current.style.zIndex = '105';
      }
    }

    document.addEventListener("touchstart", clickOut);
    return () => {
      document.removeEventListener("touchstart", clickOut);
    };
  }, [dropdown]);

  let openMenu = () => {
    if (opened) {
      setOpened(false);
      dropdown.current.style.opacity = '0';
      dropdown.current.style.zIndex = '105';
    }
    else {
      setOpened(true);
      dropdown.current.style.opacity = '1';
      dropdown.current.style.zIndex = '125';
    }
  }

  return (
    <div className={mobilePortrait || mobileLandscape ? styles.Navbar_mobile : styles.Navbar}>
      <MediaQuery minWidth={1025}>
        <div className={mode === 'dark' ? styles.linksdark : styles.linkslight}>
          <p className={styles.link}><Link to="/about" className={`${props.selected == 1 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>About</Link></p>
          <p className={styles.link}><Link to="/projects" className={`${props.selected == 2 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Projects</Link></p>
          <p className={styles.link}><Link to="/resume" className={`${props.selected == 3 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Resume</Link></p>
          <p id={styles.Nitish}>
            <Link to="/" className={`${props.selected == 0 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>
              <img id={styles.icon} height="32px" src={props.selected === 0 ? "logo_selected.png" : (mode === 'dark' ? "logo_normal.png" : "logo_light_normal.png")}/>
              Nitish Vijai
            </Link>
          </p>
          <p className={styles.link}><Link to="/essays" className={`${props.selected == 4 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Writing</Link></p>
          <p className={styles.link}><Link to="/travels" className={`${props.selected == 5 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Traveling</Link></p>
          <p className={styles.link}><Link to="/contact" className={`${props.selected == 6 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Contact</Link></p>
        </div>
        <div className={styles.toggle}>
          <DarkModeToggle onChange={setMode} checked={mode === 'dark'} />
          <span className={styles.tooltipText}>{mode === 'dark' ? "Dark Mode" : "Light Mode"}</span>
        </div>
      </MediaQuery>
      <MediaQuery maxWidth={1024} >
        <div className={styles.start}>
          <button className={styles.dropbtn} onClick={openMenu} ref={button}>Nitish Vijai</button>
        </div>
        <div id="dropdown" className={mode === 'dark' ? styles.dropdowncontent : styles.dropdowncontent_light} ref={dropdown} style={{opacity: 0, visibility: 'visible'}}>
          {opened && <div id="links">
            <p><Link to="/" className={`${props.selected == 0 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Home</Link></p>
            <p><Link to="/about" className={`${props.selected == 1 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>About</Link></p>
            <p><Link to="/projects" className={`${props.selected == 2 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Projects</Link></p>
            <p><Link to="/resume" className={`${props.selected == 3 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Resume</Link></p>
            <p><Link to="/essays" className={`${props.selected == 4 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Writing</Link></p>
            <p><Link to="/travels" className={`${props.selected == 5 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Traveling</Link></p>
            <p><Link to="/contact" className={`${props.selected == 6 ? styles.selected : (mode === 'dark' ? styles.normaldark : styles.normallight)}`}>Contact</Link></p>
            <div className={styles.toggle_mobile}>
              <span className={styles.label_left}>Light</span>
              <DarkModeToggle onChange={setMode} checked={mode === 'dark'} />
              <span className={styles.label_right}>Dark</span>
            </div>
          </div>}
          
        </div>
      </MediaQuery>
    </div>
  );
};

export default Navbar;
