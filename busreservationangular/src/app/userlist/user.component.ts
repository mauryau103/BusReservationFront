import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users?:User[];
  

  constructor( private userService:UserService, private router: Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }
     
  private getAllUser(){
  this.userService.getUsers().subscribe((data:User[])=> {
   console.log(data);
   this.users=data; 
});
}
deleteUser(userId: any) {
    this.userService.deleteUser(userId).subscribe(data => {
      console.log(data);
      this.getAllUser();
      this.goToUserList();
      
    })
  }
updateUser(userId: any) {
    
    this.router.navigate(['updateuser', userId]);
  }
goToUserList() {
    this.router.navigate(['/userlist']);
  }
  }

