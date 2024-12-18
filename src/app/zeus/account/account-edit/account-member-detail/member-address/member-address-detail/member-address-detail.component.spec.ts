import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddressDetailComponent } from './member-address-detail.component';

describe('MemberAddressDetailComponent', () => {
  let component: MemberAddressDetailComponent;
  let fixture: ComponentFixture<MemberAddressDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberAddressDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberAddressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
