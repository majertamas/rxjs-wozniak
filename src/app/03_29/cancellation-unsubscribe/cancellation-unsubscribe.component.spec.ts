import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellationUnsubscribeComponent } from './cancellation-unsubscribe.component';

describe('CancellationUnsubscribeComponent', () => {
  let component: CancellationUnsubscribeComponent;
  let fixture: ComponentFixture<CancellationUnsubscribeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancellationUnsubscribeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancellationUnsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
