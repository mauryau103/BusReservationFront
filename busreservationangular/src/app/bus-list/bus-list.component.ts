import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {

  buses ?: Bus[] ;

  constructor(private busService: BusService,
    private router : Router) { }

  ngOnInit(): void {
    this.getBuses();
  }

  getBuses() {
    this.busService.getBusList().subscribe(data => {
      console.log(data);
      this.buses = data;
    });
  }

  updateBus(busId : number) {
    this.router.navigate(['update-bus', busId]);
  }

  deleteBus(busId : number) {
    this.busService.deleteBus(busId).subscribe(data => {
      console.log(data);
      //this.getBuses();
    })
  }

  addBus(){
    this.router.navigate(['/create-bus'])
  }

}