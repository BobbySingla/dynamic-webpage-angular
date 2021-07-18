import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcomponentComponent } from './schoolcomponent.component';

describe('SchoolcomponentComponent', () => {
  let component: SchoolcomponentComponent;
  let fixture: ComponentFixture<SchoolcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
