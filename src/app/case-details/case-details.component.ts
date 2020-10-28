import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit, OnDestroy {
  case: any;
  closeResult: string;

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.case = localStorage.getItem('case');
    this.case = JSON.parse(this.case);
    console.log(this.case);
  }

  open(content): void {
    this.modalService
    .open(content,
      {
        ariaLabelledBy: 'modal-basic-title',
      centered: true
    }).result.then((result) => {}, (reason) => {});
  }

  ngOnDestroy(): void {
    localStorage.removeItem('case');
  }

}
