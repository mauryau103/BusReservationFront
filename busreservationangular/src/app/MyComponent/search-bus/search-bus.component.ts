import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/bus';
import { BusService } from 'src/app/bus.service';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  buses:Bus[]=[];

  constructor(private _service:BusService,private _router:Router) { }

  ngOnInit(): void {
    this.showBuses();
  }

  showBuses(){
    this._service.getBusList().subscribe(data => {
      console.log(data);
      this.buses = data;
    });
  }

  bookBus(busId:number){
    this._router.navigate(['/passengerDetails']);
  }
  

}
