import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-update-bus',
  templateUrl: './update-bus.component.html',
  styleUrls: ['./update-bus.component.css']
})
export class UpdateBusComponent implements OnInit {

  busId : number = 0;
  bus : Bus = new Bus();
  constructor(private busService: BusService,
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.busId = this.route.snapshot.params['busId'];
    this.busService.getBusById(this.busId).subscribe(data => {
      this.bus = data;
    });
  }

  onSubmit() {
    this.busService.updateBus(this.busId, this.bus).subscribe(data => {
      this.goToBusList();
    })
  }

  goToBusList(){
    this.router.navigate(['/buses']);
  }

}
