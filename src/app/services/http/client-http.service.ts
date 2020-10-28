import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { fakeCases } from '../../fakeData/fakeData';

@Injectable({providedIn: 'root'})
export class ClientHttpService {
  constructor(private httpClient: HttpClient) { }
  get() {
    console.log(fakeCases)
    return of(fakeCases);
  }
}
