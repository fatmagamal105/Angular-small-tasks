import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  id=0;
  user:any;
  constructor(ourActivated:ActivatedRoute,private myService:UsersService) {
    this.id = ourActivated.snapshot.params.id;
   }

  ngOnInit(): void {
    this.myService.getUserByID(this.id).subscribe( (response)=>{
      this.user = response;
     // console.log( this.user);
    },
    (error) => {
      console.log(error);
    })
  }

}
