import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './loginRegister/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthService } from './shared/auth.service';
import { GameService } from './game/game.service';
import { GameActions } from './game/game.actions';
import { LoginAction } from './loginRegister/login.action';

// redux
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootRoutes } from './root.routes';
import { IAppState, store } from './store/';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRoutes),
    NgReduxModule,
    AngularFireModule.initializeApp(environment.firebase, 'monopoly-dev'),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    GameService,
    GameActions,
    LoginAction
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.provideStore(store);
  }
}
