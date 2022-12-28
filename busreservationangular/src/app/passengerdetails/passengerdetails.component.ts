import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PassDetailService } from '../pass-detail.service';
import { Passenger } from '../passenger';
import { User } from '../user';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {
  passenger=new Passenger();
  passengers:Passenger[]=[];
  constructor(private _service:PassDetailService) { }

  ngOnInit(): void {
     this.showPassengers();
  }

  saveDetails(){
    this._service.savePassengerFromRemote(this.passenger).subscribe(data=>console.log("response received"),
    error=>console.log("error occured"));
  }

  showPassengers(){
    this._service.showPassengerFromRemote().subscribe(data=>{
      console.log(data);
      
      this.passengers=data});
  }

}
