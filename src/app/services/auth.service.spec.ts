import {TestBed, inject, async} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {AuthService} from './auth.service';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpParams, HttpRequest} from '@angular/common/http';
import {of} from "rxjs";
import {EmployeesService} from "./employees.service";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";

describe('AuthService', () => {
  let spyHttpService: jasmine.SpyObj<HttpClient>;
  let httpClientSpy: { get: jasmine.Spy };
  let service: AuthService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthService],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
  });

  beforeEach(() => {
     service = TestBed.get(AuthService);
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
    //service = new AuthService(<any> httpClientSpy);
    spyHttpService = jasmine.createSpyObj('HttpClient', ['post']);
   // service = new AuthService(<any> spyHttpService);
  });

  it('should create the auth service', () => {
     expect(service).toBeTruthy();
    expect(service.baseURL).toEqual('http://localhost:8080');
  });
  it('should check for the authentication token ', () => {
    const identity = localStorage.setItem("scribe-access-token", "abcd");
    service.checkLogIn();
  });

  it('should call the login User method', () => {
    expect(service.loginUser).toBeDefined();
  });

  xit('should get the employees', () => {
    const employeeData =
      [{ email: 'manasa@gmail.com', password:'manasa' }];
    const baseUrl = environment.baseURL;
    spyHttpService.post.and.returnValues(employeeData);

    service.registerUser(baseUrl).subscribe(employees => {
      expect(employees).toBe(employeeData);
    });
    expect(spyHttpService.post.calls.count()).toBe(1, 'one call');
  });


  it(`should expect a POST /auth/login`, async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.post('/auth/login', {email:'manasa@gmail.com', password:'1234'}).subscribe();

      backend.expectNone((req: HttpRequest<any>) => {
        return req.method === 'PUT';
      });

      backend.expectOne((req: HttpRequest<any>) => {
        return req.url === '/auth/login'
          && req.method === 'POST'
          && req.body.email=== 'manasa@gmail.com'
          && req.body.password === '1234';
      });

    })));

  it('should call the register user method', () => {
    expect(service.registerUser).toBeDefined();
  });

  it(`should expect a POST /auth/register`, async(inject([HttpClient, HttpTestingController],
    (http: HttpClient, backend: HttpTestingController) => {
      http.post('/auth/register', {name:'manasa',email:'manasa@gmail.com', password:'1234'}).subscribe();

      backend.expectNone((req: HttpRequest<any>) => {
        return req.method === 'PUT';
      });

      backend.expectOne((req: HttpRequest<any>) => {
        return req.url === '/auth/register'
          && req.method === 'POST'
          && req.body.name ==='manasa'
          && req.body.email=== 'manasa@gmail.com'
          && req.body.password === '1234';
      });
    })));
});
