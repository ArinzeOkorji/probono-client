import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { fakeCases } from '../../fakeData/fakeData';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({providedIn: 'root'})
export class ClientHttpService {
  constructor(
    private httpClient: HttpClient,
    private router: Router
    ) { }
  get() {
    return of(fakeCases);
  }

  getCases(): Observable<any> {
    const id = localStorage.getItem('id');
    return this.httpClient.get(`${environment.API_URL}/api/client/${id}/cases/`);
  }

  requestLegalAid(data): void {
    this.httpClient.post(`${environment.API_URL}/api/cases`, data)
    .subscribe((res) => {
      this.router.navigate(['/client/home']);
    });
  }

  getSingleCase(data): Observable<any> {
    const id = localStorage.getItem('id');
    return this.httpClient.get(`${environment.API_URL}/api/cases/${id}/${data}`);
  }

  closeCase(caseId): Observable<any> {
    return this.httpClient.put(`${environment.API_URL}/api/client/close-case/${caseId}`, {});
  }
}
