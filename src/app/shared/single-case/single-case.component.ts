import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-case',
  templateUrl: './single-case.component.html',
  styleUrls: ['./single-case.component.scss']
})
export class SingleCaseComponent implements OnInit {
  @Input() case: any;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  viewCase(singleCase): void {
    localStorage.setItem('case', JSON.stringify(singleCase));
    this.router.navigate(['/case-details']);
  }

}
