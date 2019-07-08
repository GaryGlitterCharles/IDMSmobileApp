import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfServicePage } from './self-service.page';

describe('SelfServicePage', () => {
  let component: SelfServicePage;
  let fixture: ComponentFixture<SelfServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
