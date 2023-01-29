import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import styles from './Resume.module.css';

const Resume = () => {
  let moveGradient = (e) => {
    let btn = document.querySelector('.Resume_gradient__FbS1Q, a');
    let x = e.pageX - 0;
    let y = e.pageY - 0;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
  }

  const workExperience = [
    {
      'company': 'Capital One',
      'title': 'Incoming Associate Software Engineer (TDP)',
      'location': 'McLean, VA',
      'timestamp': 'Starting August 2023',
      'info': []
    },
    {
      'company': 'Nationwide Insurance',
      'title': 'Data Solution Analyst Intern',
      'location': 'Remote (Columbus, OH)',
      'timestamp': 'May - August 2022',
      'info': ['Developed and analyzed a predictive model with Python, TensorFlow and Tableau to forecast the number of future JIRA defects in backlog for an internal application; attained ~70% accuracy',
               'Performed exploratory data analysis (EDA) on 10 years\' worth of data and created data models for documentation',
               'Won 4th place in the company-wide hackathon; built a React web app to recommend insurance policies for Nationwide customers using a Bayes classifier to classify amongst similar policyholders in a pool of a million households of data']
    },
    {
      'company': 'Principal Financial Group',
      'title': 'Software Engineer Intern',
      'location': 'Remote (Des Moines, IA)',
      'timestamp': 'May - August 2021',
      'info': ['Streamlined three guided actions in Principal’s Salesforce CRM by building numerous Aura components and Apex classes from the ground up, increasing usage of guided actions by almost 50% and reducing the average time spent to complete tasks from 9 minutes to 6 minutes',
               'Wrote unit tests in Apex for each component to hit 75% code coverage across the module',
               'Participated in an intern-wide Code Jam with six other interns and created a full-stack Angular web app forum that connected to a MySQL and Flask backend, allowing employees to share their experiences of working with technology at Principal',
               'Presented work to the RIS Business Coordinators and successfully deployed improvements to Production']
    },
    {
      'company': 'Niiti (Startup)',
      'title': 'Software Engineer Intern - Windows (UWP)',
      'location': 'Remote',
      'timestamp': 'September 2020 - January 2021',
      'info': ['Integrated 4 new features and bugfixes using C# .NET/XAML in the Windows version of Niiti’s flagship product, HuTouch, an app that allows one to share an Android activity/document and resume on Windows instantly',
               'Improved app compatibility by 25% by refactoring the C#-based WinForms backend to communicate with the Registry',
               'Shipped and deployed the HuTouch Beta app on the Microsoft Store to allow for beta testing']
    },
    {
      'company': 'Wright-Patterson Air Force Base',
      'title': 'Wright Scholar Research Intern',
      'location': 'Dayton, OH',
      'timestamp': 'June - August 2019',
      'info': ['Developed a Python script to automate benchmark analysis on remote Edge AI embedded devices (Jetson TX1/Jetson Nano)',
               'Gathered power and performance measurements via ActiveDSO (ActiveX control) over SSH connection to a Windows-based oscilloscope',
               'Presented my results and findings to senior directorate staff and fellow Wright Scholar interns']
    },
    {
      'company': 'MSC Technology India',
      'title': 'Web Developer Intern',
      'location': 'Chennai, India',
      'timestamp': 'June - August 2018',
      'info': ['Implemented a commodity/grievance system web application using HTML5, JavaScript, jQuery, and ASP .NET MVC (C#) to be deployed in MSC’s HRMS, OneVision, worldwide',
               'Developed SQL tables and queries in Visual Studio and Microsoft SQL Server to efficiently manage requests and user data for MSC’s HR department']
    }
  ];

  const education = [
    {
      'name': 'University of Michigan - Ann Arbor (College of Engineering)',
      'degree': 'B.S.E. in Computer Science and Data Science',
      'location': 'Ann Arbor, MI',
      'timestamp': 'Expected April 2023',
      'courses': 'EECS 281 (Data Structures and Algorithms), EECS 485 (Web Systems), EECS 445 (Machine Learning), EECS 481 (Software Engineering), EECS 484 (Database Management Systems), MATH 214 (Applied Linear Algebra), EECS 370 (Intro to Computer Organization), EECS 442 (Computer Vision), EECS 493 (User Interface Development), EECS 497 (Human-Centered Software Design)'
    }
  ];

  const awards = [
    {
      'name': 'Engineering Dean\'s Honor List',
      'timestamp': 'Fall 2021 - Fall 2022',
      'info': ['Achieved >3.5 GPA for a given term of 12 enrolled credits or greater']
    },
    {
      'name': '4th Place Winner - 2022 Nationwide Enterprise Hackathon',
      'timestamp': 'July 2022',
      'info': ['Developed a web app (in the span of 10 hours!) in React that connects to a machine learning classification model to recommend insurance policies for Nationwide customers based on clustered policyholders in their demographic',
               'Pitched the app to company executives and judges, advancing with each round']
    },
    {
      'name': 'University Honors',
      'timestamp': 'March 2022',
      'info': ['Achieved >3.5 GPA for a given term of 14 enrolled credits or greater (12 graded)']
    },
    {
      'name': 'University of Michigan Alumni Club of Dayton Scholarship',
      'timestamp': 'August 2019',
      'info': ['Recognized along with two other winners in the city of Dayton, OH',
               'Awarded based on merit and financial need']
    },
    {
      'name': 'National Merit Commended Scholar',
      'timestamp': 'September 2018',
      'info': ['Received score within top 1% of test-takers across the nation on the PSAT',
               'Honored along with several other high school seniors at a school board meeting']
    },
    {
      'name': 'Eagle Scout Award - Boy Scout Troop 516',
      'timestamp': 'April 2018',
      'info': ['Involved in numerous community service activities, including my own Eagle Scout Project, where I worked with my fellow Scouts and adult leaders to build three raised vegetable garden beds and a fence around them for South Community Behavioral Health Center in Moraine, Ohio']
    }
  ];

  const orgs = [
    {
      'name': 'Michigan Hackers',
      'title': 'Core Member (Interviewing and System Design)',
      'timestamp': 'September 2019 - Present',
      'info': []
    },
    {
      'name': 'Indian American Student Association',
      'title': 'Active Member and Fall Cultural Show Dancer',
      'timestamp': 'September 2019 - November 2022',
      'info': ['Helped a team add mulch to a local neighborhood’s playground as part of the Gandhi Day initiative',
               'Participate in a cultural dance performance in the annual fall show every year']
    },
    {
      'name': 'Michigan Data Science Team',
      'title': 'Member and Web Accessibility Data Scientist',
      'timestamp': 'February - April 2021',
      'info': ['Developed a web scraper using Python and Selenium to scrape online web accessibility evaluation tools for a dataset of 17 U-M LSA department home pages',
               'Created various data visualizations using NumPy and Pandas to compare and rank these sites using a custom scoring metric designated by our team',
               'Presented our findings and results to the entire Michigan Data Science Team']
    },
    {
      'name': 'University of Michigan Science Olympiad',
      'title': 'Invitational Event Volunteer and Assistant Event Supervisor',
      'timestamp': 'February 2020 - February 2021',
      'info': ['2021: Wrote a test for the Division B electricity event, "Circuit Lab" for the virtual competition in February 2021',
               '2020: Helped run the Division B (middle school) programming event, “Game On”, and graded tests',
               'Attended event supervisor training and helped set up invitational materials weeks before the competition']
    }
  ];

  const skills = [
    {
      'name': 'Programming & Markup Languages',
      'list': 'Python, C++, C# .NET, Java, HTML5/CSS3/JavaScript, jQuery, SQL'
    },
    {
      'name': 'Tech, Frameworks & Tools',
      'list': 'Windows/UWP, Linux, WSL, Git, Selenium, Flask, React, Firebase, NumPy, Tableau, Salesforce, AWS (S3)'
    },
    {
      'name': 'Spoken Languages',
      'list': 'English, Spanish, Tamil'
    }
  ]
  
  return (
  <div className={`${styles.gradient}`} onMouseMove={(e) => moveGradient(e)}>
    <Navbar selected='3' />
    <div className={styles.header}>
      <h1 style={{ display: 'inline-block' }}>Resume</h1>
      <a style={{ display: 'inline-block' }} target="_blank" href="/Nitish_Vijai_Resume_W23.pdf" className={styles.btngrad}>Print (PDF)</a>
    </div>
    <div id={styles.resume_container}>
        <div id={styles.col1}>
          <div id="experience">
            <h2 className={styles.heading}>Experience</h2>
            {workExperience.map((exp, i) => 
              <div>
                <h3 className={styles.title}>{exp.company}</h3>
                <h4>{exp.title} | {exp.location}</h4>
                <h4>{exp.timestamp}</h4>
                <ul>
                  {exp.info.map((bullet, i) =>
                    <li>{bullet}</li>
                  )}
                </ul>
              </div>)}
          </div>
          <div id={styles.awards}>
            <h2 className={styles.heading}>Awards</h2>
            {awards.map((award, i) => 
              <div>
                <h3 className={styles.title}>{award.name}</h3>
                <h4>{award.timestamp}</h4>
                <ul>
                  {award.info.map((bullet, i) =>
                    <li>{bullet}</li>
                  )}
                </ul>
              </div>)}
          </div>
        </div>
        <div id={styles.col2}>
          <div id="education">
            <h2 className={styles.heading}>Education</h2>
            {education.map((edu, i) => 
              <div>
                <h3 className={styles.title}>{edu.name}</h3>
                <h4>{edu.degree} | {edu.location}</h4>
                <h4>{edu.timestamp}</h4>
                {edu.courses && <div>
                  <p id={styles.courses}><em>Relevant Courses</em>: {edu.courses}</p>
                  <p id={styles.fulllist} className={styles.btngrad}>Full Course List</p>
                </div>}
                
              </div>)}
          </div>
          <div id={styles.orgs}>
            <h2 className={styles.heading}>Organizations</h2>
            {orgs.map((org, i) =>
              <div>
                <h3 className={styles.title}>{org.name}</h3>
                <h4>{org.title} | {org.timestamp}</h4>
                <ul>
                  {org.info.map((bullet, i) =>
                    <li>{bullet}</li>
                  )}
                </ul>
              </div>)}
          </div>
          <div id={styles.skills}>
            <h2 className={styles.heading}>Skills</h2>
            {skills.map((skill, i) =>
              <div>
                <h3 className={styles.title}>{skill.name}</h3>
                <p>{skill.list}</p>
              </div>)}
          </div>
        </div>
      </div>
      <Footer projects='true'/>
  </div>
);
}

export default Resume;
