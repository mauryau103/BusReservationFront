import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http:HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/login",user)
}
public RegisterUserFromRemote(user:User):Observable<any>{
  console.log(user);
  return this._http.post<any>("http://localhost:8080/registeruser",user)
}
}
