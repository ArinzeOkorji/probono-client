import { Component, OnInit } from '@angular/core';
import { ClientHttpService } from '../services/http/client-http.service';

@Component({
  selector: 'app-request-legal-aid-form',
  templateUrl: './request-legal-aid-form.component.html',
  styleUrls: ['./request-legal-aid-form.component.scss']
})
export class RequestLegalAidFormComponent implements OnInit {

  constructor(private http: ClientHttpService) { }

  ngOnInit(): void {
  }

  submitForm(form): void {
    let clientDetails = localStorage.getItem('profile');
    clientDetails = JSON.parse(clientDetails);
    form.value.client = clientDetails;
    this.http.requestLegalAid(form.value);
  }

}
