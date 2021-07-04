import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.closeMenu();
  }

  slideOutMenu() {
    (document.querySelector('.sideNav') as HTMLElement).style.width = "300px";
  }

  closeMenu() {
    (document.querySelector('.sideNav') as HTMLElement).style.width = "0px";
  }

}
