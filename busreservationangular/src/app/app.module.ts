import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegistrationComponent } from './MyComponent/registration/registration.component';
import { MainComponent } from './MyComponent/main/main.component';
import { FooterCComponent } from './MyComponent/footer-c/footer-c.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PassengerdetailsComponent } from './passengerdetails/passengerdetails.component';
import { SeatComponent } from './seat/seat.component';
import { UserdashboardComponent } from './MyComponent/userdashboard/userdashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { SearchBusComponent } from './MyComponent/search-bus/search-bus.component';
import { DriverComponent } from './MyComponent/driver/driver.component';
import { BusListComponent } from './bus-list/bus-list.component';
import { CreateBusComponent } from './create-bus/create-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { AdminnavComponent } from './adminnav/adminnav.component';

import { UpdateuserComponent } from './updateuser/updateuser.component';
import { UserComponent } from './userlist/user.component';
import { DriverListComponent } from './driver-list/driver-list.component';
import { UpdateDriverComponent } from './update-driver/update-driver.component';






@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegistrationComponent,
    MainComponent,
    FooterCComponent,
    PassengerdetailsComponent,
    SeatComponent,
    UserdashboardComponent,
    ContactComponent,
    AboutComponent,
    SearchBusComponent,
    DriverComponent,
   BusListComponent,
    CreateBusComponent,
    UpdateBusComponent,
    AdminnavComponent,
   
    UpdateuserComponent,
    UserComponent,
    DriverListComponent,
    UpdateDriverComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
