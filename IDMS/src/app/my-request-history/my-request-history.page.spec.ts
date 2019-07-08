import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRequestHistoryPage } from './my-request-history.page';

describe('MyRequestHistoryPage', () => {
  let component: MyRequestHistoryPage;
  let fixture: ComponentFixture<MyRequestHistoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyRequestHistoryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRequestHistoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
