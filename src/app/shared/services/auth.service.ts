import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public data:any;

  private headersCab: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json'
  });

  constructor(private http: HttpClient) { }

  registerUser$(namex: string, emailx: string, passwordx: string) {
    return this.http.post("http://localhost:3000/users",
    {
      name: namex, email: emailx, password: passwordx
    }, { headers: this.headersCab} ).pipe(map(response => this.data = response));
  }

  loginUser$(emailt: string, passwordt: string) {
    return this.http.post("http://localhost:3000/login",
    {
      email: emailt, password: passwordt
    }, { headers: this.headersCab} ).pipe(map(response => this.data = response));
  }

}
