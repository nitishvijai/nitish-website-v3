import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Projects.module.css';

const Projects = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector('.gradient, a');
    let x = e.clientX - 0;
    let y = e.clientY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }

  return (
    <div className="Projects gradient" onMouseMove={(e) => moveGradient(e)}>
      <Navbar selected='2' />
      <h1 id={styles.header}>Projects</h1>
    </div>
  );
};

export default Projects;
