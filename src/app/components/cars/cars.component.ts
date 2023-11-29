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
constructor(private master:MasterService, private http:HttpClient){
this.getCarsData()
}
onInit(){
  
}

getCarsData(){
  debugger
this.master.getCarsData().subscribe((res:any)=>{
  this.carsData=res.data
  console.log(res.data);
  
})
}
}
