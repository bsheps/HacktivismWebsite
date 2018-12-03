import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsComponent } from './Pros.component';

describe('WelcomeComponent', () => {
  let component: ProsComponent;
  let fixture: ComponentFixture<ProsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
