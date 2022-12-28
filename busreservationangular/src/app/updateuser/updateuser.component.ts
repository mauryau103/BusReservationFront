import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  userId:number =0;
  user:User =new User();
  constructor(private userService:UserService,
    private route:ActivatedRoute,
    private router : Router) { }

  ngOnInit(): void {
    this.userId=this.route.snapshot.params['userId']
    this.userService.getUserById(this.userId).subscribe(data=>{
      this.user=data;
    },error=>console.log(error));
  }
  updateUser(){
    this.userService.updateUser(this.userId,this.user).subscribe(data=>
      {
        console.log(data);
        this.user=new User();
        this.goToUserList();
      },error=>console.log(error));
  }
   onSubmit(){
    this.updateUser();
   }

   goToUserList(){
    this.router.navigate(['/userlist']);
   }

}
