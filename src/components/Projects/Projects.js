import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './Projects.module.css';

const Projects = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector(".Projects_gradient__0P10l");

    let x = e.pageX - 0;
    let y = e.pageY - 0;

    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }

  const projects = [
    {
      'name': 'Website v3.0',
      'date': 'December 2022 - Present',
      'info': 'Redesigned my website (again!) after three years, except this time in React.',
      'stack': 'React, JavaScript',
      'pic': 'project_pics/thirdsite.png',
      'github': 'https://github.com/nitishvijai/nitish-website-v3',
      'website': 'https://nitishv.dev/',
      'other-link': ''
    },
    {
      'name': 'NoteTotes',
      'date': 'September 2022 - December 2022',
      'info': 'NoteTotes helps you organize your writing, notes, and drafts in one place for a simpler experience. Final project for EECS 497 (Human-Centered Software Design Capstone).',
      'stack': 'React, JavaScript, Flask, AWS S3, SQLite DB',
      'pic': 'project_pics/notetotes.png',
      'github': 'N/A',
      'website': '',
      'other-link': ''
    },
    {
      'name': 'Fitstagram',
      'date': 'November 2021 - December 2021',
      'info': 'As part of EECS 493 (UI Development), collaborated with two fellow students to develop Fitstagram: an Instagram-like web app to coordinate fitness groups and motivate friends to get healthier through sharing photos of food or workouts.',
      'stack': 'Vue.js, JavaScript, HTML5, CSS3, Firebase',
      'pic': 'project_pics/fitstagram.png',
      'github': 'N/A',
      'website': '',
      'other-link': ''
    },
    {
      'name': 'Scalable Wiki Search Engine',
      'date': 'April 2021',
      'info': 'Developed a scalable search engine to retrieve Wiki articles based on PageRank scores utilizing Hadoop and MapReduce. Wrote a RESTful API index server with Flask backend, and implemented a Google-like search interface to display results and call the API. Final project for EECS 485 (Web Systems).',
      'stack': 'Flask, HTML5, CSS3, SQLite DB, Hadoop',
      'pic': 'project_pics/google.png',
      'github': 'N/A',
      'website': '',
      'other-link': ''
    },
    {
      'name': 'SQL Simulator for Bash',
      'date': 'October 2020 - November 2020',
      'info': 'Built a SQL simulator to emulate a relational database that supports create, select, print, insert, delete, and join queries efficiently using C++ that runs on Bash. In addition, implemented indexes using hash maps and binary search trees for rapid indexing and joining of queries. Developed for EECS 281 (Data Structures and Algorithms).',
      'stack': 'C++, Bash (Linux)',
      'pic': 'project_pics/sqlsimulator.png',
      'github': 'N/A',
      'website': '',
      'other-link': ''
    },
    {
      'name': 'Wheel of Fortune Clone',
      'date': 'October 2020 - November 2020',
      'info': 'Developed a multiplayer Wheel of Fortune game clone with Java and the Swing GUI toolkit; project developed for EECS 285 (Practical Programming in Java).',
      'stack': 'Java, Swing GUI',
      'pic': 'project_pics/WOF.png',
      'github': 'N/A',
      'website': '',
      'other-link': ''
    },
    {
      'name': 'Website v2.0',
      'date': 'April 2020 - June 2020',
      'info': 'Designed and developed a personal website to show my portfolio of skills and projects. In addition, this website was designed from scratch to replace my previous GitHub Pages site, breaking free from template design constraints and gaining a more thorough understanding of HTML, CSS and JS.',
      'stack': 'HTML5, CSS3, JavaScript, jQuery',
      'pic': 'project_pics/website.png',
      'github': 'https://github.com/nitishvijai/nitish-website-v3',
      'website': 'https://nitishv.dev/',
      'other-link': ''
    },
    {
      'name': 'Store Scraper',
      'date': 'January 2020 - April 2020',
      'info': 'Developed a web scraper in Python to scrape the top search result from three retailers and return the lowest price. Utilized BeautifulSoup to scrape the retailers and used Selenium to emulate a real web browser and bypass dynamic JavaScript changes. In addition, created and published a tutorial on Enlight, an open-source educational platform that helps one learn to code by building cool projects.',
      'stack': 'Python, BeautifulSoup, Selenium',
      'pic': 'project_pics/WebScraperCover.png',
      'github': 'https://github.com/nitishvijai/StoreScraper',
      'website': 'https://enlight.nyc/projects/build-a-web-scraper',
      'other-link': ''
    },
    {
      'name': 'Eventempo',
      'date': 'December 2019 - February 2020',
      'info': 'Built a UWP countdown timer app for Windows 10 devices. Some features include support for multiple event countdown timers, ease of use, event autosave, colorful customization, and notification alerts. Worked on this app during winter break of my freshman year in college, and released incremental updates to the app in the following months.',
      'stack': 'C# .NET, XAML',
      'pic': 'project_pics/eventempo.png',
      'github': 'https://github.com/nitishvijai/Eventempo',
      'website': 'https://www.microsoft.com/en-us/p/eventempo/9pcfmsx2g386?activetab=pivot:overviewtab',
      'other-link': ''
    },
    {
      'name': 'Website v1.0',
      'date': 'June 2019',
      'info': 'The very first attempt. Started off this site as a GitHub Pages blog template using Bulma, and this project got me into web development which I explored further with versions 2 and 3.',
      'stack': 'Jekyll, GitHub Pages',
      'pic': 'project_pics/firstsite.png',
      'github': 'https://github.com/nitishvijai/nitish-website-v1',
      'website': '',
      'other-link': ''
    },
  ]

  return (
    <div className={`${styles.gradient}`} onMouseMove={(e) => moveGradient(e)}>
      <Navbar selected='2' />
      <h1 id={styles.header}>Projects</h1>
      <p id={styles.subheader}>Check out some of the coolest projects I've worked on over the past few years!</p>
      <div className={styles.projects}>
        {projects.map((project, i) => 
        <div className={styles.project}>
          <div className={styles.img}>
            {project.pic ? (<img className={styles.proj_pic} src={'/' + project.pic}/>) : (<img src="/unavailable.png" />)}
          </div>
          <div className={styles.info}>
            <h3>{project.name}</h3>
            <p className={styles.date}>{project.date}</p>
            <p><strong>Info:</strong>{" " + project.info}</p>
            <p><strong>Stack:</strong>{" " + project.stack}</p>
            {project.github !== 'N/A' && <a href={project.github} target="_blank" className={styles.btngrad}>GitHub Repo</a>}
            {project.github === 'N/A' && <Link to="/contact" className={styles.classProj}>Contact Me for code</Link>}
          </div>
        </div>
        )}
      </div>
      <Footer projects='true' />
    </div>
  );
};

export default Projects;
