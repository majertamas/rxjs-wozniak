import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsynchronousEmissionMoreNextNotificationComponent } from './asynchronous-emission-more-next-notification.component';

describe('AsynchronousEmissionMoreNextNotificationComponent', () => {
  let component: AsynchronousEmissionMoreNextNotificationComponent;
  let fixture: ComponentFixture<AsynchronousEmissionMoreNextNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsynchronousEmissionMoreNextNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsynchronousEmissionMoreNextNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
