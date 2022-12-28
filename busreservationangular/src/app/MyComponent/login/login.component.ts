import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { RegistrationService } from 'src/app/registration.service';
import { Router } from '@angular/router';
import { User } from 'src/app/user';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
user = new User();
 msg='';
  public title="Login";
  constructor(private _service:RegistrationService,private _router:Router) { }

  ngOnInit(): void {

  }
  loginUser(){
    console.log("hello")
    this._service.loginUserFromRemote(this.user).subscribe(
      data  => {
          // console.log("response received");
          // this._router.navigate(['/navbar'])
        if(this.user.emailId == "admin@gmail.com" && this.user.userPassword == "admin"){
                  this._router.navigate(["/adminnav"]);
                }else{
                  console.log("response recieved");
                this._router.navigate(['/userdashboard']) }
          },
      error =>
            {
              console.log("error occured")
              this.msg="enter valid credentials please enter valid emailid and password "
            }
    )
  }

  gotoregistration(){
  this._router.navigate(['/signup'])
}
}
