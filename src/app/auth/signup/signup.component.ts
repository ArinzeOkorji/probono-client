import { Component, OnInit } from '@angular/core';
import {NgbNavChangeEvent} from '@ng-bootstrap/ng-bootstrap';
import { AuthHttpService } from '../../services/http/auth-http.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  active = 1;

  constructor(
    private http: AuthHttpService
  ) { }

  ngOnInit(): void {
  }

  signupClient(form) {
    const data = {
      firstName: form.value.clientFirstName,
      lastName: form.value.clientLastName,
      password: form.value.clientPassword,
      contact: {
        number: form.value.clientNumber,
        address: form.value.clientAddress,
        email: form.value.clientEmail.toLowerCase()
      }
    };

    this.http.clientSignUp(data);
  }

}
