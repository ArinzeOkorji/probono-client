import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientHttpService } from '../../services/http/client-http.service';

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.scss']
})
export class ClientHomeComponent implements OnInit {
  casesList = [];

  constructor(private httpService: ClientHttpService) {
   }

  ngOnInit(): void {
    this.httpService.get().subscribe((data) => {
      this.casesList = data;
    });
  }
}
