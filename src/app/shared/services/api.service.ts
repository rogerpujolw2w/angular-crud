import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tap, catchError} from 'rxjs/operators';
import { Observable, throwError , of } from 'rxjs';

export interface User {
  _id: string;
  id: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  phone: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers$() {
    return this.http.get('http://localhost:3000/members/');
  }
  getUser$(id: string) {
    return this.http.get<User>(`http://localhost:3000/members/${id}`);
  }

  addUser$(user:User) {
    return this.http.post<User>('http://localhost:3000/members/', user)
      .pipe(tap((user: User) => console.log(`added Member: id=${user.id}`)),
            catchError(error => {
              console.log(error);
              return throwError(error);
            }));

//            catchError(error => {return of()})); // que siga si da un error

  }

  deleteUser$(id: number){
    return this.http.delete(`http://localhost:3000/members/${id}`);
  }

  editUser$(user:User) {
    return this.http.put<User>('http://localhost:3000/members/', user)
      .pipe(tap((user: User) => console.log(`added Member: id=${user.id}`)),
            catchError(error => {
              console.log(error);
              return throwError(error);
            }));
  }

}
