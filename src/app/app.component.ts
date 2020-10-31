import { Component } from '@angular/core';
import { AuthHttpService } from './services/http/auth-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro-bono';
  public isCollapsed = true;
  userType = localStorage.getItem('userType');

  constructor(private auth: AuthHttpService){}

  isLoggedIn(): boolean {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logOut();
  }
}
