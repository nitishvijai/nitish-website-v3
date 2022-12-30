import React from 'react';
import styles from './Footer.module.css';

const Footer = (props) => (
  <div className={`${props.projects ? styles.relFooter : styles.Footer}`}>
    Version 3.0 - Copyright © 2023 Nitish Vijai
  </div>
);

export default Footer;
