import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  name: String = '';
  email: String = '';
  message: String = '';
  submitForm: FormGroup;

  constructor() { 
    this.submitForm = new FormGroup({
      'fullname': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9.!#$%&\'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*')
      ]),
      'subject': new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }


}
