import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';


@Component({
  selector: 'app-root',
  template: `
    <nav-bar></nav-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  title = 'app';
  user = null;

  constructor(
    private auth: AuthService,
  ) {}

  ngOnInit() {
    this.auth.getAuthState()
    .subscribe(user => {
      this.user = user;
    });
  }
}
