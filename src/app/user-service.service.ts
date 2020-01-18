import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
      return this.http.get<User[]>("http://dummy.restapiexample.com/api/v1/employees");
  }
}
