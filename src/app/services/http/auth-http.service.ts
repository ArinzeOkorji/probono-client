import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

interface ICredentials {
  user: {
    token: string
    userType: string,
    _id: string
  };
}

@Injectable({providedIn: 'root'})
export class AuthHttpService {
  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }

  clientSignUp(data): void {
    this.httpClient.post(`${environment.API_URL}/api/signup/client`, data)
    .subscribe((res: ICredentials) => {
      localStorage.setItem('id', res.user._id);
      localStorage.setItem('token', res.user.token);
      localStorage.setItem('userType', res.user.userType);

      this.fetch();

      this.navigateToHomepage();
    });
  }

  legalAidSignup(data): void {
    this.httpClient.post(`${environment.API_URL}/api/signup/legalAid`, data)
    .subscribe((res: ICredentials) => {
      localStorage.setItem('id', res.user._id);
      localStorage.setItem('token', res.user.token);
      localStorage.setItem('userType', res.user.userType);

      this.fetch();

      this.navigateToHomepage();
    });
  }

  clientLogin(data): void  {
    this.httpClient.post(`${environment.API_URL}/api/login/client`, data)
    .subscribe((res: ICredentials) => {
      localStorage.setItem('id', res.user._id);
      localStorage.setItem('token', res.user.token);
      localStorage.setItem('userType', res.user.userType);

      this.fetch();
      this.navigateToHomepage();
    });
  }

  legalAidLogin(data): void  {
    this.httpClient.post(`${environment.API_URL}/api/login/legalAid`, data)
    .subscribe((res: ICredentials) => {
      localStorage.setItem('id', res.user._id);
      localStorage.setItem('token', res.user.token);
      localStorage.setItem('userType', res.user.userType);

      this.fetch();
      this.navigateToHomepage();
    });
  }

  isLoggedIn(): boolean  {
    let token = localStorage.getItem('token');
    if (typeof token !== 'string') {
      return false;
    } else {
      return true;
    }
  }

  navigateToHomepage(): void {
    const userType = localStorage.getItem('userType');
    if (this.isLoggedIn()) {
      this.router.navigate([`/${userType}/home`]);
    } else {
      this.router.navigate([`/auth/login`]);
    }
  }

  logOut(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    localStorage.removeItem('profile');
    this.navigateToHomepage();
  }

  fetch(): void {
    const id = localStorage.getItem('id');

    const userType = localStorage.getItem('userType');

    this.httpClient.get(`${environment.API_URL}/api/${userType}/${id}/profile`)
      .subscribe((profile) => {
        localStorage.setItem('profile', JSON.stringify(profile));
      });
  }

}
