import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ClientHttpService } from '../services/http/client-http.service';
import { LegalAidHttpService } from '../services/http/legalAid-http.service';

@Component({
  selector: 'app-case-details',
  templateUrl: './case-details.component.html',
  styleUrls: ['./case-details.component.scss']
})
export class CaseDetailsComponent implements OnInit, OnDestroy {
  case: any;
  closeResult: string;
  updating = false;
  userType = localStorage.getItem('userType');
  toast = {
    text: '',
    className: '',
    delay: 0
  };

  constructor(
    private modalService: NgbModal,
    private clientHttpService: ClientHttpService,
    private legalAidHttpService: LegalAidHttpService
  ) { }

  ngOnInit(): void {
    this.case = localStorage.getItem('case');
    this.case = JSON.parse(this.case);
  }

  open(content): void {
    this.modalService
    .open(content,
      {
        ariaLabelledBy: 'modal-basic-title',
      centered: true
    }).result.then((result) => {}, (reason) => {});
  }

  closeCase(caseId): void {
    if (!this.case.caseClosed.includes(this.userType)) {
    this.updating = true;
    if (this.userType === 'client') {
        this.clientHttpService.closeCase(caseId)
      .subscribe(
        (res) => {
        this.updating = false;
        if (res.message) {
          this.case.caseClosed.push(this.userType);
          localStorage.removeItem('case'),
      localStorage.setItem('case', JSON.stringify(this.case));
          this.toast.text = res.message;
          this.toast.className = 'bg-success text-light';
          this.toast.delay = 10000;
        }
        if (res.error) {
          this.toast.text = res.error;
          this.toast.className = 'bg-danger text-light';
          this.toast.delay = 10000;
        }
      },
      (err) => {
        this.toast.text = err.message;
        this.toast.className = 'bg-danger text-light';
        this.toast.delay = 10000;
      });
      } else {
        this.legalAidHttpService.closeCase(caseId)
      .subscribe(
        (res) => {
        this.updating = false;
        if (res.message) {
          this.case.caseClosed.push(this.userType);
          localStorage.removeItem('case'),
      localStorage.setItem('case', JSON.stringify(this.case));
          console.log(res);
          this.toast.text = res.message;
          this.toast.className = 'bg-success text-light';
          this.toast.delay = 10000;
        }
        if (res.error) {
          this.toast.text = res.error;
          this.toast.className = 'bg-danger text-light';
          this.toast.delay = 10000;
        }
      },
      (err) => {
        this.toast.text = err;
        this.toast.className = 'bg-danger text-light';
        this.toast.delay = 10000;
      });
      }
    }
  }

  ngOnDestroy(): void {
    localStorage.removeItem('case');
  }

  removeToast(): void {
    this.toast.text = '';
    this.toast.className = '';
    this.toast.delay = 0;
  }

}
