import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from 'src/app/registration.service';
import { User } from 'src/app/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user = new User();
  msg='';
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerUser(){
    console.log("hello")
    this._service.RegisterUserFromRemote(this.user).subscribe(
      data  => {
          console.log("response received");
          this._router.navigate(['/login'])
          },
      error =>
            {
              console.log("error occured")
              this.msg="enter valid credentials"
            }
    )
  }


}
