import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => (
  <div className={styles.Navbar}>
    <div className={styles.links}>
      <p>About</p>
      <p>Projects</p>
      <p>Resume</p>
      <p id={styles.Nitish}>Nitish Vijai</p>
      <p>Writing</p>
      <p>Traveling</p>
      <p>Contact</p>
    </div>
    <div className={styles.toggle}>
      <p>Light Mode</p>
    </div>
  </div>
);

export default Navbar;
