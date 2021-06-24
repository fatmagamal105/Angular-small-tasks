import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ErrorComponent } from './error/error.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersListComponent } from './users-list/users-list.component';
 

const routes:Routes= [
  {path: '', component:HomeComponent },
  {path: 'home', component:HomeComponent },
  {path:'user-details/:id', component:UserDetailsComponent},
  {path:'users', component:UsersComponent},
  {path:'users-list', component:UsersListComponent},
  {path:'error', component:ErrorComponent},
  {path:'**', component:ErrorComponent}


]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ErrorComponent,
    UserDetailsComponent,
    UsersListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
