import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class LegalAidHttpService {
  constructor(private httpClient: HttpClient) { }

  getCases(): Observable<any> {
    const id = localStorage.getItem('id');
    return this.httpClient.get(`${environment.API_URL}/api/legal/${id}/cases/`);
  }
}
