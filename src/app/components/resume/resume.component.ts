import { Component, OnDestroy, OnInit } from '@angular/core';
import { Experience } from 'src/app/experience';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit, OnDestroy {

  lightMode: boolean;
  id: NodeJS.Timer;

  workExperiences: Experience[] = [
    {
      name: 'Niiti (Startup)',
      position: 'Software Engineer Intern - Windows (UWP)',
      place: 'Remote',
      timestamp: 'September 2020 - January 2021',
      bullets: [
        'Developed new features and fixed bugs in the Windows version of HuTouch, allowing for fast resume of an Android activity on your Windows 10 PC',
        'Improved app compatibility by almost 25%',
        'Released the beta version of HuTouch on the Microsoft Store'
      ]
    },
    {
      name: 'Wright-Patterson Air Force Base',
      position: 'Wright Scholar Research Intern',
      place: 'Dayton, OH',
      timestamp: 'June - August 2019',
      bullets: [
        'Developed a Python script to automate benchmark analysis on remote Edge AI embedded devices (Jetson TX1/Jetson Nano)',
        'Gathered power and performance measurements via ActiveDSO (ActiveX control) over SSH connection to a Windows-based oscilloscope',
        'Presented my results and findings to senior directorate staff and fellow Wright Scholar interns'
      ]
    },
    {
      name: 'MSC Technology',
      position: 'Web Developer Intern',
      place: 'Chennai, India',
      timestamp: 'June - August 2018',
      bullets: [
        'Implemented a commodity/grievance system web application using HTML5, JavaScript, jQuery, and ASP .NET MVC (C#) to be deployed in MSC\'s HRMS, OneVision, worldwide',
        'Developed SQL tables and queries in Visual Studio and Microsoft SQL Server to efficiently manage requests and user data for MSC\'s HR department'
      ]
    }
  ];

  education: Experience = {
    name: 'University of Michigan, Ann Arbor (College of Engineering)',
    position: 'B.S.E. in Computer Science Engineering and Data Science',
    place: 'Ann Arbor, MI',
    timestamp: 'Expected April 2023',
    bullets: [],
    misc1: 'Relevant Courses: EECS 281 (Data Structures and Algorithms), EECS 485 (Web Systems), MATH 214 (Applied Linear Algebra), STATS 412 (Probability & Statistics), EECS 370 (Intro to Computer Organization), EECS 376 (Foundations of Computer Science)',
    misc2: 'To view my full list of courses, check out this page.'
  };

  organizations: Experience[] = [
    {
      name: 'Michigan Data Science Team',
      position: 'Active Member and Web Accessibility Data Scientist (2021)',
      place: '',
      timestamp: 'February 2021 - Present',
      links: [
        { name: 'Writeup', url: 'https://www.mdst.club/projects/web-accessibility' },
        { name: 'Repo', url: 'https://github.com/nitishvijai/web-accessibility-MDST' }
      ],
      bullets: [
        'Worked in a team to develop a web scraper using Python and Selenium to scrape online web accessibility evaluation tools for a dataset of 17 U-M LSA department home pages',
        'Created various data visualizations using NumPy and Pandas to compare and rank these sites using a custom scoring metric designated by our team',
        'Presented our findings and results to the entire Michigan Data Science Team'
      ]
    },
    {
      name: 'University of Michigan Science Olympiad',
      position: 'Invitational Event Volunteer and Assistant Event Supervisor (2021)',
      place: '',
      timestamp: 'February 2020 - Present',
      bullets: [
        '2021: Wrote a test for the Division B electricity event, "Circuit Lab" for the virtual competition in February 2021',
        '2020: Helped run the Division B (middle school) programming event, "Game On", and graded tests',
        'Attended event supervisor training and helped set up invitational materials weeks before the competition'
      ]
    },
    {
      name: 'Indian American Student Association',
      position: 'Active Member and Show Participant',
      place: '',
      timestamp: 'September 2019 - Present',
      bullets: [
        'Helped a team add mulch to a local neighborhood\'s playground as part of the Gandhi Day initiative',
        'Participate in a cultural dance performance in the annual fall show'
      ]
    }
  ];

  awards: Experience[] = [
    {
      name: 'University of Michigan Alumni Club of Dayton Scholarship',
      position: '',
      place: '',
      timestamp: 'August 2019',
      bullets: [
        'Recognized along with two other winners',
        'Awarded based on merit and financial need'
      ]
    },
    {
      name: 'National Merit Commended Scholar',
      position: '',
      place: '',
      timestamp: 'September 2018',
      bullets: [
        'Received score within top 1% of test-takers across the nation on the PSAT',
        'Honored along with several other high school seniors at a school board meeting'
      ]
    },
    {
      name: 'Eagle Scout Award - Boy Scout Troop 516',
      position: '',
      place: '',
      timestamp: 'April 2018',
      bullets: [
        'Involved in numerous community service activities, including my own Eagle Scout Project, where I worked with my fellow Scouts and adult leaders to build three raised vegetable garden beds and a fence around them for South Community Behavioral Health Center in Moraine, Ohio'
      ]
    }
  ];

  techSkills: Object[] = [
    {
      name: 'Programming Languages',
      content: 'C++, Python, Java, C#, HTML5, CSS3, JavaScript, TypeScript, jQuery, SQL'
    },
    {
      name: 'Technologies',
      content: 'Windows, Linux, WSL, VSCode, Visual Studio, Git, Angular, Selenium'
    },
    {
      name: 'Spoken Languages',
      content: 'English, Spanish, Tamil'
    }
  ];

  constructor() { }

  ngOnInit() {

    this.id = setInterval(() => {
      if (localStorage.getItem('mobile') === 'false') {
        if (localStorage.getItem('lightMode') === 'true') {
        
          (document.querySelector('#resumeTab') as HTMLElement).style.borderBottom = "2px solid black";
        } else {
            (document.querySelector('#resumeTab') as HTMLElement).style.borderBottom = "2px solid white";
        
        }
      }
      
    }, 10);

    sessionStorage.setItem('page', '/resume');
    
  }

  ngOnDestroy() {
    if (localStorage.getItem('mobile') === 'false') {
      (document.querySelector('#resumeTab') as HTMLElement).style.borderBottom = "";
    }

    if (this.id) {
      clearInterval(this.id);
    }
  }

}
