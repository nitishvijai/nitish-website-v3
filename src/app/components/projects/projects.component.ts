import { Component, OnDestroy, OnInit } from '@angular/core';
import { Project } from 'src/app/project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  constructor() { }

  all_projects: Project[] = [
    { name: 'Eventempo', description: 'Built a UWP countdown timer app for Windows 10 devices. Some features include support for multiple event countdown timers, ease of use, event autosave, colorful customization, and notification alerts. Worked on this app during winter break of my freshman year in college, and released incremental updates to the app in the following months.', skills: 'C# .NET (backend), XAML (frontend), Visual Studio', startdate: 'December 2019', enddate: 'February 2020', type: 'personal', github: 'https://github.com/nitishvijai/Eventempo', otherlinks: [{title: 'Download on the Microsoft Store', link: 'https://www.microsoft.com/en-us/p/eventempo/9pcfmsx2g386?activetab=pivot:overviewtab'}] },
    { name: 'Store Scraper', description: 'Developed a web scraper in Python to scrape the top search result from three retailers and return the lowest price. Utilized BeautifulSoup to scrape the retailers and Selenium to emulate a real web browser and bypass dynamic JavaScript changes. In addition, created and published a tutorial on Enlight, an open-source educational platform that helps one learn to code by building cool projects.', skills: 'Python, BeautifulSoup, Selenium, VSCode', startdate: 'January 2020', enddate: 'April 2020', type: 'personal', github: 'https://github.com/nitishvijai/StoreScraper', otherlinks: [{title: 'View Enlight Tutorial', link: 'https://enlight.nyc/projects/build-a-web-scraper'}] },
    { name: 'Personal Website V2.0', description: 'Designed and developed a personal website to show my portfolio of skills and projects. In addition, this website was designed from scratch to replace my previous GitHub Pages site, breaking free from template design constraints and gaining a more thorough understanding of HTML, CSS, and JS.', skills: 'HTML5, CSS3, JavaScript, jQuery, VSCode', startdate: 'April 2020', enddate: 'June 2020', type: 'personal', github: 'https://github.com/nitishvijai/nitish-website-v2' },
    { name: 'SillyQL (EECS 281)', description: 'Independently developed a SQL simulator in C++ that emulates a relational database using basic commands (CREATE, INSERT, SELECT, DELETE, GENERATE INDEX, etc.). Implemented indexes using different data structures such as a hash table and a binary search tree for rapid indexing of queries. Developed for EECS 281 (Data Structures and Algorithms).', skills: 'C++, Visual Studio', startdate: 'October 2020', enddate: 'November 2020', type: 'school'},
    { name: 'Web Accessibility Evaluation Scraper (Michigan Data Science Team)', description: 'As part of a project team, developed a web scraper using Python and Selenium that scraped online web accessibility evaluation tools for a dataset of 17 U-M LSA department home sites. In addition, created various data visualizations using NumPy and Pandas to compare and rank these sites on their adherence to web accessibility standards set forth by the W3C.', skills: 'Python, Selenium, NumPy, Pandas, VSCode', startdate: 'February 2021', enddate: 'April 2021', type: 'extracurriculars', github: 'https://github.com/nitishvijai/web-accessibility-MDST', otherlinks: [{title: 'Project Writeup', link: 'https://www.mdst.club/projects/web-accessibility'}]},
    { name: 'Wiki Search Engine (EECS 485)', description: 'With two fellow students, developed a scalable search engine that retrieved Wikipedia articles based on given PageRank scores, utilizing Hadoop with Python (Flask). In addition, implemented a RESTful API index server and a Google-like user interface to display results.', skills: 'Python, Flask, Hadoop, HTML5, CSS3, VSCode', startdate: 'April 2021', enddate: 'April 2021', type: 'school'},
    { name: 'Technidote (Principal Internship Hackathon)', description: 'With six other interns, developed a web forum using Angular for employees to showcase the awesomeness of working with technology at Principal. The web forum connects to a Flask and MySQL RESTful backend for user logins, post creation, etc. The forum was also deployed on AWS. (Note: links and source code not available due to internal company policy).', skills: 'Angular 8, HTML, CSS, TypeScript, Flask (Python), MySQL, AWS Elastic Beanstalk, VSCode', startdate: 'June 21, 2021', enddate: 'June 24, 2021', type: 'other'}
  ];

  projects: Project[] = [];

  personal: boolean = true;
  school: boolean = true;
  ecs: boolean = true;
  other: boolean = true;

  ngOnInit() {
    (document.querySelector('#projects') as HTMLElement).style.borderBottom = "2px solid black";
    this.renderList();
    localStorage.setItem('page', '/projects');
  }

  ngOnDestroy() {
    (document.querySelector('#projects') as HTMLElement).style.borderBottom = "";
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
