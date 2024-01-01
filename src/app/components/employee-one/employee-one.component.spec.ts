import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOneComponent } from './employee-one.component';

describe('EmployeeOneComponent', () => {
  let component: EmployeeOneComponent;
  let fixture: ComponentFixture<EmployeeOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
