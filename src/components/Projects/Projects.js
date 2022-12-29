import React from 'react';
import Footer from '../Footer/Footer';
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

  const projects = [
    {
      'name': 'Website v3.0',
      'date': 'December 2022 - Present',
      'info': 'Redesigned my website (again!) after three years, except this time in React.',
      'stack': 'React, JavaScript',
      'pic': '',
      'github': 'https://github.com/nitishvijai/nitish-website-v3',
      'website': 'https://nitishv.dev/',
      'other-link': ''
    },
    {
      'name': 'NoteTotes',
      'date': 'September 2022 - December 2022',
      'info': 'NoteTotes helps you organize your writing, notes, and drafts in one place for a simpler experience. Final project for EECS 497 (Human-Centered Software Design Capstone).',
      'stack': 'React, JavaScript, Flask, AWS S3, SQLite DB',
      'pic': '',
      'github': 'N/A',
      'website': '',
      'other-link': ''
    }
  ]

  return (
    <div className="Projects gradient" onMouseMove={(e) => moveGradient(e)}>
      <Navbar selected='2' />
      <h1 id={styles.header}>Projects</h1>
      <div className={styles.projects}>
        {projects.map((project, i) => 
        <div className={styles.project}>
          <div className={styles.img}>
            {project.pic ? (<img src={'/' + projects.pic}/>) : (<img src="/unavailable.png" />)}
          </div>
          <div className={styles.info}>
            <h3>{project.name}</h3>
            <p>{project.date}</p>
            <p><strong>Info:</strong>{" " + project.info}</p>
            <p><strong>Stack:</strong>{" " + project.stack}</p>
            {project.github && <p>GitHub Link</p>}
          </div>
        </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Projects;
