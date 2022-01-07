import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownControllerComponent } from './countdown-controller.component';

describe('CountdownControllerComponent', () => {
  let component: CountdownControllerComponent;
  let fixture: ComponentFixture<CountdownControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownControllerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
