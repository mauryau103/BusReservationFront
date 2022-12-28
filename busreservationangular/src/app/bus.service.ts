import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private baseURL = "http://localhost:8080/getAllBus";

  private postURL = "http://localhost:8080/saveBus";

  private getByIdURL = "http://localhost:8080/getBusById"

  private putURL = "http://localhost:8080/updateBus";

  private deleteURL = "http://localhost:8080/deleteBus";

  constructor(private httpClient : HttpClient) { }

  getBusList() : Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(this.baseURL);
  }

  createBus(bus: Bus): Observable<any>{
    return this.httpClient.post(this.postURL, bus);
  }

  getBusById(busId : number) : Observable<Bus> {
    return this.httpClient.get<Bus>(`${this.getByIdURL}/${busId}`);
  }

  updateBus(busId : number, bus : Bus) : Observable<Object> {
    return this.httpClient.put(`${this.putURL}/${busId}`, bus);
  }

  deleteBus(busId : number) : Observable<Object> {
    return this.httpClient.delete(`${this.deleteURL}/${busId}`);
  }
}
