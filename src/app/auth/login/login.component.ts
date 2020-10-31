import { Component, OnInit } from '@angular/core';
import { AuthHttpService } from 'src/app/services/http/auth-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  active = 1;
  updating = false;

  constructor(
    private http: AuthHttpService
  ) { }

  ngOnInit(): void {
  }

  loginClient(form): void {
    this.updating = true;
    const data = {
      email: form.value.clientEmail.toLowerCase(),
      password: form.value.clientPassword
    };
    this.http.clientLogin(data);
  }

  loginLegalAid(form): void {
    this.updating = true;
    const data = {
      email: form.value.legalAidEmail.toLowerCase(),
      password: form.value.legalAidPassword
    };
    this.http.legalAidLogin(data);
  }
}
