import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeardownCompleteNotificationComponent } from './teardown-complete-notification.component';

describe('TeardownCompleteNotificationComponent', () => {
  let component: TeardownCompleteNotificationComponent;
  let fixture: ComponentFixture<TeardownCompleteNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeardownCompleteNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeardownCompleteNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
