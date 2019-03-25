import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule,FormControl } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {AuthService} from "../../services/auth.service";
import {By} from "@angular/platform-browser";
import {Router} from "@angular/router";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service : AuthService;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers:[AuthService]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create login component', () => {
    expect(component).toBeTruthy();
  });

  it('should create a form with 2 controls',()=>{
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should check for the valid email and password',()=>{
    let emailControl = component.loginForm.get('email');
    let passwordControl = component.loginForm.get('password');
    emailControl.setValue('');
    passwordControl.setValue('');
    expect(emailControl.valid).toBeFalsy();
    expect(passwordControl.valid).toBeFalsy();
  });

  xit('should fail with invalid email',()=>{
     let email = component.email;
     expect(email.valid).toBeFalsy();
    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  xit('should fail with invalid password',()=>{
    let password = component.password;
    expect(password.valid).toBeFalsy();
    let errors = {};
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

   //service is  mocked here
   // xit('should call for the services', ()=>{
   //   spyOn(service, "checkLogIn");
   //    service.toString();
   //   component.ngOnInit();
   //   expect(AuthService.checkLogIn).toHaveBeenCalled();
   // });

     //  xit('testing.........................',()=>{
     //   let control = new FormControl();
     //   let button = fixture.debugElement.query(By.css('.login-form'));
     //   button.triggerEventHandler('ngSubmit',null);
     //  // expect(component.loginSubmit).toHaveBeenCalled();
     //   console.log(component);
     // });

      // xit('should test for the navigation after saving',()=>{
      //   let router = TestBed.get(Router);
      //   let spy = spyOn(router,'navigate');
      //   AuthService.checkLogIn();
      //   expect(spy).toHaveBeenCalledWith(['employees']);
      // });
});
