import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  endpoint='https://freeapi.miniprojectideas.com/api/ZoomCar/'
  constructor(private http:HttpClient) { }

  addNewUser(userObj:any){
    return this.http.post('https://freeapi.miniprojectideas.com/api/ZoomCar/AddNewUser',userObj)
  }
  loginUser(userObj:any){
    return this.http.post(this.endpoint+'Login',userObj)
  }

  getCarsData(){
    return this.http.get(this.endpoint+'GetAllCars')  
  }

  addNewCar(newCarObj:any){
    return this.http.post(this.endpoint+'addNewCar',newCarObj)
  }
}
