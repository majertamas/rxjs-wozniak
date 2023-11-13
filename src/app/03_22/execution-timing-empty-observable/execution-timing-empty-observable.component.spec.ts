import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutionTimingEmptyObservableComponent } from './execution-timing-empty-observable.component';

describe('ExecutionTimingEmptyObservableComponent', () => {
  let component: ExecutionTimingEmptyObservableComponent;
  let fixture: ComponentFixture<ExecutionTimingEmptyObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutionTimingEmptyObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExecutionTimingEmptyObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
