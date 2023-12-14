import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => (
  <div className={`${props.projects ? styles.relFooter : styles.Footer}`}>
    Version 3.1 - Copyright © 2024 Nitish Vijai
  </div>
);

export default Footer;
