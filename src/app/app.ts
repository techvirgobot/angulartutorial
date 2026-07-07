import { Component } from '@angular/core';
import { User } from './user/user';
import { Header } from "./header/header";
import {DUMMY_USERS} from './dummy_users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User, Header],
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class AppComponent {
  users = DUMMY_USERS;

  onSelectUser(id: string){
    console.log('Selected user with id' + id) ;
  }

}