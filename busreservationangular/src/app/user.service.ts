import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import {Observable} from 'rxjs'; 
import { NgModel } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/GetAllUsers";
  private baseURL2 = "http://localhost:8080/GetUsersById";
  private baseURL3 = "http://localhost:8080/UpdateUsers";
  private baseURL4 = "http://localhost:8080/DeleteUsers";


  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]>{

return this.http.get<User[]>(this.baseUrl);
}
 getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.baseURL2}/${userId}`);
  }
deleteUser(userId : number) : Observable<any> {
    return this.http.delete(`${this.baseURL4}/${userId}`);
  }

updateUser(userId: number, user : User) : Observable<Object> {
    return this.http.put<Object>(`${this.baseURL3}/${userId}`, user);
  } 

} 
