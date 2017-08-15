import { LoginAction } from './login.action';
import { AuthService } from './../shared/auth.service';
import { Component } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  @select('currentUser') currentUser$: Observable<any[]>;

  constructor(
    private authService: AuthService,
    private loginActiion: LoginAction
  ) {}

  loginWithGoogle() {
    this.loginActiion.loginWithGoogle();
  }

}
