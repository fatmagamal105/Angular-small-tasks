import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient:HttpClient) {}

  BaseUrl="http://localhost:3000/users";
  getAllUsers():any{
    return this.httpClient.get(this.BaseUrl);
  }
  getUserByID(id:number){
    return this.httpClient.get(this.BaseUrl+"/"+id);

  }
  deleteUser(id:number){
    return this.httpClient.delete(`${this.BaseUrl}/${id}`);

  }
}
