import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', Validators.required]
    });


   }

   get xxemail() { return this.loginForm.get('email'); }
   get xxpassword() { return this.loginForm.get('password'); }

   isError: boolean = false;
   onSubmit() {
    console.log(this.loginForm.value);

    return this.authService.loginUser$(this.xxemail.value, this.xxpassword.value).subscribe(
      data => {
        console.log(data);
        const token = data.accessToken;
        this.authService.setToken(token);
        this.router.navigate(['/home']);
      }, error => this.onIsError(error)
    );
   }

  ngOnInit() {
  }

  onIsError(error): void {
    console.log('Hay error');
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }

}
