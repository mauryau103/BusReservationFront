import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public title:string="Home-Bus Reservation System"

  constructor() { 
   
  }

  ngOnInit(): void {
  }

  

}
