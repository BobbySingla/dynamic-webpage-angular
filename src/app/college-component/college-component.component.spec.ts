import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeComponentComponent } from './college-component.component';

describe('CollegeComponentComponent', () => {
  let component: CollegeComponentComponent;
  let fixture: ComponentFixture<CollegeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
