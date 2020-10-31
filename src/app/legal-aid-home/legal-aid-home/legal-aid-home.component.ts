import { Component, OnInit } from '@angular/core';
import { LegalAidHttpService } from '../../services/http/legalAid-http.service';

@Component({
  selector: 'app-legal-aid-home',
  templateUrl: './legal-aid-home.component.html',
  styleUrls: ['./legal-aid-home.component.scss']
})
export class LegalAidHomeComponent implements OnInit {
  assignedCase: any = undefined;
  casesList: any = undefined;
  searched = false;

  constructor(private httpService: LegalAidHttpService) { }

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
      this.assignedCase = this.casesList.filter((singleCase) => {
        return singleCase.status === 'Assigned';
      });
    });
  }

}
