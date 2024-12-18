import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberIdentifierComponent } from './member-identifier.component';

describe('MemberIdentifierComponent', () => {
  let component: MemberIdentifierComponent;
  let fixture: ComponentFixture<MemberIdentifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberIdentifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
