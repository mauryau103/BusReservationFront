import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from '../bus';
import { BusService } from '../bus.service';

@Component({
  selector: 'app-create-bus',
  templateUrl: './create-bus.component.html',
  styleUrls: ['./create-bus.component.css']
})
export class CreateBusComponent implements OnInit {

  bus : Bus = new Bus();

  constructor(private busService: BusService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.bus);
    this.saveBus();
  }

  saveBus(){
    this.busService.createBus(this.bus).subscribe(data =>{
      console.log(data);
      this.goToBusList();
    });//,
    //error => console.log(error));
  }

  goToBusList(){
    this.router.navigate(['/buses']);
  }
}
