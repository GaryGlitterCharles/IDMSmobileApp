import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPendingApprovalPage } from './my-pending-approval.page';

describe('MyPendingApprovalPage', () => {
  let component: MyPendingApprovalPage;
  let fixture: ComponentFixture<MyPendingApprovalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPendingApprovalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPendingApprovalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
