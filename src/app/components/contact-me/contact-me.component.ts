import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder, private http: HttpClient) { 
  }

  ngOnInit() {
    this.submitForm = this.fb.group({
      fullName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  get submitFormControl() {
    return this.submitForm.controls;
  }

  onSubmit() {
    console.log('Sending email to Nitish...');

    if (this.submitForm.valid) {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.http.post('https://formspree.io/f/meqpekvo', {
        fullname: this.submitFormControl.fullName.value,
        mailadd: this.submitFormControl.emailAddress.value,
        subject: this.submitFormControl.message.value
      }, {headers: headers})
      .subscribe(res => { console.log(res); alert('Thanks for your message. I will get back to you as soon as I can. - Nitish') });
    }
  }


}
