import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-essay-card',
  templateUrl: './essay-card.component.html',
  styleUrls: ['./essay-card.component.css']
})
export class EssayCardComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;
  @Input() date: string;

  constructor() { }

  ngOnInit() {
  }

}
