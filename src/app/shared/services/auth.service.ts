import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //public data:any;
  public xxisLogged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.getLogged()); // Es un observable capliente


  private headersCab: HttpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json'
  });

  constructor(private http: HttpClient) { }

  registerUser$(namex: string, emailx: string, passwordx: string) {
    return this.http.post("http://localhost:3000/users",
    {
      name: namex, email: emailx, password: passwordx
    }, { headers: this.headersCab} ).pipe(map(response => {
      return response;
    }));
  }

  loginUser$(emailt: string, passwordt: string): Observable<any> {
    return this.http.post("http://localhost:3000/login",
    {
      email: emailt, password: passwordt
    }, { headers: this.headersCab} ).pipe(tap(response => {
      localStorage.setItem('isLogged', 'true');
      this.xxisLogged.next(true); // Iniciamos observable , emitimos
      //location.reload();
      return response;
    }));
//  }, { headers: this.headersCab} ).pipe(map(response => this.data = response));
}

  setToken(token): void {
    localStorage.setItem('accessToken', token);
  }

  public logoutUser$(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isLogged');
    location.reload();
  }

  getToken(): string {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken === undefined || accessToken === null ) {
      return null;
    } else {
      return accessToken;
    }
  }

  public getLogged(): boolean {
    if (localStorage.getItem('isLogged') === 'true') {
      return true;
    } else {
      return false;
    }
  }

}
