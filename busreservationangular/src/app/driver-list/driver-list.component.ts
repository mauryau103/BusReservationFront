import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from '../driver';
import { DriverService } from '../driver.service';
@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  drivers?: Driver[];
  constructor(private driveservicelist: DriverService, private router: Router) { }

  ngOnInit(): void {
    this.getDrivers();

  }
  private getDrivers() {
    this.driveservicelist.getDriverList().subscribe(data => {
      this.drivers = data;
      console.log(data);
    })
  }
  updateDriver(driverId: number) {
    this.router.navigate(['update-driver', driverId]);
  }

  deleteDriver(driverId: number) {
    this.driveservicelist.deleteDriver(driverId).subscribe(data => {
      console.log(data);
      this.getDrivers();
      this.goToDriverList();
    })
  }

  goToDriverList() {
    this.router.navigate(['/driverlist']);
  }

  addDriver(){
    this.router.navigate(['/create-driver'])
  }
}