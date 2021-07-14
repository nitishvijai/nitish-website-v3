import { Component, OnInit, Input } from '@angular/core';
import { Experience } from 'src/app/experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  @Input() exp: Experience;

  constructor() { }

  ngOnInit() {
  }

}
