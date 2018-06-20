import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrLandingComponent } from './hr-landing.component';

describe('HrLandingComponent', () => {
  let component: HrLandingComponent;
  let fixture: ComponentFixture<HrLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
