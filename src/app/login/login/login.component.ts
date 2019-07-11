import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;


  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });


   }

   get xxemail() { return this.loginForm.get('email'); }
   get xxpassword() { return this.loginForm.get('password'); }

   onSubmit() {
    console.log(this.loginForm.value);
   }

  ngOnInit() {
  }



}
