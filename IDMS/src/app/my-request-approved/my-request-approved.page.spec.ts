import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestApprovedPage } from './my-request-approved.page';

describe('MyRequestApprovedPage', () => {
  let component: MyRequestApprovedPage;
  let fixture: ComponentFixture<MyRequestApprovedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRequestApprovedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequestApprovedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
