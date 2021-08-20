import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  projects: Project[] = [];

  personal: boolean = true;
  school: boolean = true;
  ecs: boolean = true;
  other: boolean = true;
  
  lightMode: boolean;
  id: NodeJS.Timer;

  constructor(private bpObserver: BreakpointObserver) { 
    if (localStorage.getItem('lightMode') === 'true') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }

  all_projects: Project[] = [
    { name: 'Eventempo', description: 'Built a UWP countdown timer app for Windows 10 devices. Some features include support for multiple event countdown timers, ease of use, event autosave, colorful customization, and notification alerts. Worked on this app during winter break of my freshman year in college, and released incremental updates to the app in the following months.', skills: 'C# .NET (backend), XAML (frontend), Visual Studio', startdate: 'December 2019', enddate: 'February 2020', type: 'personal', github: 'https://github.com/nitishvijai/Eventempo', otherlinks: [{title: 'Download on the Microsoft Store', link: 'https://www.microsoft.com/en-us/p/eventempo/9pcfmsx2g386?activetab=pivot:overviewtab'}], image: '../../../assets/img/eventempo.png' },
    { name: 'Store Scraper', description: 'Developed a web scraper in Python to scrape the top search result from three retailers and return the lowest price. Utilized BeautifulSoup to scrape the retailers and Selenium to emulate a real web browser and bypass dynamic JavaScript changes. In addition, created and published a tutorial on Enlight, an open-source educational platform that helps one learn to code by building cool projects.', skills: 'Python, BeautifulSoup, Selenium, VSCode', startdate: 'January 2020', enddate: 'April 2020', type: 'personal', github: 'https://github.com/nitishvijai/StoreScraper', otherlinks: [{title: 'View Enlight Tutorial', link: 'https://enlight.nyc/projects/build-a-web-scraper'}], image: '../../../assets/img/WebScraperCover.png' },
    { name: 'Personal Website V2.0', description: 'Designed and developed a personal website to show my portfolio of skills and projects. In addition, this website was designed from scratch to replace my previous GitHub Pages site, breaking free from template design constraints and gaining a more thorough understanding of HTML, CSS, and JS.', skills: 'HTML5, CSS3, JavaScript, jQuery, VSCode', startdate: 'April 2020', enddate: 'June 2020', type: 'personal', github: 'https://github.com/nitishvijai/nitish-website-v2', image: '../../../assets/img/website.png' },
    { name: 'SillyQL (EECS 281)', description: 'Independently developed a SQL simulator in C++ that emulates a relational database using basic commands (CREATE, INSERT, SELECT, DELETE, GENERATE INDEX, etc.). Implemented indexes using different data structures such as a hash table and a binary search tree for rapid indexing of queries. Developed for EECS 281 (Data Structures and Algorithms).', skills: 'C++, Visual Studio', startdate: 'October 2020', enddate: 'November 2020', type: 'school', image: '../../../assets/img/unavailable.png'},
    { name: 'Web Accessibility Evaluation Scraper (Michigan Data Science Team)', description: 'As part of a project team, developed a web scraper using Python and Selenium that scraped online web accessibility evaluation tools for a dataset of 17 U-M LSA department home sites. In addition, created various data visualizations using NumPy and Pandas to compare and rank these sites on their adherence to web accessibility standards set forth by the W3C.', skills: 'Python, Selenium, NumPy, Pandas, VSCode', startdate: 'February 2021', enddate: 'April 2021', type: 'extracurriculars', github: 'https://github.com/nitishvijai/web-accessibility-MDST', otherlinks: [{title: 'Project Writeup', link: 'https://www.mdst.club/projects/web-accessibility'}], image: '../../../assets/img/unavailable.png'},
    { name: 'Wiki Search Engine (EECS 485)', description: 'With two fellow students, developed a scalable search engine that retrieved Wikipedia articles based on given PageRank scores, utilizing Hadoop with Python (Flask). In addition, implemented a RESTful API index server and a Google-like user interface to display results.', skills: 'Python, Flask, Hadoop, HTML5, CSS3, VSCode', startdate: 'April 2021', enddate: 'April 2021', type: 'school', image: '../../../assets/img/unavailable.png'},
    { name: 'Technidote (Principal Internship Hackathon)', description: 'With six other interns, developed a web forum using Angular for employees to showcase the awesomeness of working with technology at Principal. The web forum connects to a Flask and MySQL RESTful backend for user logins, post creation, etc. The forum was also deployed on AWS. (Note: links and source code not available due to internal company policy).', skills: 'Angular 8, HTML, CSS, TypeScript, Flask (Python), MySQL, AWS Elastic Beanstalk, VSCode', startdate: 'June 21, 2021', enddate: 'June 24, 2021', type: 'other', image: '../../../assets/img/unavailable.png'}
  ];

  ngOnInit() {

    this.id = setInterval(() => {
      if (localStorage.getItem('mobile') === 'false') {
        if (localStorage.getItem('lightMode') === 'true') {
          (document.querySelector('#projectsTab') as HTMLElement).style.borderBottom = "2px solid black";
        } else {
          (document.querySelector('#projectsTab') as HTMLElement).style.borderBottom = "2px solid white";
        }
      }

      if (localStorage.getItem('lightMode') === 'true') {
        this.lightMode = true;
      } else {
        this.lightMode = false;
      }
    }, 50);

    
    
    this.renderList();

    this.bpObserver.observe(['(max-width: 801px)'])
      .subscribe((state: BreakpointState) => {
        var curr = this;
        for (let i = 0; i < 1; ++i) {
          setTimeout(function() {
            curr.switchForm();
          }, 500);
        }
      });
    
    sessionStorage.setItem('page', '/projects');
  }

  ngOnDestroy() {
    if (localStorage.getItem('mobile') === 'false') {
      (document.querySelector('#projectsTab') as HTMLElement).style.borderBottom = "";
    }

    if (this.id) {
      clearInterval(this.id);
    }
  }

  switchForm() {
    if (localStorage.getItem('mobile') === 'true') {
      (document.querySelector('p.text') as HTMLElement).style.marginLeft = "10%";
      (document.querySelector('p.text') as HTMLElement).style.marginRight = "10%";

      (document.querySelector('table') as HTMLElement).style.visibility = "collapse";

      const images = document.querySelectorAll('img.image');
      images.forEach((image) => {
        (image as HTMLElement).style.height = "auto";
        (image as HTMLElement).style.width = "100%";
      });

      const titles = document.querySelectorAll('h2');
      titles.forEach((title) => {
        (title as HTMLElement).style.lineHeight = "50px";
        (title as HTMLElement).style.textAlign = "center";
      });

      const types = document.querySelectorAll('p#type');
      types.forEach((type) => {
        (type as HTMLElement).style.textAlign = "center";
        (type as HTMLElement).style.fontSize = "14px";
      });

      const descs = document.querySelectorAll('p#desc');
      descs.forEach((desc) => {
        (desc as HTMLElement).style.textAlign = "center";
        (desc as HTMLElement).style.fontSize = "12px";
      });

      const tools = document.querySelectorAll('p#tools');
      tools.forEach((tool) => {
        (tool as HTMLElement).style.textAlign = "center";
        (tool as HTMLElement).style.fontSize = "12px";
      });

      const links = document.querySelectorAll('p#links');
      links.forEach((link) => {
        (link as HTMLElement).style.textAlign = "center";
        (link as HTMLElement).style.fontSize = "14px";
      });
    }
    else {
      (document.querySelector('p.text') as HTMLElement).style.marginLeft = "auto";
      (document.querySelector('p.text') as HTMLElement).style.marginRight = "auto";

      (document.querySelector('table') as HTMLElement).style.visibility = "visible";


      const images = document.querySelectorAll('img.image');
      images.forEach((image) => {
        (image as HTMLElement).style.height = "230px";
        (image as HTMLElement).style.width = "380px";
      });

      const titles = document.querySelectorAll('h2');
      titles.forEach((title) => {
        (title as HTMLElement).style.lineHeight = "normal";
        (title as HTMLElement).style.textAlign = "left";
      });

      const types = document.querySelectorAll('p#type');
      types.forEach((type) => {
        (type as HTMLElement).style.textAlign = "left";
        (type as HTMLElement).style.fontSize = "16px";
      });

      const descs = document.querySelectorAll('p#desc');
      descs.forEach((desc) => {
        (desc as HTMLElement).style.textAlign = "left";
        (desc as HTMLElement).style.fontSize = "16px";
      });

      const tools = document.querySelectorAll('p#tools');
      tools.forEach((tool) => {
        (tool as HTMLElement).style.textAlign = "left";
        (tool as HTMLElement).style.fontSize = "16px";
      });

      const links = document.querySelectorAll('p#links');
      links.forEach((link) => {
        (link as HTMLElement).style.textAlign = "left";
        (link as HTMLElement).style.fontSize = "16px";
      });
    }
  }

  toggleFilter(projType: string) {
    if (projType == 'personal') {
      this.personal = !this.personal;
    }
    else if (projType == 'school') {
      this.school = !this.school;
    }
    else if (projType == 'extracurriculars') {
      this.ecs = !this.ecs;
    }
    else {
      this.other = !this.other;
    }

    this.renderList();
  }

  clearAllFilters() {
    this.personal = false;
    this.school = false;
    this.ecs = false;
    this.other = false;
    this.renderList();
  }

  renderList() {
    this.projects = [];
    this.all_projects.forEach((element) => {
      if ((element.type == 'personal' && this.personal) ||
          (element.type == 'school' && this.school) ||
          (element.type == 'extracurriculars' && this.ecs ) ||
          (element.type == 'other' && this.other)) {
        this.projects.push(element);
      }
    });
  }
}
