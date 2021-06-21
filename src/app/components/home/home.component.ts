import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  darkMode = true;

  constructor() { }

  ngOnInit() {
  }

  changeColors(dark: boolean) {
    this.darkMode = dark;
  }

}
