import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RegisterComponent} from './register.component';
import {RouterTestingModule} from '@angular/router/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from "@angular/core";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let email: DebugElement;
  let password: DebugElement;
  let submit: DebugElement;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
    email = fixture.debugElement.query(By.css('input[type=email]'));
    password = fixture.debugElement.query(By.css('input[type=password]'));
    submit = fixture.debugElement.query(By.css('button[type=submit]'));
  });

  it('should create the register component', () => {
    expect(component).toBeTruthy();
  });

  it('should fail with invalid email', () => {
    let email = component.email;
    expect(email.valid).toBeFalsy();
    let errors = {};
    errors = email.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should fail with invalid password', () => {
    let password = component.password;
    expect(password.valid).toBeFalsy();
    let errors = {};
    errors = password.errors || {};
    expect(errors['required']).toBeTruthy();
  });

  it('should not enable submit button if credentials are invalid', () => {
    fixture.detectChanges();
    expect(submit.nativeElement.disabled).toBeTruthy();
  });

    it('should have 3 controls',()=>{
      expect(component.registerForm.contains('name')).toBeTruthy();
      expect(component.registerForm.contains('email')).toBeTruthy();
      expect(component.registerForm.contains('password')).toBeTruthy();
    });

  it('should make the controls required', () => {
    let usernameControl = component.registerForm.get('name'),
      emailControl = component.registerForm.get('email'),
      passwordControl = component.registerForm.get('password');
    usernameControl.setValue('');
    emailControl.setValue('');
    passwordControl.setValue('');
    expect(usernameControl.valid).toBeFalsy();
    expect(emailControl.valid).toBeFalsy();
    expect(passwordControl.valid).toBeFalsy();
  });

});
