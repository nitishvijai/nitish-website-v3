import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  lightMode: boolean;
  id: NodeJS.Timer;

  constructor() { 
    if (localStorage.getItem('lightMode') === 'true') {
      this.lightMode = true;
    } else {
      this.lightMode = false;
    }
  }

  ngOnInit() {
    sessionStorage.setItem('page', '/');
    this.id = setInterval(() => {
      if (localStorage.getItem('lightMode') === 'true') {
        this.lightMode = true;
      } else {
        this.lightMode = false;
      }
    }, 100);
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
}
