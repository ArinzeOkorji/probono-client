import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAidHomeComponent } from './legal-aid-home.component';

describe('LegalAidHomeComponent', () => {
  let component: LegalAidHomeComponent;
  let fixture: ComponentFixture<LegalAidHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalAidHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalAidHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
