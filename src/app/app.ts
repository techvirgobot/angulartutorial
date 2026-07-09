import { Component } from '@angular/core';
// import { NgFor, NgIf } from "@angular/common";


import { User } from './user/user';
import { Header } from "./header/header";
import {DUMMY_USERS} from './dummy_users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User, Header, Tasks],
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId ?: string;

  get selectedUser() {
    return this.users.find((user)=> user.id === this.selectedUserId)!;
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}