import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styles: [
  ]
})
export class UsersListComponent implements OnInit {

  constructor( private myService:UsersService) { }
  users:any;

  ngOnInit(): void {
    this.myService.getAllUsers().subscribe( (response: any) =>{
      this.users = response;
    },
    (error: any)=> {
      console.log(error);
    })

    // this.myService.deleteUser(this.users.id).subscribe(response =>{
    //   this.users.splice(this.users.id,1)
    // })
  }


}
