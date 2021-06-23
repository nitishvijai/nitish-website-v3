import { Component, OnInit } from '@angular/core';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  darkMode: boolean;

  constructor(private colorService: ColorService) { }

  ngOnInit() {
    this.colorService.getColorMode().subscribe(color => {
      this.darkMode = color;
    });
  }

  changeColors(dark: boolean) {
    console.log('color: ' + dark);
    this.darkMode = dark;
  }

}
