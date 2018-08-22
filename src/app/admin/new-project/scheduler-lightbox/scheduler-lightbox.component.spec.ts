import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerLightboxComponent } from './scheduler-lightbox.component';

describe('SchedulerLightboxComponent', () => {
  let component: SchedulerLightboxComponent;
  let fixture: ComponentFixture<SchedulerLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulerLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulerLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
