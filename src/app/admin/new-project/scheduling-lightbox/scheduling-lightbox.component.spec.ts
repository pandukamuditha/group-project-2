import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulingLightboxComponent } from './scheduling-lightbox.component';

describe('SchedulingLightboxComponent', () => {
  let component: SchedulingLightboxComponent;
  let fixture: ComponentFixture<SchedulingLightboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulingLightboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulingLightboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
