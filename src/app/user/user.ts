import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core'
import { type UserObject } from "./user.model";
import { Card } from "../shared/card/card";

// type UserObject = {
//   id : string,
//   avatar : string,
//   name : string
// }


// import {DUMMY_USERS} from '../dummy_users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl:'./user.html',
  styleUrl: './user.css',
  imports: [Card],
})

// Angular component class called User
export class User {

// @Input({ required: true }) id !: string
// @Input({ required: true }) avatar!: string;
// @Input({ required: true }) name!: string;

@Input({required: true}) user!:UserObject;
@Input ({ required: true }) selected!: boolean;
@Output() select = new EventEmitter<string>();

// select = output<string>();
// id = input.required<string>();
// avatar = input.required<string>();
// name = input.required<string>();

// imagePath = computed(() => {
//   return 'assets/users/' + this.avatar();
// })

get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);

  }

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed (() => 'assets/users/' + this.selectedUser().avatar)

  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }

// (
  // component has one object called userData containing a person's details.
  // userData = {
  //   name: 'John Doe',
  //   age: 30,
  //   city: 'New York'
  // };

  // component has a list of users.(array of users)
  // users = [
  //   { name: 'Alice', age: 25, city: 'Los Angeles' },
  //   { name: 'Bob', age: 28, city: 'Chicago' },
  //   { name: 'Charlie', age: 32, city: 'Houston' }
  // ];  
// )
}

