import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminnavComponent } from './adminnav/adminnav.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { ContactComponent } from './contact/contact.component';
import { CreateBusComponent } from './create-bus/create-bus.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { DriverComponent } from './MyComponent/driver/driver.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import { SearchBusComponent } from './MyComponent/search-bus/search-bus.component';
import { UserdashboardComponent } from './MyComponent/userdashboard/userdashboard.component';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './userlist/user.component';


const routes: Routes = [
   {path:"",component:NavbarComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:RegistrationComponent},
  {path:"passengerDetails",component:PassengerdetailsComponent},
  {path:"userdashboard",component:UserdashboardComponent},
  {path:"contact",component:ContactComponent},
  {path:"about",component:AboutComponent},
  {path:"searchBus",component:SearchBusComponent},
  {path:"drivers",component:DriverComponent},
  {path: "adminnav",component:AdminnavComponent},
  {path: "userlist",component:UserComponent},
  {path: "adminnav/userlist",component:UserComponent},
  {path:"updateuser/:userId",component:UpdateuserComponent},
  {path:"adminnav/driverlist",component:DriverListComponent},
  {path: 'driverlist' , component:DriverListComponent},
  {path :'create-driver' , component:DriverComponent},
  {path:'update-driver/:driverId',component:UpdateDriverComponent},
  {path:"adminnav/buses",component:BusListComponent},
  {path: 'buses', component: BusListComponent},
  {path: 'create-bus', component: CreateBusComponent},
  {path: 'update-bus/:busId', component: UpdateBusComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
