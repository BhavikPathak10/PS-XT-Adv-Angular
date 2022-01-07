import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownClickLoggerComponent } from './countdown-click-logger.component';

describe('CountdownClickLoggerComponent', () => {
  let component: CountdownClickLoggerComponent;
  let fixture: ComponentFixture<CountdownClickLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownClickLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownClickLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
