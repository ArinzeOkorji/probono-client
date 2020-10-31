import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientHttpService } from '../services/http/client-http.service';

@Component({
  selector: 'app-request-legal-aid-form',
  templateUrl: './request-legal-aid-form.component.html',
  styleUrls: ['./request-legal-aid-form.component.scss']
})
export class RequestLegalAidFormComponent implements OnInit {
  updating = false;
  token = localStorage.getItem('token');

  constructor(
    private http: ClientHttpService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form): void {;

    if (typeof this.token !== 'string') {
      localStorage.setItem('pendingCase', JSON.stringify(form.value));
      this.router.navigate(['auth/login']);
    } else {
    this.updating = true;
    let clientDetails = localStorage.getItem('profile');
    clientDetails = JSON.parse(clientDetails);
    form.value.client = clientDetails;
    this.http.requestLegalAid(form.value).subscribe(
      (res) => {
      this.router.navigate(['/client/home']);
    },
    (err) => {
      this.updating = false;
    });
    }
  }

}
