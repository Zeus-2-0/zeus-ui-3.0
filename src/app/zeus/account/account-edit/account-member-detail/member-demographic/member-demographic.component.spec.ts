import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDemographicComponent } from './member-demographic.component';

describe('MemberDemographicComponent', () => {
  let component: MemberDemographicComponent;
  let fixture: ComponentFixture<MemberDemographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberDemographicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
