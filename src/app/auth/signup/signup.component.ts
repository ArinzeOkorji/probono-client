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
  updating = false;

  constructor(
    private http: AuthHttpService
  ) { }

  ngOnInit(): void {
  }

  signupClient(form) {
    this.updating = true;
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

  createLegalAid(form) {
    this.updating = true;
    const data = {
      firstName: form.value.legalAidFirstName,
      lastName: form.value.legalAidLastName,
      password: form.value.legalAidPassword,
      contact: {
        number: form.value.legalAidNumber,
        email: form.value.legalAidEmail.toLowerCase()
      }
    };

    this.http.legalAidSignup(data);
  }

}
