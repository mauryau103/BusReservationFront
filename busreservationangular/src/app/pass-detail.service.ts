import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './passenger';

@Injectable({
  providedIn: 'root'
})
export class PassDetailService {

  constructor(private _http:HttpClient) { }

  public savePassengerFromRemote(passenger:Passenger):Observable<any>{
    return this._http.post<any>('http://localhost:8080/savePassenger',passenger)
  }

  public showPassengerFromRemote():Observable<any>{
    return this._http.get<any>('http://localhost:8080/getAllPassenger');
  }
}
