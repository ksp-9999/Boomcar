import { Component } from '@angular/core';
import { MasterService } from './services/master.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private master:MasterService, private router:Router){
    const local=localStorage.getItem('zoomuser')
    if(local!=null){
      this.loggedUserObj=JSON.parse(local)
    }
  }
  loggedUserObj:any
  userObj:any={
  "userId":0,
  "name":'',
  "userRole":'',
  "emailId":'',
  "mobileNo":'',
  "password":'',
  "createdOn":new Date()
}
loginObj={
  "userId":0,
  "name":'111',
  "userRole":'111',
  "emailId":'',
  "mobileNo":'1111',
  "password":'',
  "createdOn":new Date()
}
initalobj={
  "userId":0,
  "name":'',
  "userRole":'',
  "emailId":'',
  "mobileNo":'',
  "password":'',
  "createdOn":new Date()
}
addUser(){
  this.master.addNewUser(this.userObj).subscribe((res:any)=>{
      console.log(res)
      if(res.result){
        alert("User Added Successfully!")
        this.loggedUserObj=res.data
      }else{
        alert(res.message)
      }
    })
  this.userObj=this.initalobj
  
}

onLogin(){
  this.master.loginUser(this.loginObj).subscribe((res:any)=>{
    if(res.result){
      alert("Login successfull")
      localStorage.setItem("zoomuser",JSON.stringify(res.data))
      this.loggedUserObj=res.data
      this.router.navigate(['/cars'])
    }else{
      alert('login failed')
    }
  })
  
}

onLogout(){
  let islogout=confirm("Do you want to logout from this session!")
  if(islogout){
    localStorage.removeItem('zoomuser')
  }
  this.loggedUserObj=null;
  this.router.navigate(['/home'])
}
}
