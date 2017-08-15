import { Injectable } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Observable } from 'rxjs/Observable';
import { IAppState } from './../store/IAppState.model';
import { AuthService } from './../shared/auth.service';

export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';

@Injectable()
export class LoginAction {

  constructor(
    private ngRedux: NgRedux<IAppState>,
    private authService: AuthService
  ) {}

  loginWithGoogle() {
    this.authService.loginWithGoogle()
    .then(data => {
      console.log(data.user.email);
      this.ngRedux.dispatch({
        type: LOGIN_SUCCESS,
        currentUser: data.user.email
      });
    });
  }
}
