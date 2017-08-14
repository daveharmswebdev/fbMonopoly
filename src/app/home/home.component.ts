import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

import { store, filterUsers, IAppState } from '../store/';
import { IUser } from '../user/user.model';


@Component({
  template: `
  <h1>Home</h1>
  <ul>
    <li *ngFor="let user of filteredUsers$ | async">{{user.userName}}</li>
  </ul>
  `
})
export class HomeComponent implements OnInit {
  @select('filteredUsers') filteredUsers$: Observable<IUser>;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }
}
