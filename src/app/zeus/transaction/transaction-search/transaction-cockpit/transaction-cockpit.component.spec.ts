import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCockpitComponent } from './transaction-cockpit.component';

describe('TransactionCockpitComponent', () => {
  let component: TransactionCockpitComponent;
  let fixture: ComponentFixture<TransactionCockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionCockpitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
