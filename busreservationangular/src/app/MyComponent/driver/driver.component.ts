import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Driver } from 'src/app/driver';
import { DriverService } from 'src/app/driver.service';
@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})


export class DriverComponent implements OnInit {



  driver: Driver = new Driver();
  constructor(private driverService: DriverService, private router: Router) { }

  ngOnInit(): void {
  }


  saveDriver() {
    this.driverService.createdriver(this.driver).subscribe(data => {
      console.log(data);
      this.goToDriverList();
    },
      error => console.log(error));
  }

  goToDriverList() {
    this.router.navigate(['/drivers']);
  }
  onSubmit() {
    // console.log(this.driver);
    this.saveDriver();
  }

}
