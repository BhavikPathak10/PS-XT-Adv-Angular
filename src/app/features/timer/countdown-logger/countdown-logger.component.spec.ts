import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownLoggerComponent } from './countdown-logger.component';

describe('CountdownLoggerComponent', () => {
  let component: CountdownLoggerComponent;
  let fixture: ComponentFixture<CountdownLoggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownLoggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownLoggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
