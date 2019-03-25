(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-container {\r\n  display: inline-flex;\r\n  height: -webkit-fill-available;\r\n  width: -webkit-fill-available;\r\n}\r\n.nav-container{\r\n  background-color: #f1f1f1;\r\n}\r\n.main-container{\r\n  margin-left: 10px;\r\n  width: -webkit-fill-available;\r\n}\r\n.nav-list {\r\n  margin: 10px 50px;\r\n  font-family: cursive;\r\n}\r\n.nav-list a {\r\n  text-decoration: none;\r\n}\r\n.title {\r\n  font-family: cursive;\r\n  color: #52a2a7;\r\n  /* box-shadow: -6px -1px black; */\r\n  background-color: #35787d2e;\r\n  text-align: center;\r\n  margin: 5px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"title\">Scribe Edge</h1>\r\n<div class=\"app-container\">\r\n  <div *ngIf=\"authenticated\" class=\"nav-container\">\r\n    <nav class=\"nav-list\">\r\n      <a routerLink=\"employees\">Employees</a>\r\n    </nav>\r\n  </div>\r\n  <div class=\"main-container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Scribe Edge';
        var accessToken = localStorage.getItem('scribe-access-token');
        this.authenticated = !!(accessToken !== '' && accessToken);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.interceptors.ts":
/*!*************************************!*\
  !*** ./src/app/app.interceptors.ts ***!
  \*************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _http_interceptors_noop_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-interceptors/noop-interceptor */ "./src/app/http-interceptors/noop-interceptor.ts");
/* harmony import */ var _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http-interceptors/auth-interceptor */ "./src/app/http-interceptors/auth-interceptor.ts");



var httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_noop_interceptor__WEBPACK_IMPORTED_MODULE_1__["NoopInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _http_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_2__["AuthInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/employees.service */ "./src/app/services/employees.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employees_employees_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employees/employees.component */ "./src/app/employees/employees.component.ts");
/* harmony import */ var _app_interceptors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.interceptors */ "./src/app/app.interceptors.ts");
/* harmony import */ var _employees_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./employees/employee-details/employee-details.component */ "./src/app/employees/employee-details/employee-details.component.ts");
/* harmony import */ var _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./authentication/register/register.component */ "./src/app/authentication/register/register.component.ts");
/* harmony import */ var _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./authentication/login/login.component */ "./src/app/authentication/login/login.component.ts");
/* harmony import */ var _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./authentication/authentication.component */ "./src/app/authentication/authentication.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _employees_employees_component__WEBPACK_IMPORTED_MODULE_8__["EmployeesComponent"],
                _employees_employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeDetailsComponent"],
                _authentication_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _authentication_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: 'employees',
                        component: _employees_employees_component__WEBPACK_IMPORTED_MODULE_8__["EmployeesComponent"],
                        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
                    },
                    {
                        path: 'login',
                        component: _authentication_authentication_component__WEBPACK_IMPORTED_MODULE_13__["AuthenticationComponent"]
                    },
                    {
                        path: '',
                        redirectTo: '/employees',
                        pathMatch: 'full'
                    }
                ])
            ],
            providers: [_app_interceptors__WEBPACK_IMPORTED_MODULE_9__["httpInterceptorProviders"], _services_employees_service__WEBPACK_IMPORTED_MODULE_5__["EmployeesService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authentication/authentication.component.css":
/*!*************************************************************!*\
  !*** ./src/app/authentication/authentication.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  text-align: center;\r\n  margin: 50px auto;\r\n  width: 350px;\r\n}\r\n\r\n.auth-links {\r\n  display: flex;\r\n  margin: 0 10px;\r\n  width: 100%;\r\n}\r\n\r\n.auth-links a {\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n  font-size: 18px;\r\n  font-family: cursive;\r\n  padding: 5px 55px;\r\n  box-shadow: 0 0 7px darkgrey;\r\n  border-radius: 3px;\r\n  border: 1px solid transparent;\r\n}\r\n\r\n.auth-links a:hover{\r\n  box-shadow: none;\r\n  border: 1px solid #a9a9a980;\r\n}\r\n\r\n.auth-link--active{\r\n  color: #52a2a7;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authentication/authentication.component.html":
/*!**************************************************************!*\
  !*** ./src/app/authentication/authentication.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"auth-links\">\r\n    <div class=\"auth-links__login\">\r\n      <a [ngClass]=\"{'auth-link--active': authType == 'login'}\" (click)=\"authType='login'\">login</a>\r\n    </div>\r\n    <div class=\"auth-links__register\">\r\n      <a [ngClass]=\"{'auth-link--active': authType == 'register'}\" (click)=\"authType='register'\">Register</a>\r\n    </div>\r\n  </div>\r\n  <app-login *ngIf=\"authType == 'login'\">\r\n  </app-login>\r\n  <app-register *ngIf=\"authType == 'register'\">\r\n  </app-register>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/authentication.component.ts":
/*!************************************************************!*\
  !*** ./src/app/authentication/authentication.component.ts ***!
  \************************************************************/
/*! exports provided: AuthenticationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationComponent", function() { return AuthenticationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthenticationComponent = /** @class */ (function () {
    function AuthenticationComponent() {
        this.authType = 'login';
    }
    AuthenticationComponent.prototype.ngOnInit = function () {
    };
    AuthenticationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-authentication',
            template: __webpack_require__(/*! ./authentication.component.html */ "./src/app/authentication/authentication.component.html"),
            styles: [__webpack_require__(/*! ./authentication.component.css */ "./src/app/authentication/authentication.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AuthenticationComponent);
    return AuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/authentication/login/login.component.css":
/*!**********************************************************!*\
  !*** ./src/app/authentication/login/login.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\r\n  margin: 10px;\r\n  background-color: #efefef80;\r\n  box-shadow: 0 1px 20px #c9d3d4;\r\n}\r\n\r\n.login-form-control{\r\n  padding:10px 10px 10px 20px;\r\n  text-align: left;\r\n  font-family: cursive;\r\n}\r\n\r\n.login-form input {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  width: 250px;\r\n  border: 1px solid #d6e5e8;\r\n}\r\n\r\n.login-form button {\r\n  margin: 10px 0;\r\n  padding: 10px;\r\n  /* font-family: cursive; */\r\n  border: none;\r\n  box-shadow: 0px 2px 13px #989898;\r\n  background-color: #52a2a7;\r\n  color: white;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n}\r\n\r\n.login-form-errors {\r\n  text-align: left;\r\n  margin: 0 10px;\r\n}\r\n\r\n.login-form-errors span {\r\n  display: inherit;\r\n  background-color: #ff5f5f;\r\n  color: white;\r\n  padding: 5px 5px;\r\n  border: 1px solid red;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  font-family: cursive;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.html":
/*!***********************************************************!*\
  !*** ./src/app/authentication/login/login.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" class=\"login-form\" (ngSubmit)=\"loginSubmit()\">\r\n  <div class=\"login-form-control\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"text\" name=\"email\" id=\"email\" placeholder=\"Your email\"\r\n      formControlName=\"email\">\r\n    </div>\r\n    <div class=\"login-form-control\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" name=\"password\" placeholder=\"Your password\"\r\n      formControlName=\"password\">\r\n    </div>\r\n      <button type=\"submit\" name=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\r\n</form>\r\n<div class=\"login-form-errors\">\r\n  <span *ngIf=\"email.errors?.invalidEmail  && email.touched\">Enter a valid email!</span>\r\n  <span *ngIf=\"password.errors?.length && password.touched\">Password must be minimum of 6 letters</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/login/login.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_password_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/password-length */ "./src/app/validators/password-length.ts");
/* harmony import */ var _validators_valid_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/valid-email */ "./src/app/validators/valid-email.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, service, router) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        if (AuthService.checkLogIn()) {
            this.router.navigate(['employees']);
        }
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_valid_email__WEBPACK_IMPORTED_MODULE_3__["validateEmail"]]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_password_length__WEBPACK_IMPORTED_MODULE_2__["validatePassword"]]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "email", {
        get: function () {
            return this.loginForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.loginSubmit = function () {
        var postData = this.loginForm.value;
        this.service.loginUser(postData)
            .subscribe(function (response) {
            if (response.auth) {
                localStorage.setItem('scribe-access-token', response.token);
                // this.router.navigate(['employees']);
                window.location.href = document.location.origin + '/employees';
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/authentication/register/register.component.css":
/*!****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-form {\r\n  margin: 10px;\r\n  background-color: #efefef80;\r\n  box-shadow: 0px 1px 20px #c9d3d4;\r\n}\r\n\r\n.register-form-control {\r\n  padding: 10px 10px 10px 20px;\r\n  text-align: left;\r\n  font-family: cursive;\r\n}\r\n\r\n.register-form input {\r\n  margin: 10px;\r\n  padding: 10px;\r\n  width: 250px;\r\n  border: 1px solid #d6e5e8;\r\n}\r\n\r\n.register-form button {\r\n  margin: 10px 0;\r\n  padding: 10px;\r\n  /* font-family: cursive; */\r\n  border: none;\r\n  box-shadow: 0px 2px 13px #989898;\r\n  background-color: #52a2a7;\r\n  color: white;\r\n  border-radius: 5px;\r\n  font-size: 16px;\r\n  cursor: pointer;\r\n}\r\n\r\n.register-form-errors {\r\n  text-align: left;\r\n  margin: 0 10px;\r\n}\r\n\r\n.register-form-errors span {\r\n  display: inherit;\r\n  background-color: #ff5f5f;\r\n  color: white;\r\n  padding: 5px 5px;\r\n  border: 1px solid red;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  font-family: cursive;\r\n}\r\n"

/***/ }),

/***/ "./src/app/authentication/register/register.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/authentication/register/register.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" class=\"register-form\" (ngSubmit)=\"loginSubmit()\">\r\n  <div class=\"register-form-control\">\r\n    <label for=\"username\">Username</label>\r\n    <input type=\"text\" name=\"name\" id=\"username\" placeholder=\"create a username\"\r\n      formControlName=\"name\">\r\n    </div>\r\n  <div class=\"register-form-control\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Your email\"\r\n      formControlName=\"email\">\r\n    </div>\r\n    <div class=\"register-form-control\">\r\n      <label for=\"password\">Password</label>\r\n      <input type=\"password\" name=\"password\" placeholder=\"Your password\"\r\n      formControlName=\"password\">\r\n    </div>\r\n      <button type=\"submit\" name=\"submit\" [disabled]=\"!registerForm.valid\">Register</button>\r\n</form>\r\n<div class=\"register-form-errors\">\r\n  <span *ngIf=\"email.errors?.invalidEmail  && email.touched\">Enter a valid email!</span>\r\n  <span *ngIf=\"password.errors?.length && password.touched\">Password must be minimum of 6 letters</span>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/authentication/register/register.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/authentication/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_password_length__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/password-length */ "./src/app/validators/password-length.ts");
/* harmony import */ var _validators_valid_email__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/valid-email */ "./src/app/validators/valid-email.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, service, router) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.loggedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.registerForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_valid_email__WEBPACK_IMPORTED_MODULE_3__["validateEmail"]]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _validators_password_length__WEBPACK_IMPORTED_MODULE_2__["validatePassword"]]]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(RegisterComponent.prototype, "email", {
        get: function () {
            return this.registerForm.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterComponent.prototype, "password", {
        get: function () {
            return this.registerForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.loginSubmit = function () {
        var postData = this.registerForm.value;
        this.service.registerUser(postData)
            .subscribe(function (response) {
            if (response.auth) {
                localStorage.setItem('scribe-access-token', response.token);
                // this.router.navigate(['employees']);
                window.location.href = document.location.origin + '/employees';
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], RegisterComponent.prototype, "loggedIn", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee-details/employee-details.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/employees/employee-details/employee-details.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/employees/employee-details/employee-details.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/employees/employee-details/employee-details.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n {{title}}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/employees/employee-details/employee-details.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/employees/employee-details/employee-details.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmployeeDetailsComponent = /** @class */ (function () {
    function EmployeeDetailsComponent() {
        this.title = 'employee details';
    }
    EmployeeDetailsComponent.prototype.ngOnInit = function () {
    };
    EmployeeDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employee-details',
            template: __webpack_require__(/*! ./employee-details.component.html */ "./src/app/employees/employee-details/employee-details.component.html"),
            styles: [__webpack_require__(/*! ./employee-details.component.css */ "./src/app/employees/employee-details/employee-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EmployeeDetailsComponent);
    return EmployeeDetailsComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/*!***************************************************!*\
  !*** ./src/app/employees/employees.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".employee-card {\r\n  display: inline-block;\r\n  padding: 20px;\r\n  border: 2px solid white;\r\n  box-shadow: 0px 1px 11px #d2d2d2;\r\n  margin: 5px;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  font-size: 18px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/*!****************************************************!*\
  !*** ./src/app/employees/employees.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"employee-card\" *ngFor=\"let e of employees\">{{e.name}}</div>\r\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/*!**************************************************!*\
  !*** ./src/app/employees/employees.component.ts ***!
  \**************************************************/
/*! exports provided: EmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesComponent", function() { return EmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/employees.service */ "./src/app/services/employees.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService) {
        var _this = this;
        this.employeeService = employeeService;
        this.employeeService.getEmployees()
            .subscribe(function (employees) { return _this.employees = employees; });
    }
    EmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-employees',
            template: __webpack_require__(/*! ./employees.component.html */ "./src/app/employees/employees.component.html"),
            styles: [__webpack_require__(/*! ./employees.component.css */ "./src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [_services_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/http-interceptors/auth-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/auth-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
        this.AuthToken = localStorage.getItem('scribe-access-token');
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        console.log('Auth Interceptors called!');
        if (this.AuthToken !== '' && this.AuthToken) {
            var authReq = req.clone({
                headers: req.headers.set('x-access-token', this.AuthToken)
            });
            console.log('x-access-token: ', authReq.headers.get('x-access-token'));
            return next.handle(authReq);
        }
        else {
            console.log('No scribe access token has been set!');
            return next.handle(req);
        }
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/http-interceptors/noop-interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/http-interceptors/noop-interceptor.ts ***!
  \*******************************************************/
/*! exports provided: NoopInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoopInterceptor", function() { return NoopInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/** Pass untouched request through to the next request handler. */
var NoopInterceptor = /** @class */ (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        console.log('noop interceptor called!');
        return next.handle(req);
    };
    NoopInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], NoopInterceptor);
    return NoopInterceptor;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(service, router) {
        this.service = service;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var loggedIn = AuthService.checkLogIn();
        if (!loggedIn) {
            this.router.navigate(['login']);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    AuthService.prototype.checkLogIn = function () {
        var JWT = localStorage.getItem('scribe-access-token');
        return !!(JWT !== '' && JWT);
    };
    AuthService.prototype.registerUser = function (data) {
        return this.http.post(this.baseURL + "/auth/register", data);
    };
    AuthService.prototype.loginUser = function (data) {
        return this.http.post(this.baseURL + "/auth/login", data);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/employees.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/employees.service.ts ***!
  \***********************************************/
/*! exports provided: EmployeesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesService", function() { return EmployeesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesService = /** @class */ (function () {
    function EmployeesService(http) {
        this.http = http;
        this.baseURL = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
    }
    EmployeesService.prototype.getEmployees = function () {
        return this.http.get(this.baseURL + "/employee");
    };
    EmployeesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmployeesService);
    return EmployeesService;
}());



/***/ }),

/***/ "./src/app/validators/password-length.ts":
/*!***********************************************!*\
  !*** ./src/app/validators/password-length.ts ***!
  \***********************************************/
/*! exports provided: validatePassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validatePassword", function() { return validatePassword; });
function validatePassword(control) {
    // console.log(control.value.length);
    if (control.value.length < 6) {
        return { length: true };
    }
    else {
        return null;
    }
}


/***/ }),

/***/ "./src/app/validators/valid-email.ts":
/*!*******************************************!*\
  !*** ./src/app/validators/valid-email.ts ***!
  \*******************************************/
/*! exports provided: validateEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateEmail", function() { return validateEmail; });
function validateEmail(control) {
    var email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    // console.log(control.value);
    if (email_regex.test(control.value)) {
        return null;
    }
    return {
        invalidEmail: true
    };
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseURL: 'http://localhost:8080',
    authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNzkwMWUxZjBlNzIyMjcyOGM0YTEzOCIsImlhdCI6MTU1MTQzNDIwOSwiZXhwIjoxNTUxNTIwNjA5fQ.BsFvAlGArR2oKZ1qa2rsn7vUKXumKzYu4UWEf7QXP1s'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mbasanna\WebstormProjects\poc2\node-apis\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
