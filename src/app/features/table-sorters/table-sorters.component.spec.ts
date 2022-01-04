import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSortersComponent } from './table-sorters.component';

describe('TableSortersComponent', () => {
  let component: TableSortersComponent;
  let fixture: ComponentFixture<TableSortersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSortersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSortersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
