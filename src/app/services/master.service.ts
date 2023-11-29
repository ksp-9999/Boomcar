import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  endpoint='https://freeapi.miniprojectideas.com/api/ZoomCar/'
  constructor(private http:HttpClient) { }

  addNewUser(userObj:any){
    this.http.post('https://freeapi.miniprojectideas.com/api/ZoomCar/AddNewUser',userObj)
  }
}
