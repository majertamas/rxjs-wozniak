import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronousEmissionNextNotificationComponent } from './synchronous-emission-next-notification.component';

describe('SynchronousEmissionNextNotificationComponent', () => {
  let component: SynchronousEmissionNextNotificationComponent;
  let fixture: ComponentFixture<SynchronousEmissionNextNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SynchronousEmissionNextNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynchronousEmissionNextNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
