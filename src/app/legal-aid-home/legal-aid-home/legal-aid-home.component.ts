import { Component, OnInit } from '@angular/core';
import { LegalAidHttpService } from '../../services/http/legalAid-http.service';

@Component({
  selector: 'app-legal-aid-home',
  templateUrl: './legal-aid-home.component.html',
  styleUrls: ['./legal-aid-home.component.scss']
})
export class LegalAidHomeComponent implements OnInit {
  casesList: any;
  assignedCase: any;

  constructor(private httpService: LegalAidHttpService) { }

  ngOnInit(): void {
    this.httpService.getCases().subscribe((data) => {
      console.log(data);
      this.casesList = data;
      this.assignedCase = this.casesList.filter((singleCase) => {
        return singleCase.status === 'Assigned';
      });
    });
  }

}
