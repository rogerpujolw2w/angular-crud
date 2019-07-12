import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogged = false;

  constructor(private authService: AuthService, private router: Router) { }

  onlogout() {
    this.authService.logoutUser$();
    this.isLogged = false;
    //this.router.navigate (['/home']);
  }

  ngOnInit() {
//    this.isLogged = this.authService.getLogged();
    this.onCheckUser();
  }

  onCheckUser(): void {
    this.authService.xxisLogged.subscribe(value => this.isLogged = value);
  }

}
