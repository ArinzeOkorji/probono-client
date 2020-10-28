import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestLegalAidFormComponent } from './request-legal-aid-form.component';

describe('RequestLegalAidFormComponent', () => {
  let component: RequestLegalAidFormComponent;
  let fixture: ComponentFixture<RequestLegalAidFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestLegalAidFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestLegalAidFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
