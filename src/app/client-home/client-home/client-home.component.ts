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
  searched = false;

  constructor(private httpService: ClientHttpService) {
   }

  ngOnInit(): void {
    this.getAllCases();
  }

  searchCase(form): void {
    this.casesList = undefined;
    this.httpService.getSingleCase(form.value.caseId).subscribe((data) => {
      if (data) {
        this.searched = true;
        this.casesList = [data];
      } else {
        this.casesList = data;
      }
    });
  }

  getAllCases(): void {
    this.searched = false;
    this.casesList = undefined;
    this.httpService.getCases().subscribe((data) => {
      this.casesList = data;
    });
  }
}
