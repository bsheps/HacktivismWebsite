import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaseStudiesComponent } from "./case_studies.component";

describe('HobbiesComponent', () => {
  let component: CaseStudiesComponent;
  let fixture: ComponentFixture<CaseStudiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaseStudiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaseStudiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
