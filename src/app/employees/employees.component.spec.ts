import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeesComponent } from './employees.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {EmployeesService} from "../services/employees.service";
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from "@angular/core";
import {from as observableFrom, Observable} from 'rxjs'
import {By} from "@angular/platform-browser";

class MockEmployeeService  {
  employees = {
    email:'manasa@gmail.com',
    password:'123456'
  };
  getEmployees(){
    return this.employees;
  }
}

describe('EmployeeComponent', () => {
  let component: EmployeesComponent;
  let fixture: ComponentFixture<EmployeesComponent>;
  let service : MockEmployeeService;
  let empList : DebugElement[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesComponent ],
      imports:[HttpClientTestingModule],
      providers:[EmployeesService, MockEmployeeService],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesComponent);
    component = fixture.componentInstance;
    service = new MockEmployeeService();

  });

  it('should create the employee component', () => {
    expect(component).toBeTruthy();
  });


  it('should call the employee service to fetch the Employees data',()=>{
    let data = service.getEmployees();
    expect(Object.keys(data)).toContain('email');
    expect(Object.keys(data)).toContain('password');
    expect(data).toEqual(jasmine.objectContaining({
      email:'manasa@gmail.com'
    }));
    expect(Object.keys(data).length).toEqual(2);
  });


  it('should check the ngFor directive',()=>{
    expect(service.getEmployees()).toEqual(service.employees);
  });




  xit('testing service',()=>{
    let service = TestBed.get(EmployeesService);
    spyOn(service,'getEmployees').and.returnValue(observableFrom(['1','2','3']));
    fixture.detectChanges();
  });

});
