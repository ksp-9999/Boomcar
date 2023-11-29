import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MasterService } from 'src/app/services/master.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
carsData:any
loggedUser=JSON.parse(String(localStorage.getItem('zoomuser')))
carAccessories={
      "accessoriesId": 0,
      "accessoriesTitle": "",
      "showOnWebsite": true,
      "carId": 0
    }
caraccArr:any[]=[]
newCarObj={
  "carId": 0,
  "brand": "",
  "name": "",
  "pricingDescription": "",
  "pricing": 0,
  "locationId": 0,
  "registeredOn": new Date(),
  "imageUrl": "",
  "vehicleNo": "",
  "ownerUserId": 0,
  "ZoomCarAccessoriess":this.caraccArr
}
constructor(private master:MasterService, private http:HttpClient){
this.getCarsData()
}
onInit(){
}

addAccessory(){
  this.caraccArr.push(this.carAccessories)
  this.carAccessories={
      "accessoriesId": 0,
      "accessoriesTitle": "",
      "showOnWebsite": true,
      "carId": 0
    }
}

getCarsData(){
this.master.getCarsData().subscribe((res:any)=>{
  this.carsData=res.data
})
}

addNewCar(){
  this.master.addNewCar(this.newCarObj).subscribe((res:any)=>{
    console.log(res);
    if(res.result){
      alert("New Car Added")
      this.newCarObj={
  "carId": 0,
  "brand": "",
  "name": "",
  "pricingDescription": "",
  "pricing": 0,
  "locationId": 0,
  "registeredOn": new Date(),
  "imageUrl": "",
  "vehicleNo": "",
  "ownerUserId": this.loggedUser.userId,
  "ZoomCarAccessoriess":this.caraccArr
}
    }else{
      alert("Please check your details")
    }
  })
}
}
