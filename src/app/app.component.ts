import { Component } from '@angular/core';
import { MasterService } from './services/master.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private master:MasterService){}
  userId=1
  userObj:any={
  "userId":this.userId,
  "name":'',
  "userRole":'',
  "emailId":'',
  "mobileNo":'',
  "password":'',
  "createdOn":new Date()
}
addUser(){
  this.master.addNewUser(this.userObj)
  this.userId++
}
}
