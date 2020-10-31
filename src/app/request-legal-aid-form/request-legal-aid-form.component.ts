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

  constructor(
    private http: ClientHttpService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form): void {
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
