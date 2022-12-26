import {React, setState} from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = (props) => {

  return (
    <div className={styles.Navbar}>
      <div className={styles.links}>
        <p><Link to="/about" className={`${props.selected == 1 ? styles.selected : styles.normal}`}>About</Link></p>
        <p>Projects</p>
        <p>Resume</p>
        <p id={styles.Nitish}><Link to="/" className={styles.normal}>Nitish Vijai</Link></p>
        <p>Writing</p>
        <p>Traveling</p>
        <p>Contact</p>
      </div>
      <div className={styles.toggle}>
        <p>Light Mode</p>
      </div>
    </div>
  );
};

export default Navbar;
