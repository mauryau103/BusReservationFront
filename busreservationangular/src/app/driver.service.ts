import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Driver } from './driver';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private baseURL = "http://localhost:8080/addDrivers";
  private baseURL1 = "http://localhost:8080/GetAllDrivers";
  private baseURL2 = "http://localhost:8080/GetDriversById";

  private baseURL3 = "http://localhost:8080/UpdateDrivers"
  private baseURL4 = "http://localhost:8080/DeleteDrivers"

  constructor(private httpClient: HttpClient) { }
  getDriverList(): Observable<Driver[]> {

    return this.httpClient.get<Driver[]>(this.baseURL1);
  }

  createdriver(driver: Driver): Observable<any> {
    console.log(driver);
    return this.httpClient.post(this.baseURL, driver);
  }

  getDriverById(driverId: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseURL2}/${driverId}`);
  }



  updateDriver(driverId: number, driver : Driver) : Observable<Object> {
    return this.httpClient.put<Object>(`${this.baseURL3}/${driverId}`, driver);
  } 

  deleteDriver(driverId : number) : Observable<any> {
    return this.httpClient.delete(`${this.baseURL4}/${driverId}`);
  }

}