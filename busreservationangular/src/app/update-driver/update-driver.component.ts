import { Component, OnInit } from '@angular/core';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
import { ActivatedRoute, Router } from '@angular/router'; 
@Component({
  selector: 'app-update-driver',
  templateUrl: './update-driver.component.html',
  styleUrls: ['./update-driver.component.css']
})
export class UpdateDriverComponent implements OnInit {
  driverId:number =0;
  driver:Driver =new Driver();
  constructor(private driverService:DriverService,
    private route:ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.driverId=this.route.snapshot.params['driverId']
    this.driverService.getDriverById(this.driverId).subscribe(data=>{
      this.driver=data;
    },error=>console.log(error));
  }
  updateDriver(){
    this.driverService.updateDriver(this.driverId,this.driver).subscribe(data=>
      {
        console.log(data);
        this.driver=new Driver();
        this.goToDriverList();
      },error=>console.log(error));
  }
   onSubmit(){
    this.updateDriver();
   }

   goToDriverList(){
    this.router.navigate(['/driverlist']);
   }
}
