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
carAccessories={
      "accessoriesId": 0,
      "accessoriesTitle": "",
      "showOnWebsite": true,
      "carId": 0
    }
newCarObj={
  "carId": 0,
  "brand": "",
  "name": "",
  "pricingDescription": "",
  "pricing": 0,
  "locationId": 0,
  "registeredOn": "2023-11-29T10:07:03.328Z",
  "imageUrl": "",
  "vehicleNo": "",
  "ownerUserId": 0,
  "ZoomCarAccessoriess":[]
}
constructor(private master:MasterService, private http:HttpClient){
this.getCarsData()
}
onInit(){
}

addAccessory(){
  this.newCarObj.ZoomCarAccessoriess=[]
}

getCarsData(){
  debugger
this.master.getCarsData().subscribe((res:any)=>{
  this.carsData=res.data
  console.log(res.data);
  
})
}

addNewCar(){
  this.master.addNewCar(this.newCarObj).subscribe((res:any)=>{

  })
}
}
