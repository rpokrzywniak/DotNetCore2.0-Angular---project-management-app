webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/account/account.module": [
		"./src/app/account/account.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/account/account.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountModule", function() { return AccountModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__directives_email_validator_directive__ = __webpack_require__("./src/app/directives/email.validator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__account_routing__ = __webpack_require__("./src/app/account/account.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__registration_form_registration_form_component__ = __webpack_require__("./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__ = __webpack_require__("./src/app/account/login-form/login-form.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__account_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_3__shared_modules_shared_module__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__registration_form_registration_form_component__["a" /* RegistrationFormComponent */], __WEBPACK_IMPORTED_MODULE_5__directives_email_validator_directive__["a" /* EmailValidator */], __WEBPACK_IMPORTED_MODULE_8__login_form_login_form_component__["a" /* LoginFormComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__shared_services_user_service__["a" /* UserService */]]
        })
    ], AccountModule);
    return AccountModule;
}());



/***/ }),

/***/ "./src/app/account/account.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__ = __webpack_require__("./src/app/account/registration-form/registration-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__ = __webpack_require__("./src/app/account/login-form/login-form.component.ts");



var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forChild([
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_1__registration_form_registration_form_component__["a" /* RegistrationFormComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_form_login_form_component__["a" /* LoginFormComponent */] }
]);


/***/ }),

/***/ "./src/app/account/login-form/login-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\" *ngIf='showWaitGraphic'>\r\n  <div class=\"rect1\"></div>\r\n  <div class=\"rect2\"></div>\r\n  <div class=\"rect3\"></div>\r\n  <div class=\"rect4\"></div>\r\n  <div class=\"rect5\"></div>\r\n</div>\r\n<div *ngIf='!isMigrateMode'>\r\n  <div *ngIf='!showWaitGraphic'>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n\r\n        <div class=\"card\">\r\n          <div class=\"card-block\">\r\n\r\n            <div *ngIf=\"brandNew\" class=\"alert alert-success\" role=\"alert\">\r\n              <strong>Wszystko zrobione!</strong> Proszę zaloguj się swoim nowym kontem\r\n            </div>\r\n\r\n            <h4>Logowanie</h4>\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login($event)\">\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\"\r\n                       type=\"text\" placeholder=\"Twój login\" formControlName=\"username\" />\r\n                <small class=\"text-danger\" *ngIf=\"loginForm.get('username').invalid && loginForm.get('username').touched\">Wpisz nazwę użytkownika</small>\r\n                </div>\r\n              <div class=\"form-group\">\r\n                <input class=\"form-control\"\r\n                       type=\"password\" placeholder=\"Twoje hasło\" formControlName=\"password\" />\r\n                <small class=\"text-danger\" *ngIf=\"loginForm.get('password').invalid && loginForm.get('password').touched\">Wpisz hasło</small>\r\n                </div>\r\n              <div class=\"form-group\">\r\n                <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\">Zaloguj się!</button>\r\n                <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n              </div>\r\n              <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n                <strong>Oops!</strong> {{errors}}\r\n              </div>\r\n</form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n          </div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/login-form/login-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginFormComponent = (function () {
    function LoginFormComponent(userService, router, activatedRoute, fbLogin) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fbLogin = fbLogin;
        this.submitted = false;
        this.credentials = { userName: '', password: '' };
        this.loginForm = this.fbLogin.group({
            username: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            password: ["", __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    LoginFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe(function (param) {
            _this.brandNew = param['brandNew'];
            _this.credentials.userName = param['username'];
        });
    };
    LoginFormComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        var formData = this.loginForm.value;
        var username = formData.username;
        var password = formData.password;
        this.userService.login(username, password)
            .finally(function () { return _this.isRequesting = false; })
            .subscribe(function (result) {
            if (_this.userService.isAdmin()) {
                _this.router.navigate(['/usersList']);
            }
            else if (_this.userService.isWorker()) {
                _this.router.navigate(['/']);
            }
            else if (_this.userService.isStudent()) {
                _this.router.navigate(['/']);
            }
        }, function (error) { return _this.errors = error; });
    };
    LoginFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__("./src/app/account/login-form/login-form.component.html"),
            styles: [__webpack_require__("./src/app/account/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='!showWaitGraphic'>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h4>Rejestracja</h4>\r\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"registerUser($event)\">\r\n            <div class=\"form-group\">\r\n              <label for=\"username\">Nazwa użytkownika</label>\r\n              <input formControlName=\"username\" class=\"form-control\"\r\n                     type=\"text\" placeholder=\"Login\">\r\n              <small class=\"text-danger\" *ngIf=\"registerForm.get('username').invalid && registerForm.get('username').touched\">Minimalna długość 8, maksymalna 20</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"firstname\">Imię</label>\r\n              <input formControlName=\"firstname\" class=\"form-control\"\r\n                     type=\"text\" placeholder=\"Imię\">\r\n              <small class=\"text-danger\" *ngIf=\"registerForm.get('firstname').invalid && registerForm.get('firstname').touched\">Minimanla długość 2, maksymalna 20</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"lastname\">Nazwisko</label>\r\n              <input formControlName=\"lastname\" class=\"form-control\"\r\n                     type=\"text\" placeholder=\"Nazwisko\">\r\n              <small class=\"text-danger\" *ngIf=\"registerForm.get('lastname').invalid && registerForm.get('lastname').touched\">Minimalna długość 2, maksymalna 20</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"email\">Email</label>\r\n              <input formControlName=\"email\" class=\"form-control\"\r\n                     type=\"email\" placeholder=\"Email\">\r\n              <small class=\"text-danger\" *ngIf=\"registerForm.get('email').invalid && registerForm.get('email').touched\">Niepoprawny format e-mail</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"firstname\">Nr Indeksu</label>\r\n              <input formControlName=\"nrIndex\" class=\"form-control\"\r\n                     type=\"number\" placeholder=\"Nr Indeksu\">\r\n              <small class=\"text-danger\" *ngIf=\"registerForm.get('nrIndex').invalid && registerForm.get('nrIndex').touched\">Długość minimum 6</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"password\">Hasło</label>\r\n              <input formControlName=\"password\" class=\"form-control\"\r\n                     type=\"password\" placeholder=\"Hasło\">\r\n              <small class=\"text-danger\" *ngIf=\"registerForm.get('password').invalid && registerForm.get('password').touched\">Minimum 8 znaków, wymagane duże i małe litery, znak i cyfra</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"confirmpassword\">Potwierdź hasło</label>\r\n              <input formControlName=\"confirmpassword\" class=\"form-control\"\r\n                     type=\"password\" placeholder=\"Potwierdz hasło\">\r\n              <small class=\"text-danger\" *ngIf=\"registerForm.get('confirmpassword').invalid && registerForm.get('confirmpassword').touched\">Niezgodne hasło</small>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <button type=\"submit\" [disabled]=\"!registerForm.valid\" label=\"Rejestracja\" class=\"btn btn-primary\">Rejestruj</button>\r\n              <app-spinner [isRunning]=\"isRequesting\"></app-spinner>\r\n            </div>\r\n            <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n              <strong>Oops!</strong> {{errors}}\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n        <div class=\"spinner\" *ngIf='showWaitGraphic'>\r\n          <div class=\"rect1\"></div>\r\n          <div class=\"rect2\"></div>\r\n          <div class=\"rect3\"></div>\r\n          <div class=\"rect4\"></div>\r\n          <div class=\"rect5\"></div>\r\n        </div>\r\n"

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/account/registration-form/registration-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_validation_matchvalidation__ = __webpack_require__("./src/app/shared/validation/matchvalidation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_validation_passwordvalidation__ = __webpack_require__("./src/app/shared/validation/passwordvalidation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationFormComponent = (function () {
    function RegistrationFormComponent(userService, router, fb) {
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.submitted = false;
        this.registerForm = this.fb.group({
            username: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(8)]],
            firstname: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]],
            lastname: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].maxLength(20), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(2)]],
            email: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern("[a-z0-9!#$ %&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&' * +/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]],
            nrIndex: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].min(100000), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].max(9999999999)]],
            password: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_5__shared_validation_passwordvalidation__["a" /* passwordValidator */])({
                        minLength: 8,
                        maxLength: 16,
                        requireLetters: true,
                        requireLowerCaseLetters: true,
                        requireUpperCaseLetters: true,
                        requireNumbers: true,
                        requireSpecialCharacters: true
                    })]],
            confirmpassword: ["", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, Object(__WEBPACK_IMPORTED_MODULE_4__shared_validation_matchvalidation__["a" /* matchOtherValidator */])('password')]]
        });
    }
    RegistrationFormComponent.prototype.ngOnInit = function () {
    };
    RegistrationFormComponent.prototype.registerUser = function () {
        var _this = this;
        this.submitted = true;
        this.isRequesting = true;
        var formData = this.registerForm.value;
        var username = formData.username;
        var email = formData.email;
        var nrIndex = formData.nrIndex;
        var password = formData.password;
        var firstname = formData.firstname;
        var lastname = formData.lastname;
        this.errors = '';
        this.userService.register(username, firstname, lastname, email, nrIndex, password)
            .finally(function () { return _this.isRequesting = false; })
            .subscribe(function (result) {
            if (result) {
                _this.router.navigate(['/login'], { queryParams: { brandNew: true, username: username } });
            }
        }, function (errors) { return _this.errors = errors; });
    };
    RegistrationFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration-form',
            template: __webpack_require__("./src/app/account/registration-form/registration-form.component.html"),
            styles: [__webpack_require__("./src/app/account/registration-form/registration-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], RegistrationFormComponent);
    return RegistrationFormComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- app.component.html -->\r\n<app-header></app-header>\r\n\r\n<div class=\"container-fluid\" [style.width.%]=\"90\">\r\n\t<!-- Begin page content -->\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n<!-- /container -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "body {\n  padding-top: 5rem;\n  background-color: #f9f9f9; }\n\n.container-fluid {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n  max-width: 920px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.card {\n  -webkit-box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);\n          box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #eee;\n  border-radius: 3px; }\n\n.card-title {\n  margin: 0 !important;\n  font-size: 1.25rem; }\n\n.bg-white {\n  background: #fff; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_xhr_backend__ = __webpack_require__("./src/app/authenticate-xhr.backend.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("./node_modules/primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_contextmenu__ = __webpack_require__("./node_modules/primeng/contextmenu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_contextmenu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_contextmenu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_checkbox__ = __webpack_require__("./node_modules/primeng/checkbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_checkbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_checkbox__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_dropdown__ = __webpack_require__("./node_modules/primeng/dropdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_dialog__ = __webpack_require__("./node_modules/primeng/dialog.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__usersList_usersList_component__ = __webpack_require__("./src/app/usersList/usersList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__usersList_admin_admin_component__ = __webpack_require__("./src/app/usersList/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__usersList_worker_worker_component__ = __webpack_require__("./src/app/usersList/worker/worker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__usersList_student_student_component__ = __webpack_require__("./src/app/usersList/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__usersList_all_all_component__ = __webpack_require__("./src/app/usersList/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pastProjects_pastProjects_component__ = __webpack_require__("./src/app/pastProjects/pastProjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__notfound_notfound_component__ = __webpack_require__("./src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__myProject_myProject_component__ = __webpack_require__("./src/app/myProject/myProject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__account_account_module__ = __webpack_require__("./src/app/account/account.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_modules_shared_module__ = __webpack_require__("./src/app/shared/modules/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_app_workerPanel_workerPanel_component__ = __webpack_require__("./src/app/workerPanel/workerPanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_overlaypanel__ = __webpack_require__("./node_modules/primeng/overlaypanel.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_primeng_overlaypanel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_primeng_overlaypanel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_editor__ = __webpack_require__("./node_modules/primeng/editor.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_primeng_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_30_primeng_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_app_workerStudents_workerStudents_component__ = __webpack_require__("./src/app/workerStudents/workerStudents.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_components_common_messageservice__ = __webpack_require__("./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_32_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_components_chart_chart__ = __webpack_require__("./node_modules/primeng/components/chart/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_primeng_components_chart_chart___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_33_primeng_components_chart_chart__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















/* App Root */











/* Account Imports */









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_17__usersList_usersList_component__["a" /* UsersListComponent */],
                __WEBPACK_IMPORTED_MODULE_22__pastProjects_pastProjects_component__["a" /* PastProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__myProject_myProject_component__["a" /* MyProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_18__usersList_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_23__notfound_notfound_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_19__usersList_worker_worker_component__["a" /* WorkerComponent */],
                __WEBPACK_IMPORTED_MODULE_20__usersList_student_student_component__["a" /* StudentComponent */],
                __WEBPACK_IMPORTED_MODULE_28_app_workerPanel_workerPanel_component__["a" /* WorkerPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_31_app_workerStudents_workerStudents_component__["a" /* WorkerStudentsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__usersList_all_all_component__["a" /* AllComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_25__account_account_module__["AccountModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_contextmenu__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_6_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_dialog__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_29_primeng_overlaypanel__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_30_primeng_editor__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_checkbox__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_dropdown__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_26__shared_modules_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_33_primeng_components_chart_chart__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CardModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_13__app_routing__["a" /* routing */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_27__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_32_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_11_primeng_api__["ConfirmationService"], {
                    provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["h" /* XHRBackend */],
                    useClass: __WEBPACK_IMPORTED_MODULE_4__authenticate_xhr_backend__["a" /* AuthenticateXHRBackend */]
                }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_14__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__usersList_usersList_component__ = __webpack_require__("./src/app/usersList/usersList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pastProjects_pastProjects_component__ = __webpack_require__("./src/app/pastProjects/pastProjects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__myProject_myProject_component__ = __webpack_require__("./src/app/myProject/myProject.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notfound_notfound_component__ = __webpack_require__("./src/app/notfound/notfound.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_workerPanel_workerPanel_component__ = __webpack_require__("./src/app/workerPanel/workerPanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_workerStudents_workerStudents_component__ = __webpack_require__("./src/app/workerStudents/workerStudents.component.ts");








var appRoutes = [
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
    { path: 'usersList', component: __WEBPACK_IMPORTED_MODULE_2__usersList_usersList_component__["a" /* UsersListComponent */] },
    { path: 'pastProjects', component: __WEBPACK_IMPORTED_MODULE_3__pastProjects_pastProjects_component__["a" /* PastProjectsComponent */] },
    { path: 'myProject', component: __WEBPACK_IMPORTED_MODULE_4__myProject_myProject_component__["a" /* MyProjectComponent */] },
    { path: 'workerPanel', component: __WEBPACK_IMPORTED_MODULE_6_app_workerPanel_workerPanel_component__["a" /* WorkerPanelComponent */] },
    { path: 'workerStudents', component: __WEBPACK_IMPORTED_MODULE_7_app_workerStudents_workerStudents_component__["a" /* WorkerStudentsComponent */] },
    { path: 'notfound', component: __WEBPACK_IMPORTED_MODULE_5__notfound_notfound_component__["a" /* NotFoundComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: '**', redirectTo: 'notfound' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/authenticate-xhr.backend.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateXHRBackend; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
var AuthenticateXHRBackend = (function (_super) {
    __extends(AuthenticateXHRBackend, _super);
    function AuthenticateXHRBackend(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        return _super.call(this, _browserXhr, _baseResponseOptions, _xsrfStrategy) || this;
    }
    AuthenticateXHRBackend.prototype.createConnection = function (request) {
        var xhrConnection = _super.prototype.createConnection.call(this, request);
        xhrConnection.response = xhrConnection.response.catch(function (error) {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(error);
        });
        return xhrConnection;
    };
    AuthenticateXHRBackend = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BrowserXhr */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["f" /* ResponseOptions */], __WEBPACK_IMPORTED_MODULE_0__angular_http__["i" /* XSRFStrategy */]])
    ], AuthenticateXHRBackend);
    return AuthenticateXHRBackend;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["h" /* XHRBackend */]));



/***/ }),

/***/ "./src/app/directives/email.validator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


function validateEmailFactory() {
    return function (c) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
var EmailValidator = (function () {
    function EmailValidator() {
        this.validator = validateEmailFactory();
    }
    EmailValidator_1 = EmailValidator;
    EmailValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    EmailValidator = EmailValidator_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[validateEmail][ngModel],[validateEmail][formControl]',
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return EmailValidator_1; }), multi: true }
            ]
        }),
        __metadata("design:paramtypes", [])
    ], EmailValidator);
    return EmailValidator;
    var EmailValidator_1;
}());



/***/ }),

/***/ "./src/app/directives/focus.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return myFocus; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var myFocus = (function () {
    function myFocus(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    myFocus.prototype.ngOnInit = function () {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    };
    myFocus = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[tmFocus]' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], myFocus);
    return myFocus;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\r\n  <a class=\"navbar-brand\" routerLinkActive=\"active\" routerLink=\"\">Projekty</a>\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n\r\n    <ul *ngIf=\"userService.isLoggedIn()\" class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"userService.logout(); \" routerLinkActive=\"active\" routerLink=\"\">Wyloguj</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul *ngIf=\"userService.isAdmin()\" class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/usersList\">Użytkownicy</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul *ngIf=\"userService.isStudent()\" class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/myProject\">Mój projekt</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul *ngIf=\"userService.isStudent()\" class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/pastProjects\">Przeszłe projekty</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul *ngIf=\"userService.isWorker()\" class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/workerPanel\">Panel</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul *ngIf=\"userService.isWorker()\" class=\"nav navbar-nav navbar-left\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/workerStudents\">Studenci</a>\r\n      </li>\r\n    </ul>\r\n\r\n    <ul *ngIf=\"!userService.isLoggedIn()\" class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/register\">Rejestracja</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/login\">Zaloguj</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services_user_service__["a" /* UserService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p-table [columns]=\"cols\" [value]=\"lists\" [loading]=\"loading\" sortMode=\"multiple\">\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style]=\"col.width\">\r\n        {{col.header}}\r\n        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [ngClass]=\"rowData.id == idProject ? 'highlite' : null\">\r\n      <td *ngFor=\"let col of columns\">\r\n        <p *ngIf=\"col.field != 'starred'\">{{rowData[col.field]}}</p>\r\n        <i *ngIf=\"col.field == 'starred' && rowData[col.field]\" class=\"fa fa-star\" style=\"font-size:20px; text-shadow: 0px 0px 1px gray, 0px 0px 1px gray; color:#ffd76e;\"></i>\r\n        <i *ngIf=\"col.field == 'starred' && !rowData[col.field]\" class=\"fa fa-star-o\" style=\"font-size:20px; text-shadow: 0px 0px 1px gray; color:#ffd76e;\"></i>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".highlite {\n  background-color: #1CA979 !important;\n  color: #ffffff !important; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(http, configService, sanitizer, userService) {
        var _this = this;
        this.configService = configService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.baseUrl = '';
        this.val = 1;
        this.loading = true;
        this.errors = '';
        this.baseUrl = configService.getApiURI();
        if (userService.isStudent()) {
            var id = userService.getId();
            userService.postMyProjectRequest('/MyProject/myproject', id)
                .subscribe(function (result) {
                _this.list = result;
                if (_this.list == null || _this.list == undefined) {
                    _this.idProject = 0;
                }
                else
                    _this.idProject = _this.list.id;
            }, function (error) { return _this.errors = error; });
        }
        http.get(this.baseUrl + '/List/list').subscribe(function (result) {
            _this.lists = result.json();
            _this.loading = false;
        }, function (error) { return console.error(error); });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var dangerous = 'width: 2.25em;';
        var trusted = this.sanitizer.bypassSecurityTrustStyle('width: 2.25em;');
        this.cols = [
            { field: 'starred', header: '', width: trusted },
            { field: 'name', header: 'Nazwa', width: '' },
            { field: 'description', header: 'Opis', width: '' },
            { field: 'mentoring', header: 'Mentoring', width: '' }
        ];
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/myProject/myProject.component.html":
/***/ (function(module, exports) {

module.exports = "<p-confirmDialog></p-confirmDialog>\r\n<div *ngIf=\"confirmed\">\r\n  <div *ngIf=\"hasProject\">\r\n    <h4 *ngIf=\"lists.confirmed\">Projekt - Zatwierdzony</h4>\r\n    <h4 *ngIf=\"!lists.confirmed\">Projekt - Niezatwierdzony</h4>\r\n    <div style=\"float:left\">\r\n      <form [formGroup]=\"myProjectForm\" (ngSubmit)=\"UpdateProject($event)\">\r\n        <div class=\"form-group\">\r\n          <label for=\"name\">Nazwa</label>\r\n          <input formControlName=\"name\" class=\"form-control\"\r\n                 type=\"text\" [(ngModel)]=\"lists.name\">\r\n          <small class=\"text-danger\" *ngIf=\"myProjectForm.get('name').invalid && myProjectForm.get('name').touched\">Minimalna długość 8, maksymalna 20</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Opis</label>\r\n          <input formControlName=\"description\" class=\"form-control\"\r\n                 type=\"text\" [(ngModel)]=\"lists.description\">\r\n          <small class=\"text-danger\" *ngIf=\"myProjectForm.get('description').invalid && myProjectForm.get('description').touched\">Maksymalna długość 500</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"repoGit\">Repozytorium git</label>\r\n          <input formControlName=\"repoGit\" class=\"form-control\"\r\n                 type=\"text\" [(ngModel)]=\"lists.repoGit\">\r\n          <small class=\"text-danger\" *ngIf=\"myProjectForm.get('repoGit').invalid && myProjectForm.get('repoGit').touched\">Minimalna długość 2, maksymalna 20</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"mentoring\">Mentoring</label>\r\n          <input formControlName=\"mentoring\" class=\"form-control\"\r\n                 type=\"text\" [(ngModel)]=\"lists.mentoring\">\r\n          <small class=\"text-danger\" *ngIf=\"myProjectForm.get('mentoring').invalid && myProjectForm.get('mentoring').touched\">Niepoprawny</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"pblic\">Widoczność</label>\r\n          <p-checkbox formControlName=\"pblic\" class=\"form-control\" [(ngModel)]=\"pblic\" label=\"Publiczny\" binary=\"true\"></p-checkbox>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button type=\"submit\" *ngIf=\"!lists.confirmed\" [disabled]=\"!myProjectForm.valid\" label=\"Aktualizuj\" style=\"float:right\" class=\"btn btn-primary\">Aktualizuj</button>\r\n          <app-spinner [isRunning]=\"!isRequesting\"></app-spinner>\r\n        </div>\r\n        <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n          <strong>Oops!</strong> {{errors}}\r\n        </div>\r\n        <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\r\n          <strong>Projekt zaktualizowany!</strong>\r\n        </div>\r\n      </form>\r\n      <button *ngIf=\"lists.students.length==1 && !lists.confirmed\" label=\"Usuń projekt\" style=\"float:left\" class=\"btn alert-danger\" (click)=\"removeGroupDialog()\">Usuń projekt</button>\r\n      <button *ngIf=\"lists.students.length>1 && !lists.confirmed\" label=\"Opuść projekt\" style=\"float:left\" class=\"btn alert-danger\" (click)=\"leaveGroupDialog()\">Opuść projekt</button>\r\n    </div>\r\n    <div *ngIf=\"studentsLoaded\" class=\"col-md-6\" style=\"float:right\">\r\n      <div>\r\n        <h4>Studenci w projekcie: {{lists.students.length}}</h4>\r\n        <p-table [value]=\"lists.students\">\r\n          <ng-template pTemplate=\"header\">\r\n            <tr>\r\n              <th>Imię</th>\r\n              <th>Nazwisko</th>\r\n              <th>Nr indeksu</th>\r\n            </tr>\r\n          </ng-template>\r\n          <ng-template pTemplate=\"body\" let-student>\r\n            <tr>\r\n              <td>{{student.firstName}}</td>\r\n              <td>{{student.lastName}}</td>\r\n              <td>{{student.nrIndex}}</td>\r\n            </tr>\r\n          </ng-template>\r\n        </p-table>\r\n      </div>\r\n      <div style=\"margin-top:5%\">\r\n        <h4>Komentarz nauczyciela</h4>\r\n        <p-editor [(ngModel)]=\"lists.toChange\" [style]=\"{'height':'225px'}\" [readonly]=\"true\">\r\n          <p-header>\r\n          </p-header>\r\n        </p-editor>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-tabView *ngIf=\"!hasProject\">\r\n    <p-tabPanel header=\"Dołącz do istniejącego projektu\">\r\n      <p-table *ngIf='!hasProject' [columns]=\"cols\" [value]=\"list\" [loading]=\"loading\" [(contextMenuSelection)]=\"selectedList\" [contextMenu]=\"cm\" sortMode=\"multiple\">\r\n        <ng-template pTemplate=\"header\" let-columns>\r\n          <tr>\r\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style]=\"col.width\">\r\n              {{col.header}}\r\n              <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n            </th>\r\n          </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n          <tr [pContextMenuRow]=\"rowData\">\r\n            <td *ngFor=\"let col of columns\">\r\n              {{rowData[col.field]}}\r\n            </td>\r\n          </tr>\r\n        </ng-template>\r\n      </p-table>\r\n      <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\r\n    </p-tabPanel>\r\n    <p-tabPanel header=\"Stwórz własny projekt\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"card\">\r\n            <div class=\"card-block\">\r\n              <form [formGroup]=\"myProjectForm\" (ngSubmit)=\"CreateProject($event)\">\r\n                <div class=\"form-group\">\r\n                  <label for=\"name\">Nazwa</label>\r\n                  <input formControlName=\"name\" class=\"form-control\"\r\n                         type=\"text\">\r\n                  <small class=\"text-danger\" *ngIf=\"myProjectForm.get('name').invalid && myProjectForm.get('name').touched\">Minimalna długość 8, maksymalna 20</small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"description\">Opis</label>\r\n                  <input formControlName=\"description\" class=\"form-control\"\r\n                         type=\"text\">\r\n                  <small class=\"text-danger\" *ngIf=\"myProjectForm.get('description').invalid && myProjectForm.get('description').touched\">Maksymalna długość 500</small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"repoGit\">Repozytorium git</label>\r\n                  <input formControlName=\"repoGit\" class=\"form-control\"\r\n                         type=\"text\">\r\n                  <small class=\"text-danger\" *ngIf=\"myProjectForm.get('repoGit').invalid && myProjectForm.get('repoGit').touched\">Minimalna długość 2, maksymalna 20</small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"mentoring\">Mentoring</label>\r\n                  <input formControlName=\"mentoring\" class=\"form-control\"\r\n                         type=\"text\" [(ngModel)]=\"lists.mentoring\">\r\n                  <small class=\"text-danger\" *ngIf=\"myProjectForm.get('mentoring').invalid && myProjectForm.get('mentoring').touched\">Niepoprawny</small>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"pblic\">Widoczność</label>\r\n                  <p-checkbox formControlName=\"pblic\" class=\"form-control\" [(ngModel)]=\"pblic\" label=\"Publiczny\" binary=\"true\"></p-checkbox>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <button type=\"submit\" [disabled]=\"!myProjectForm.valid\" label=\"Stwórz\" class=\"btn btn-primary\">Stwórz</button>\r\n                  <app-spinner [isRunning]=\"!isRequesting\"></app-spinner>\r\n                </div>\r\n                <div *ngIf=\"errors\" class=\"alert alert-danger\" role=\"alert\">\r\n                  <strong>Oops!</strong> {{errors}}\r\n                </div>\r\n                <div *ngIf=\"success\" class=\"alert alert-success\" role=\"alert\">\r\n                  <strong>Projekt stworzony!</strong>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </p-tabPanel>\r\n  </p-tabView>\r\n</div>\r\n<div *ngIf=\"!confirmed\">\r\n  <h1>{{message}}</h1>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/myProject/myProject.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyProjectComponent = (function () {
    function MyProjectComponent(http, configService, userService, fb, router, confirmationService) {
        var _this = this;
        this.configService = configService;
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.confirmationService = confirmationService;
        this.students = [];
        this.baseUrl = '';
        this.success = false;
        this.loading = true;
        this.pblic = false;
        this.isRequesting = true;
        this.submitted = false;
        this.confirmed = false;
        this.message = "";
        this.myProjectForm = this.fb.group({
            name: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(20), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(8)]],
            repoGit: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(50), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(5)]],
            description: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(500), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(0)]],
            mentoring: ["", [__WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].maxLength(500), __WEBPACK_IMPORTED_MODULE_6__angular_forms__["Validators"].minLength(0)]],
            pblic: [""]
        });
        this.success = false;
        this.baseUrl = configService.getApiURI();
        this.isRequesting = true;
        this.errors = '';
        var id = userService.getId();
        userService.isConfirmed(id).subscribe(function (x) {
            _this.confirmed = x;
            _this.message = "Poproś nauczyciela o zatwierdzenie konta!";
        });
        userService.postMyProjectRequest('/MyProject/myproject', id).finally(function () { return _this.isRequesting = true; })
            .subscribe(function (result) {
            _this.lists = result;
            if (_this.lists !== null)
                _this.lists.students = [];
            if (_this.lists === null || _this.lists === undefined) {
                _this.hasProject = false;
                _this.isRequesting = false;
            }
            else {
                _this.pblic = _this.lists.pblic;
                http.get(_this.baseUrl + '/List/students').subscribe(function (result) {
                    _this.students = result.json();
                    for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                        var student = _a[_i];
                        if (student.projectId === _this.lists.id) {
                            _this.lists.students.push(student);
                        }
                    }
                    _this.studentsLoaded = true;
                });
                _this.hasProject = true;
            }
        }, function (error) { return _this.errors = error; });
        this.baseUrl = configService.getApiURI();
        http.get(this.baseUrl + '/List/projects').subscribe(function (result) {
            _this.list = result.json();
            _this.loading = false;
        }, function (error) { return console.error(error); });
    }
    MyProjectComponent.prototype.UpdateProject = function () {
        var _this = this;
        this.submitted = true;
        var formData = this.myProjectForm.value;
        var name = formData.name;
        var repoGit = formData.repoGit;
        var description = formData.description;
        var mentoring = formData.mentoring;
        this.errors = '';
        this.userService.postMyProjectUpdate('/MyProject/update', this.lists.id, name, repoGit, description, mentoring, this.pblic).finally(function () { return _this.isRequesting = true; })
            .subscribe(function (result) {
            _this.lists = result;
            _this.lists.students = [];
            for (var _i = 0, _a = _this.students; _i < _a.length; _i++) {
                var student = _a[_i];
                if (student.projectId === _this.lists.id) {
                    _this.lists.students.push(student);
                }
            }
            _this.pblic = _this.lists.pblic;
            _this.isRequesting = false;
            _this.success = true;
        }, function (error) { return _this.errors = error; });
    };
    MyProjectComponent.prototype.CreateProject = function () {
        var _this = this;
        this.submitted = true;
        var formData = this.myProjectForm.value;
        var name = formData.name;
        var repoGit = formData.repoGit;
        var description = formData.description;
        var mentoring = formData.mentoring;
        this.errors = '';
        this.userService.postMyProjectCreate('/MyProject/create', name, repoGit, description, mentoring, this.pblic).finally(function () { return _this.isRequesting = true; })
            .subscribe(function (result) {
            _this.lists = result;
            _this.isRequesting = false;
            _this.router.navigate(['/']);
        }, function (error) { return _this.errors = error; });
    };
    MyProjectComponent.prototype.JoinProject = function (list) {
        var _this = this;
        this.userService.postMyProjectJoin('/MyProject/join', list.id).finally(function () { return _this.isRequesting = true; })
            .subscribe(function (result) {
            _this.lists = result;
            _this.isRequesting = false;
            _this.router.navigate(['/']);
        }, function (error) { return _this.errors = error; });
    };
    MyProjectComponent.prototype.leaveGroup = function () {
        var _this = this;
        this.userService.leaveGroup().subscribe(function (x) {
            _this.router.navigate(['/']);
        });
    };
    MyProjectComponent.prototype.leaveGroupDialog = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Czy napewno chcesz opuścić tę grupę?',
            header: 'Potwierdzenie',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.leaveGroup();
            }
        });
    };
    MyProjectComponent.prototype.removeGroup = function () {
        var _this = this;
        this.userService.removeGroup().subscribe(function (x) { return _this.router.navigate(['/']); });
    };
    MyProjectComponent.prototype.removeGroupDialog = function () {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Czy napewno chcesz usunąć tę grupę?',
            header: 'Potwierdzenie',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.removeGroup();
            }
        });
    };
    MyProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        var dangerous = 'width: 2.25em;';
        this.cols = [
            { field: 'name', header: 'Nazwa', width: '' },
            { field: 'description', header: 'Opis', width: '' },
        ];
        this.items = [
            { label: 'Dołącz', icon: 'fa-plus', command: function (event) { return _this.JoinProject(_this.selectedList); } },
        ];
    };
    MyProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myProject',
            template: __webpack_require__("./src/app/myProject/myProject.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_5__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_3_primeng_api__["ConfirmationService"]])
    ], MyProjectComponent);
    return MyProjectComponent;
}());



/***/ }),

/***/ "./src/app/notfound/notfound.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!--<div *ngIf=\"lists\" class=\"content-section implementation\">\r\n  <p-dataList [style]=\"{'width':'90%','margin': 'auto', 'padding-top':'1%'}\" [value]=\"lists\" [paginator]=\"true\" [rows]=\"5\">\r\n    <p-header>\r\n      Projekty\r\n    </p-header>\r\n    <ng-template let-list pTemplate=\"item\">\r\n      <div class=\"ui-g ui-fluid car-item\">\r\n        <div class=\"ui-g-12 ui-md-3\" style=\"margin:auto\">\r\n          <img *ngIf=\"list.starred\" src=\"app/home/star-empty.png\" width=\"80\" height=\"80\" alt=\"\" />\r\n          <img *ngIf=\"!list.starred\" src=\"star-empty.png\" width=\"80\" height=\"80\" alt=\"\" />\r\n        </div>\r\n        <div class=\"ui-g-4 ui-md-9 car-details\">\r\n          <div class=\"ui-g\">\r\n            <div class=\"ui-g-2 \">Nazwa: <br /><br /><br /> {{list.name}} </div>\r\n\r\n            <div class=\"ui-g-2 \">Mentoring: </div>\r\n            <div class=\"ui-g-2 \">{{list.mentoring}}</div>\r\n\r\n            <div class=\"ui-g-2 \">Opis: </div>\r\n            <div class=\"ui-g-2 \">{{list.description}}</div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </p-dataList>\r\n</div>-->\r\n<h4>404 not found</h4>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/notfound/notfound.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-notfound',
            template: __webpack_require__("./src/app/notfound/notfound.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pastProjects/pastProjects.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Przeszłe projekty</h1>\r\n<p-table [columns]=\"cols\" [value]=\"lists\" [loading]=\"loading\" sortMode=\"multiple\">\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style]=\"col.width\">\r\n        {{col.header}}\r\n        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [ngClass]=\"rowData.id == idProject ? 'highlite' : null\">\r\n      <td *ngFor=\"let col of columns\">\r\n        <p *ngIf=\"col.field != 'starred'\">{{rowData[col.field]}}</p>\r\n        <i *ngIf=\"col.field == 'starred' && rowData[col.field]\" class=\"fa fa-star\" style=\"font-size:20px; text-shadow: 0px 0px 1px gray, 0px 0px 1px gray; color:#ffd76e;\"></i>\r\n        <i *ngIf=\"col.field == 'starred' && !rowData[col.field]\" class=\"fa fa-star-o\" style=\"font-size:20px; text-shadow: 0px 0px 1px gray; color:#ffd76e;\"></i>\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n"

/***/ }),

/***/ "./src/app/pastProjects/pastProjects.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pastProjects/pastProjects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PastProjectsComponent = (function () {
    function PastProjectsComponent(http, configService, sanitizer, userService) {
        var _this = this;
        this.configService = configService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.baseUrl = '';
        this.val = 1;
        this.loading = true;
        this.errors = '';
        this.baseUrl = configService.getApiURI();
        http.get(this.baseUrl + '/List/pastprojects').subscribe(function (result) {
            _this.lists = result.json();
            _this.loading = false;
        }, function (error) { return console.error(error); });
    }
    PastProjectsComponent.prototype.ngOnInit = function () {
        var trusted = this.sanitizer.bypassSecurityTrustStyle('width: 2.25em;');
        var dangerous = 'word-break: break-all;';
        var trusted2 = this.sanitizer.bypassSecurityTrustStyle(dangerous);
        this.cols = [
            { field: 'starred', header: '', width: trusted },
            { field: 'name', header: 'Nazwa', width: '' },
            { field: 'description', header: 'Opis', width: '' },
            { field: 'repoGit', header: 'Repozytorium', width: trusted2 },
            { field: 'mentoring', header: 'Mentoring', width: '' }
        ];
    };
    PastProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pastProjects',
            template: __webpack_require__("./src/app/pastProjects/pastProjects.component.html"),
            styles: [__webpack_require__("./src/app/pastProjects/pastProjects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]])
    ], PastProjectsComponent);
    return PastProjectsComponent;
}());



/***/ }),

/***/ "./src/app/rxjs-operators.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics


// Operators







/***/ }),

/***/ "./src/app/shared/modules/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__ = __webpack_require__("./src/app/directives/focus.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__ = __webpack_require__("./src/app/spinner/spinner.component.ts");
// include directives/components commonly used in features modules in this shared modules
// and import me into the feature module
// importing them individually results in: Type xxx is part of the declarations of 2 modules: ... Please consider moving to a higher module...
// https://github.com/angular/angular/issues/10646  
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__["a" /* myFocus */], __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__["a" /* SpinnerComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__directives_focus_directive__["a" /* myFocus */], __WEBPACK_IMPORTED_MODULE_3__spinner_spinner_component__["a" /* SpinnerComponent */]],
            providers: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");

var BaseService = (function () {
    function BaseService() {
    }
    BaseService.prototype.handleError = function (error) {
        var applicationError = error.headers.get('Application-Error');
        // either applicationError in header or model error in body
        if (applicationError) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Observable */].throw(applicationError);
        }
        var modelStateErrors = '';
        var serverError = error.json();
        if (!serverError.type) {
            for (var key in serverError) {
                if (serverError[key])
                    modelStateErrors += serverError[key] + '\n';
            }
        }
        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Observable */].throw(modelStateErrors || 'Server error');
    };
    return BaseService;
}());



/***/ }),

/***/ "./src/app/shared/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__ = __webpack_require__("./node_modules/jsonwebtoken/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_service__ = __webpack_require__("./src/app/shared/services/base.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rxjs_operators__ = __webpack_require__("./src/app/rxjs-operators.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import * as _ from 'lodash';
// Add the RxJS Observable operators we need in this app.

var UserService = (function (_super) {
    __extends(UserService, _super);
    function UserService(http, configService) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.configService = configService;
        _this.baseUrl = '';
        // Observable navItem source
        _this._authNavStatusSource = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* BehaviorSubject */](false);
        _this._admin = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* BehaviorSubject */](false);
        _this._worker = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* BehaviorSubject */](false);
        _this._student = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* BehaviorSubject */](false);
        _this._id = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__["a" /* BehaviorSubject */]("");
        // Observable navItem stream
        _this.authNavStatus$ = _this._authNavStatusSource.asObservable();
        _this.adminA = _this._admin.asObservable();
        _this.workerA = _this._worker.asObservable();
        _this.studentA = _this._student.asObservable();
        _this.idA = _this._id.asObservable();
        _this.loggedIn = localStorage.getItem('logged_in');
        console.log(_this.loggedIn);
        _this.subscription = _this.authNavStatus$.subscribe(function (status) { return _this.status = status; }); // zrobic w user services subskrybcje
        _this.subscriptionA = _this.adminA.subscribe(function (admin) { return _this.admin = admin; });
        _this.subscriptionW = _this.workerA.subscribe(function (worker) { return _this.worker = worker; });
        _this.subscriptionS = _this.studentA.subscribe(function (student) { return _this.student = student; });
        _this.subscriptionI = _this.idA.subscribe(function (id) { return _this.id = id; });
        if (_this.loggedIn !== "true") {
            console.log("niezalogowany");
            _this._authNavStatusSource.next(false);
            _this._admin.next(false);
            _this._worker.next(false);
            _this._student.next(false);
            _this._id.next("");
            // ?? not sure if this the best way to broadcast the status but seems to resolve issue on page refresh where auth status is lost in
            // header component resulting in authed user nav links disappearing despite the fact user is still logged in
        }
        else {
            _this.decodeToken();
            _this._authNavStatusSource.next(true);
        }
        _this.baseUrl = configService.getApiURI();
        return _this;
    }
    UserService.prototype.decodeToken = function () {
        var decoded = Object(__WEBPACK_IMPORTED_MODULE_3_jsonwebtoken__["decode"])(localStorage.getItem('auth_token'));
        var obj = JSON.parse(JSON.stringify(decoded));
        this._id.next(obj.id);
        if (obj.rol === "api_admin_access") {
            this._admin.next(true);
        }
        else if (obj.rol === "api_worker_access") {
            this._worker.next(true);
        }
        else if (obj.rol === "api_student_access") {
            this._student.next(true);
        }
    };
    UserService.prototype.isAdmin = function () {
        return this.admin;
    };
    UserService.prototype.isWorker = function () {
        return this.worker;
    };
    UserService.prototype.isStudent = function () {
        return this.student;
    };
    UserService.prototype.isLoggedIn = function () {
        return this.status;
    };
    UserService.prototype.getId = function () {
        return this.id;
    };
    UserService.prototype.isConfirmed = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        params.set('id', id);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        requestOptions.search = params;
        return this.http.get(this.baseUrl + '/Student/confirmed', requestOptions).map(function (res) { return res.json(); });
    };
    UserService.prototype.register = function (userName, firstName, lastName, email, nrIndex, password) {
        var body = JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName, userName: userName, nrIndex: nrIndex });
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.baseUrl + "/accounts", body, options)
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.login = function (userName, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        console.log(this.baseUrl + '/auth/login');
        return this.http
            .post(this.baseUrl + '/auth/login', JSON.stringify({ userName: userName, password: password }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            console.log("logowanie");
            localStorage.setItem('auth_token', res.auth_token);
            localStorage.setItem('logged_in', "true");
            _this.loggedIn = true;
            _this._authNavStatusSource.next(true);
            _this.decodeToken();
            return true;
        })
            .catch(this.handleError);
    };
    UserService.prototype.postMyProjectRequest = function (url, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify(id), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.postMyProjectUpdate = function (url, id, name, repoGit, description, mentoring, pblic) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify({ id: id, name: name, repoGit: repoGit, description: description, mentoring: mentoring, pblic: pblic }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.postMyProjectCreate = function (url, name, repoGit, description, mentoring, pblic) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var id = this.getId();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify({ id: id, name: name, repoGit: repoGit, description: description, mentoring: mentoring, pblic: pblic }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.postMyProjectJoin = function (url, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var idStudent = this.getId();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify({ id: id, idStudent: idStudent }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.studentUpdate = function (url, id, identityId, nrIndex, projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify({ id: id, identityId: identityId, nrIndex: nrIndex, projectId: projectId }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.workerUpdate = function (url, id, identityId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify({ id: id, identityId: identityId }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.studentCreate = function (url, identityId, nrIndex, projectId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify({ identityId: identityId, nrIndex: nrIndex, projectId: projectId }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.workerCreate = function (url, identityId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify({ identityId: identityId }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.studentDelete = function (url, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        console.log(url);
        return this.http
            .post(url, JSON.stringify(id), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.projectStar = function (url, id, starred) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        starred = !starred;
        return this.http
            .put(url, JSON.stringify({ id: id, starred: starred }), { headers: headers })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.projectToChange = function (url, project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        return this.http
            .put(url, JSON.stringify(project), { headers: headers })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.projectConfirm = function (url, project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        return this.http
            .put(url, JSON.stringify(project), { headers: headers })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.studentConfirm = function (url, student) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        url = this.baseUrl + url;
        return this.http
            .put(url, JSON.stringify(student), { headers: headers })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.getGroups = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        params.set('id', id);
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        requestOptions.search = params;
        return this.http.get(this.baseUrl + '/Worker/groups', requestOptions).map(function (res) { return res.json(); });
    };
    UserService.prototype.createGroup = function (name) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var id = this.getId();
        console.log(name);
        return this.http.post(this.baseUrl + '/Worker/creategroup', JSON.stringify({ id: id, name: name }), { headers: headers }).map(function (res) { return res.json(); });
    };
    UserService.prototype.removeGroup = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(this.baseUrl + '/Student/removegroup', JSON.stringify(this.getId()), { headers: headers })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.leaveGroup = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(this.baseUrl + '/Student/leavegroup', JSON.stringify(this.getId()), { headers: headers })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.removeWorkerGroup = function (group) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http
            .put(this.baseUrl + '/Worker/deletegroup', JSON.stringify(group), { headers: headers })
            .map(function (res) { return true; })
            .catch(this.handleError);
    };
    UserService.prototype.getNotConfirmedStudents = function () {
        return this.http.get(this.baseUrl + '/Student/notconfirmedstudents').map(function (res) { return res.json(); });
    };
    UserService.prototype.getConfirmedStudents = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* URLSearchParams */]();
        params.set('id', this.getId());
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]();
        requestOptions.search = params;
        return this.http.get(this.baseUrl + '/Student/confirmedstudents', requestOptions).map(function (res) { return res.json(); });
    };
    UserService.prototype.freeUsers = function () {
        return this.http.get(this.baseUrl + '/UsersList/free').map(function (res) { return res.json(); }).map(function (res) {
            return res;
        })
            .catch(this.handleError);
    };
    UserService.prototype.logout = function () {
        console.log("logout");
        this._admin.next(false);
        this._worker.next(false);
        this._student.next(false);
        this._authNavStatusSource.next(false);
        localStorage.setItem('logged_in', "false");
        localStorage.removeItem('auth_token');
    };
    UserService.prototype.ngOnDestroy = function () {
        // prevent memory leak when component is destroyed
        this.subscription.unsubscribe();
        this.subscriptionA.unsubscribe();
        this.subscriptionW.unsubscribe();
        this.subscriptionS.unsubscribe();
        this.subscriptionI.unsubscribe();
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__utils_config_service__["a" /* ConfigService */]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_4__base_service__["a" /* BaseService */]));



/***/ }),

/***/ "./src/app/shared/utils/config.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfigService = (function () {
    function ConfigService() {
        this._apiURI = 'http://projectmanagementapplication.azurewebsites.net/api';
    }
    ConfigService.prototype.getApiURI = function () {
        return this._apiURI;
    };
    ConfigService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/shared/validation/matchvalidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matchOtherValidator;
function matchOtherValidator(otherControlName) {
    var thisControl;
    var otherControl;
    return function matchOtherValidate(control) {
        if (!control.parent) {
            return null;
        }
        // Initializing the validator.
        if (!thisControl) {
            thisControl = control;
            otherControl = control.parent.get(otherControlName);
            if (!otherControl) {
                throw new Error('matchOtherValidator(): other control is not found in parent group');
            }
            otherControl.valueChanges.subscribe(function () {
                thisControl.updateValueAndValidity();
            });
        }
        if (!otherControl) {
            return null;
        }
        if (otherControl.value !== thisControl.value) {
            return {
                matchOther: true
            };
        }
        return null;
    };
}


/***/ }),

/***/ "./src/app/shared/validation/passwordvalidation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = passwordValidator;
/* unused harmony export PasswordValidator */
function passwordValidator(options) {
    var validator = new PasswordValidator(options);
    return function validatePassword(control) {
        return validator.validate(control.value);
    };
}
var PasswordValidator = (function () {
    function PasswordValidator(options) {
        this.options = options;
        this.letterMatcher = /[a-zA-Z]/;
        this.lowerCaseLetterMatcher = /[a-z]/;
        this.upperCaseLetterMatcher = /[A-Z]/;
        this.numberMatcher = /[0-9]/;
        this.specialCharactersMatcher = /[-+=_.,:;~`!@#$%^&*(){}<>\[\]"'\/\\]/;
    }
    PasswordValidator.prototype.validate = function (value) {
        if (!value) {
            return null;
        }
        var errors = {};
        // Minimum length.
        if (this.options.minLength > 0 && value.length < this.options.minLength) {
            errors.passwordMinLengthRequired = {
                minLength: this.options.minLength
            };
        }
        // Maximum length.
        if (this.options.maxLength >= 0 && value.length > this.options.maxLength) {
            errors.passwordMaxLengthExceeded = {
                maxLength: this.options.maxLength
            };
        }
        // Letters.
        if (this.options.requireLetters && !this.letterMatcher.test(value)) {
            errors.passwordLetterRequired = true;
        }
        // Lower-case letters.
        if (this.options.requireLowerCaseLetters && !this.lowerCaseLetterMatcher.test(value)) {
            errors.passwordLowerCaseLetterRequired = true;
        }
        // Upper-case letters.
        if (this.options.requireUpperCaseLetters && !this.upperCaseLetterMatcher.test(value)) {
            errors.passwordUpperCaseLetterRequired = true;
        }
        // Numbers.
        if (this.options.requireNumbers && !this.numberMatcher.test(value)) {
            errors.passwordNumberRequired = true;
        }
        // Special characters.
        if (this.options.requireSpecialCharacters && !this.specialCharactersMatcher.test(value)) {
            errors.passwordSpecialCharacterRequired = true;
        }
        return Object.keys(errors).length > 0 ? errors : null;
    };
    return PasswordValidator;
}());



/***/ }),

/***/ "./src/app/spinner/spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"!isDelayedRunning\" class=\"spinner\">  \r\n    <div class=\"double-bounce1\"></div>\r\n    <div class=\"double-bounce2\"></div>\r\n</div> "

/***/ }),

/***/ "./src/app/spinner/spinner.component.scss":
/***/ (function(module, exports) {

module.exports = ".spinner {\n  width: 40px;\n  height: 40px;\n  position: relative;\n  margin: 30px auto; }\n\n.double-bounce1, .double-bounce2 {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: #333;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;\n  animation: sk-bounce 2.0s infinite ease-in-out; }\n\n.double-bounce2 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n@-webkit-keyframes sk-bounce {\n  0%, 100% {\n    -webkit-transform: scale(0); }\n  50% {\n    -webkit-transform: scale(1); } }\n\n@keyframes sk-bounce {\n  0%, 100% {\n    transform: scale(0);\n    -webkit-transform: scale(0); }\n  50% {\n    transform: scale(1);\n    -webkit-transform: scale(1); } }\n"

/***/ }),

/***/ "./src/app/spinner/spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpinnerComponent = (function () {
    function SpinnerComponent() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    Object.defineProperty(SpinnerComponent.prototype, "isRunning", {
        set: function (value) {
            var _this = this;
            if (!value) {
                this.cancelTimeout();
                this.isDelayedRunning = false;
                return;
            }
            if (this.currentTimeout) {
                return;
            }
            // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
            this.currentTimeout = window.setTimeout(function () {
                _this.isDelayedRunning = value;
                _this.cancelTimeout();
            }, this.delay);
        },
        enumerable: true,
        configurable: true
    });
    SpinnerComponent.prototype.cancelTimeout = function () {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    };
    SpinnerComponent.prototype.ngOnDestroy = function () {
        this.cancelTimeout();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], SpinnerComponent.prototype, "delay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], SpinnerComponent.prototype, "isRunning", null);
    SpinnerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinner',
            template: __webpack_require__("./src/app/spinner/spinner.component.html"),
            styles: [__webpack_require__("./src/app/spinner/spinner.component.scss")]
        })
    ], SpinnerComponent);
    return SpinnerComponent;
}());



/***/ }),

/***/ "./src/app/usersList/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<p-table *ngIf=\"loading\" [columns]=\"cols\" [value]=\"admins\" selectionMode=\"single\" [(selection)]=\"selectedAdmin\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\">\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"summary\" let-rowData>\r\n    <div style=\"text-align:left\">\r\n      <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Dodaj\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n</p-table>\r\n\r\n<p-dialog header=\"Administrator\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\r\n  <div class=\"ui-g ui-fluid\" *ngIf=\"loading\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"vin\">Login</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <p-dropdown [options]=\"freeUsers\" [(ngModel)]=\"chosenUser\" optionLabel=\"userName\" [disabled]=\"!newAdmin\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Usuń\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Zapisz\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/usersList/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminComponent = (function () {
    function AdminComponent(http, configService, userService) {
        var _this = this;
        this.configService = configService;
        this.userService = userService;
        this.baseUrl = '';
        this.admin = {};
        this.loading = false;
        this.baseUrl = configService.getApiURI();
        http.get(this.baseUrl + '/UsersList/admins').subscribe(function (result) {
            _this.admins = result.json();
            http.get(_this.baseUrl + '/UsersList/users').subscribe(function (result) {
                _this.users = result.json();
                for (var i = 0; i < _this.admins.length; i++) {
                    for (var j = 0; j < _this.users.length; j++) {
                        if (_this.admins[i].identityId === _this.users[j].id)
                            _this.admins[i].userName = _this.users[j].userName;
                    }
                }
                http.get(_this.baseUrl + '/UsersList/free').subscribe(function (result) {
                    _this.freeUsers = result.json();
                    _this.chosenUser = _this.freeUsers[0];
                    _this.loading = true;
                }, function (error) { return console.error(error); });
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'userName', header: 'Login' },
        ];
    };
    AdminComponent.prototype.showDialogToAdd = function () {
        this.chosenUser = this.freeUsers[0];
        this.newAdmin = true;
        this.admin = {};
        this.displayDialog = true;
    };
    AdminComponent.prototype.save = function () {
        var admins = this.admins.slice();
        if (this.newAdmin) {
            this.admin.identityId = this.chosenUser.id;
            this.admin.userName = this.chosenUser.userName;
            admins.push(this.admin);
        }
        else {
            admins[this.admins.indexOf(this.selectedAdmin)] = this.admin;
        }
        this.admins = admins;
        this.admin = {};
        this.displayDialog = false;
    };
    AdminComponent.prototype.delete = function () {
        var index = this.admins.indexOf(this.selectedAdmin);
        this.admins = this.admins.filter(function (val, i) { return i != index; });
        this.admin = {};
        this.displayDialog = false;
    };
    AdminComponent.prototype.onRowSelect = function (event) {
        this.newAdmin = false;
        this.admin = this.cloneWorker(event.data);
        this.displayDialog = true;
    };
    AdminComponent.prototype.cloneWorker = function (s) {
        var admin = {};
        for (var prop in s) {
            admin[prop] = s[prop];
        }
        return admin;
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("./src/app/usersList/admin/admin.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_3_app_shared_services_user_service__["a" /* UserService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/usersList/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<p-table *ngIf=\"loading\" [columns]=\"cols\" [value]=\"users\" selectionMode=\"single\" [(selection)]=\"selectedUser\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\">\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"summary\" let-rowData>\r\n    <div style=\"text-align:left\">\r\n      <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Dodaj\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n</p-table>\r\n\r\n<p-dialog header=\"Użytkownicy\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\r\n  <div class=\"ui-g ui-fluid\" *ngIf=\"loading\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"vin\">Rola</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"role\" [(ngModel)]=\"user.role\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"year\">Imię</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"firstName\" [(ngModel)]=\"user.firstName\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">Nazwisko</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"lastName\" [(ngModel)]=\"user.lastName\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">E-mail</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"email\" [(ngModel)]=\"user.email\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">E-mail potwierdzony</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"emailConfirmed\" [(ngModel)]=\"user.emailConfirmed\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">Nazwa użytkownika</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"userName\" [(ngModel)]=\"user.userName\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">Nr telefonu</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"phoneNumber\" [(ngModel)]=\"user.phoneNumber\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">Możliwość zablokowania</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"lockoutEnabled\" [(ngModel)]=\"user.lockoutEnabled\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">Koniec zablokowania</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"lockoutEnd\" [(ngModel)]=\"user.lockoutEnd\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"brand\">Ilość nieudanych logowań</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"accessFailedCount\" [(ngModel)]=\"user.accessFailedCount\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Usuń\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Zapisz\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/usersList/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllComponent = (function () {
    function AllComponent(http, configService, userService) {
        var _this = this;
        this.configService = configService;
        this.userService = userService;
        this.baseUrl = '';
        this.loading = false;
        this.baseUrl = configService.getApiURI();
        http.get(this.baseUrl + '/UsersList/users').subscribe(function (result) {
            _this.users = result.json();
            _this.user = _this.users[0];
        }, function (error) { return console.error(error); });
        http.get(this.baseUrl + '/UsersList/roles').subscribe(function (result) {
            _this.roles = result.json();
            for (var i = 0; i < _this.users.length; i++) {
                _this.users[i].role = _this.roles[i];
            }
            _this.loading = true;
        }, function (error) { return console.error(error); });
    }
    AllComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'role', header: 'Rola' },
            { field: 'firstName', header: 'Imię' },
            { field: 'lastName', header: 'Nazwisko' },
            { field: 'email', header: 'E-mail' },
            { field: 'emailConfirmed', header: 'E-mail potwierdzony' },
            { field: 'userName', header: 'Nazwa użytkownika' },
            { field: 'phoneNumber', header: 'Nr telefonu' },
            { field: 'lockoutEnabled', header: 'Możliwość zablokowania' },
            { field: 'lockoutEnd', header: 'Koniec zablokowania' },
            { field: 'accessFailedCount', header: 'Ilość nieudanych logowań' },
        ];
    };
    AllComponent.prototype.showDialogToAdd = function () {
        this.newUser = true;
        this.user = this.users[0];
        this.displayDialog = true;
    };
    AllComponent.prototype.save = function () {
        var students = this.users.slice();
        if (this.newUser)
            students.push(this.user);
        else
            students[this.users.indexOf(this.selectedUser)] = this.user;
        this.users = students;
        this.user = this.users[0];
        this.displayDialog = false;
    };
    AllComponent.prototype.delete = function () {
        var index = this.users.indexOf(this.selectedUser);
        this.users = this.users.filter(function (val, i) { return i != index; });
        this.user = this.users[0];
        this.displayDialog = false;
    };
    AllComponent.prototype.onRowSelect = function (event) {
        this.newUser = false;
        this.user = event.data;
        this.displayDialog = true;
    };
    AllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-all',
            template: __webpack_require__("./src/app/usersList/all/all.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/usersList/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "<p-table *ngIf=\"loading\" [columns]=\"cols\" [value]=\"students\" selectionMode=\"single\" [(selection)]=\"selectedStudent\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\">\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"summary\" let-rowData>\r\n    <div style=\"text-align:left\">\r\n      <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Dodaj\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n</p-table>\r\n\r\n<p-dialog header=\"Student\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\" [autoAlign]=\"true\">\r\n  <div class=\"ui-g ui-fluid\" *ngIf=\"loading\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"userName\">Login</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <p-dropdown [options]=\"freeUsers\" [(ngModel)]=\"chosenUser\" optionLabel=\"userName\" [disabled]=\"!newStudent\" [style]=\"{'width':'150px'}\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"nrIndex\">Nr indeksu</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <input pInputText id=\"nrIndex\" [(ngModel)]=\"student.nrIndex\" />\r\n      </div>\r\n    </div>\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"projectId\">Projekt</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <p-dropdown [options]=\"projects\" [(ngModel)]=\"chosenProject\" optionLabel=\"name\" [style]=\"{'width':'150px'}\"></p-dropdown>\r\n      </div>\r\n    </div>  \r\n  </div>\r\n  <p-footer>\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Usuń\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Zapisz\"></button>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/usersList/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentComponent = (function () {
    function StudentComponent(http, configService, userService) {
        var _this = this;
        this.configService = configService;
        this.userService = userService;
        this.baseUrl = '';
        this.student = {};
        this.loading = false;
        this.isRequesting = true;
        this.baseUrl = this.configService.getApiURI();
        http.get(this.baseUrl + '/UsersList/students').subscribe(function (result) {
            _this.students = result.json();
            http.get(_this.baseUrl + '/UsersList/users').subscribe(function (result) {
                _this.users = result.json();
                for (var i = 0; i < _this.students.length; i++) {
                    for (var j = 0; j < _this.users.length; j++) {
                        if (_this.students[i].identityId === _this.users[j].id)
                            _this.students[i].userName = _this.users[j].userName;
                    }
                }
                http.get(_this.baseUrl + '/List/List').subscribe(function (result) {
                    _this.projects = result.json();
                    for (var i = 0; i < _this.students.length; i++) {
                        for (var j = 0; j < _this.projects.length; j++) {
                            if (_this.students[i].projectId === _this.projects[j].id)
                                _this.students[i].projectName = _this.projects[j].name;
                        }
                    }
                    http.get(_this.baseUrl + '/UsersList/free').subscribe(function (result) {
                        _this.freeUsers = result.json();
                        _this.chosenUser = _this.freeUsers[0];
                        _this.loading = true;
                        console.log(_this.projects);
                    }, function (error) { return console.error(error); });
                }, function (error) { return console.error(error); });
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'userName', header: 'Login' },
            { field: 'nrIndex', header: 'Nr indeksu' },
            { field: 'projectName', header: 'Projekt' }
        ];
    };
    StudentComponent.prototype.showDialogToAdd = function () {
        this.chosenProject = this.projects[0];
        this.chosenUser = this.freeUsers[0];
        this.newStudent = true;
        console.log(this.chosenUser);
        this.student = {};
        this.displayDialog = true;
    };
    StudentComponent.prototype.save = function () {
        var _this = this;
        var students = this.students.slice();
        console.log(this.projects);
        if (this.newStudent) {
            this.student.identityId = this.chosenUser.id;
            this.student.projectId = this.chosenProject.id;
            this.userService.studentCreate('/Student/create', this.student.identityId, this.student.nrIndex, this.student.projectId).finally(function () { return _this.isRequesting = true; })
                .subscribe(function (result) {
                _this.student = result;
                _this.student.userName = _this.chosenUser.userName;
                _this.student.projectName = _this.chosenProject.name;
                _this.isRequesting = false;
                students.push(_this.student);
                /*for (let i = 0; i < this.freeUsers.length; i++){
                  if (this.freeUsers[i].id === this.student.identityId) this.freeUsers.splice(i, 1);
                }*/
                _this.userService.freeUsers().finally(function () { return _this.isRequesting = true; }).subscribe(function (result) {
                    _this.freeUsers = result;
                });
                _this.chosenUser = _this.freeUsers[0];
            });
        }
        else {
            this.student.projectId = this.chosenProject.id;
            this.userService.studentUpdate('/Student/update', this.student.id, this.student.identityId, this.student.nrIndex, this.student.projectId).finally(function () { return _this.isRequesting = true; })
                .subscribe(function (result) {
                _this.student = result;
                _this.student.userName = _this.selectedStudent.userName;
                _this.student.projectName = _this.chosenProject.name;
                students[_this.students.indexOf(_this.selectedStudent)] = _this.student;
                _this.isRequesting = false;
            });
        }
        console.log(this.student);
        this.students = students;
        this.student = {};
        this.displayDialog = false;
    };
    StudentComponent.prototype.delete = function () {
        var _this = this;
        var index = this.students.indexOf(this.selectedStudent);
        this.students = this.students.filter(function (val, i) { return i != index; });
        this.userService.studentDelete('/Student/delete', this.student.id).finally(function () { return _this.isRequesting = true; })
            .subscribe(function (result) {
            _this.userService.freeUsers().finally(function () { return _this.isRequesting = true; }).subscribe(function (result) {
                _this.freeUsers = result;
            });
            _this.chosenUser = _this.freeUsers[0];
            _this.isRequesting = false;
            _this.student = {};
        });
        this.displayDialog = false;
    };
    StudentComponent.prototype.setChosenProject = function () {
        for (var i = 0; i < this.projects.length; i++) {
            if (this.selectedStudent.projectId === this.projects[i].id)
                this.chosenProject = this.projects[i];
        }
    };
    StudentComponent.prototype.onRowSelect = function (event) {
        this.chosenProject = this.projects[0];
        this.setChosenProject();
        this.newStudent = false;
        this.student = this.cloneStudent(event.data);
        console.log(this.student);
        this.displayDialog = true;
    };
    StudentComponent.prototype.cloneStudent = function (s) {
        var student = {};
        for (var prop in s) {
            student[prop] = s[prop];
        }
        return student;
    };
    StudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-student',
            template: __webpack_require__("./src/app/usersList/student/student.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_3_app_shared_services_user_service__["a" /* UserService */]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/usersList/usersList.component.html":
/***/ (function(module, exports) {

module.exports = "<p-tabView>\r\n  <p-tabPanel header=\"Studenci\">\r\n    <app-student></app-student>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"Pracownicy\">\r\n    <app-worker></app-worker>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"Administratorzy\">\r\n    <app-admin></app-admin>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"Wszyscy\">\r\n    <app-all></app-all>\r\n  </p-tabPanel>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "./src/app/usersList/usersList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersListComponent = (function () {
    function UsersListComponent(http, configService, userService) {
        this.configService = configService;
        this.userService = userService;
        this.baseUrl = '';
    }
    UsersListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-usersList',
            template: __webpack_require__("./src/app/usersList/usersList.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */]])
    ], UsersListComponent);
    return UsersListComponent;
}());



/***/ }),

/***/ "./src/app/usersList/worker/worker.component.html":
/***/ (function(module, exports) {

module.exports = "<p-table *ngIf=\"loading\" [columns]=\"cols\" [value]=\"workers\" selectionMode=\"single\" [(selection)]=\"selectedWorker\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" rows=\"15\">\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\">\r\n        {{col.header}}\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n    <tr [pSelectableRow]=\"rowData\">\r\n      <td *ngFor=\"let col of columns\">\r\n        {{rowData[col.field]}}\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n\r\n  <ng-template pTemplate=\"summary\" let-rowData>\r\n    <div style=\"text-align:left\">\r\n      <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Dodaj\"></button>\r\n    </div>\r\n  </ng-template>\r\n\r\n</p-table>\r\n\r\n<p-dialog header=\"Pracownik\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\r\n  <div class=\"ui-g ui-fluid\" *ngIf=\"loading\">\r\n    <div class=\"ui-g-12\">\r\n      <div class=\"ui-g-4\">\r\n        <label for=\"vin\">Login</label>\r\n      </div>\r\n      <div class=\"ui-g-8\">\r\n        <p-dropdown [options]=\"freeUsers\" [(ngModel)]=\"chosenUser\" optionLabel=\"userName\" [disabled]=\"!newWorker\"></p-dropdown>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <p-footer>\r\n    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\r\n      <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Usuń\"></button>\r\n      <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Zapisz\"></button>\r\n    </div>\r\n  </p-footer>\r\n</p-dialog>\r\n"

/***/ }),

/***/ "./src/app/usersList/worker/worker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkerComponent = (function () {
    function WorkerComponent(http, configService, userService) {
        var _this = this;
        this.configService = configService;
        this.userService = userService;
        this.baseUrl = '';
        this.worker = {};
        this.loading = false;
        this.isRequesting = true;
        this.baseUrl = configService.getApiURI();
        http.get(this.baseUrl + '/UsersList/workers').subscribe(function (result) {
            _this.workers = result.json();
            http.get(_this.baseUrl + '/UsersList/users').subscribe(function (result) {
                _this.users = result.json();
                for (var i = 0; i < _this.workers.length; i++) {
                    for (var j = 0; j < _this.users.length; j++) {
                        if (_this.workers[i].identityId === _this.users[j].id)
                            _this.workers[i].userName = _this.users[j].userName;
                    }
                }
                http.get(_this.baseUrl + '/UsersList/free').subscribe(function (result) {
                    _this.freeUsers = result.json();
                    _this.chosenUser = _this.freeUsers[0];
                    _this.loading = true;
                }, function (error) { return console.error(error); });
            }, function (error) { return console.error(error); });
        }, function (error) { return console.error(error); });
    }
    WorkerComponent.prototype.ngOnInit = function () {
        this.cols = [
            { field: 'userName', header: 'Login' },
        ];
    };
    WorkerComponent.prototype.showDialogToAdd = function () {
        this.chosenUser = this.freeUsers[0];
        this.newWorker = true;
        this.worker = {};
        this.displayDialog = true;
    };
    WorkerComponent.prototype.save = function () {
        var _this = this;
        var workers = this.workers.slice();
        if (this.newWorker) {
            this.worker.identityId = this.chosenUser.id;
            this.worker.userName = this.chosenUser.userName;
            this.userService.workerCreate('/Worker/create', this.worker.identityId).finally(function () { return _this.isRequesting = true; })
                .subscribe(function (result) {
                _this.worker = result;
                _this.worker.userName = _this.chosenUser.userName;
                _this.isRequesting = false;
                workers.push(_this.worker);
                /*for (let i = 0; i < this.freeUsers.length; i++){
                  if (this.freeUsers[i].id === this.student.identityId) this.freeUsers.splice(i, 1);
                }*/
                _this.userService.freeUsers().finally(function () { return _this.isRequesting = true; }).subscribe(function (result) {
                    _this.freeUsers = result;
                });
                _this.chosenUser = _this.freeUsers[0];
            });
        }
        else {
            this.userService.workerUpdate('/Worker/update', this.worker.id, this.worker.identityId).finally(function () { return _this.isRequesting = true; })
                .subscribe(function (result) {
                _this.worker = result;
                _this.worker.userName = _this.selectedWorker.userName;
                workers[_this.workers.indexOf(_this.selectedWorker)] = _this.worker;
                _this.isRequesting = false;
            });
        }
        this.workers = workers;
        this.worker = {};
        this.displayDialog = false;
    };
    WorkerComponent.prototype.delete = function () {
        var _this = this;
        console.log("LOL");
        var index = this.workers.indexOf(this.selectedWorker);
        this.workers = this.workers.filter(function (val, i) { return i != index; });
        console.log(this.worker.id);
        console.log("LOL");
        this.userService.studentDelete('/Worker/delete', this.worker.id).finally(function () { return _this.isRequesting = true; })
            .subscribe(function (result) {
            _this.userService.freeUsers().finally(function () { return _this.isRequesting = true; }).subscribe(function (result) {
                _this.freeUsers = result;
            });
            console.log(index);
            _this.chosenUser = _this.freeUsers[0];
            _this.isRequesting = false;
            _this.worker = {};
        });
        this.displayDialog = false;
    };
    WorkerComponent.prototype.onRowSelect = function (event) {
        this.newWorker = false;
        this.worker = this.cloneWorker(event.data);
        this.displayDialog = true;
    };
    WorkerComponent.prototype.cloneWorker = function (s) {
        var worker = {};
        for (var prop in s) {
            worker[prop] = s[prop];
        }
        return worker;
    };
    WorkerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-worker',
            template: __webpack_require__("./src/app/usersList/worker/worker.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_3_app_shared_services_user_service__["a" /* UserService */]])
    ], WorkerComponent);
    return WorkerComponent;
}());



/***/ }),

/***/ "./src/app/workerPanel/workerPanel.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-table [columns]=\"cols\" [value]=\"lists\" [loading]=\"loading\" sortMode=\"multiple\" [style]=\"{'width':'100%'}\">\r\n  <ng-template pTemplate=\"header\" let-columns>\r\n    <tr>\r\n      <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style]=\"col.width\">\r\n        {{col.header}}\r\n        <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n      </th>\r\n    </tr>\r\n  </ng-template>\r\n  <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\r\n    <tr [ngClass]=\"rowData.id == idProject ? 'highlite' : null\">\r\n      <td *ngFor=\"let col of columns\" [style]=\"col.width\">\r\n        <p *ngIf=\"col.field != 'starred' && col.field != 'students' && col.field != 'toChange' && col.field != 'confirmed' && col.field != 'pblic'\">{{rowData[col.field]}}</p>\r\n        <div *ngIf=\"col.field == 'students'\">\r\n          <span class=\"fa-stack fa-3x\" style=\"font-size:20px\" (click)=\"showStudents($event,rowData[col.field],op1)\">\r\n            <i class=\"fa fa-circle-o fa-stack-2x\"></i>\r\n            <strong class=\"fa-stack-1x\">{{rowData[col.field].length}}</strong>\r\n          </span>\r\n        </div>\r\n        <div *ngIf=\"col.field == 'pblic'\">\r\n          <i *ngIf=\"rowData[col.field]\" class=\"fa fa-check\" style=\"font-size:20px;\"></i>\r\n          <i *ngIf=\"!rowData[col.field]\" class=\"fa fa-times\" style=\"font-size:20px;\"></i>\r\n        </div>\r\n        <div *ngIf=\"col.field == 'confirmed'\">\r\n          <p-inputSwitch onLabel=\"Tak\" offLabel=\"Nie\" [(ngModel)]=\"rowData[col.field]\" (onChange)=\"confirm(rowData)\"></p-inputSwitch>\r\n        </div>\r\n        <i *ngIf=\"col.field == 'starred' && rowData[col.field]\" class=\"fa fa-star\" id={{rowData.id}} style=\"font-size:20px; text-shadow: 0px 0px 1px gray, 0px 0px 1px gray; color:#ffd76e;\" (click)=\"starred($event)\"></i>\r\n        <i *ngIf=\"col.field == 'starred' && !rowData[col.field]\" class=\"fa fa-star-o\" id={{rowData.id}} style=\"font-size:20px; text-shadow: 0px 0px 1px gray; color:#ffd76e;\" (click)=\"starred($event)\"></i>\r\n        <i *ngIf=\"col.field == 'toChange' && rowData[col.field] == null\" class='fa fa-comment-o' id={{rowData.id}} style=\"font-size:20px\" (click)=\"comment($event,rowData,op)\"></i>\r\n        <i *ngIf=\"col.field == 'toChange' && rowData[col.field] != null && rowData[col.field].length==0\" class='fa fa-comment-o' id={{rowData.id}} style=\"font-size:20px\" (click)=\"comment($event,rowData,op)\"></i>\r\n        <i *ngIf=\"col.field == 'toChange' && rowData[col.field] != null && rowData[col.field].length>0\" class='fa fa-commenting-o' id={{rowData.id}} style=\"font-size:20px\" (click)=\"comment($event,rowData,op)\"></i>\r\n\r\n      </td>\r\n    </tr>\r\n  </ng-template>\r\n</p-table>\r\n<p-overlayPanel #op>\r\n  <p-editor [(ngModel)]=\"list.toChange\" [style]=\"{'height':'320px'}\"></p-editor>\r\n  <div class=\"text-right\" style=\"margin-top:3%\">\r\n    <button pButton type=\"button\" icon=\"fa-check\" label=\"Zapisz\" iconPos=\"left\" (click)=\"save()\"></button>\r\n  </div>\r\n</p-overlayPanel>\r\n<p-overlayPanel #op1>\r\n  <ul *ngFor=\"let student of students\">\r\n    <li>\r\n      <b>{{student.firstName}}</b>\r\n      <b>{{student.lastName}}</b>\r\n    </li>\r\n  </ul>\r\n</p-overlayPanel>\r\n"

/***/ }),

/***/ "./src/app/workerPanel/workerPanel.component.scss":
/***/ (function(module, exports) {

module.exports = ".highlite {\n  background-color: #1CA979 !important;\n  color: #ffffff !important; }\n"

/***/ }),

/***/ "./src/app/workerPanel/workerPanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerPanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__ = __webpack_require__("./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WorkerPanelComponent = (function () {
    function WorkerPanelComponent(http, configService, sanitizer, userService, messageService) {
        var _this = this;
        this.configService = configService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.messageService = messageService;
        this.list = {};
        this.students = [];
        this.baseUrl = '';
        this.val = 1;
        this.loading = true;
        this.errors = '';
        this.baseUrl = configService.getApiURI();
        http.get(this.baseUrl + '/List/projects').subscribe(function (result) {
            _this.lists = result.json();
            _this.lists.map(function (x) { return x.students = []; });
            http.get(_this.baseUrl + '/List/students').subscribe(function (result) {
                var students = result.json();
                for (var _i = 0, students_1 = students; _i < students_1.length; _i++) {
                    var student = students_1[_i];
                    for (var _a = 0, _b = _this.lists; _a < _b.length; _a++) {
                        var project = _b[_a];
                        if (student.projectId === project.id) {
                            project.students.push(student);
                            break;
                        }
                    }
                }
                _this.loading = false;
            });
        }, function (error) { return console.error(error); });
    }
    WorkerPanelComponent.prototype.ngOnInit = function () {
        var dangerous = 'word-break: break-all;';
        var trusted = this.sanitizer.bypassSecurityTrustStyle('width: 2.25em;');
        var trusted2 = this.sanitizer.bypassSecurityTrustStyle(dangerous);
        this.cols = [
            { field: 'starred', header: '', width: trusted },
            { field: 'name', header: 'Nazwa', width: '' },
            { field: 'description', header: 'Opis', width: '' },
            { field: 'repoGit', header: 'Repozytorium', width: trusted2 },
            { field: 'mentoring', header: 'Mentoring', width: '' },
            { field: 'pblic', header: 'Publiczny', width: '' },
            { field: 'confirmed', header: 'Zatwierdzony', width: '' },
            { field: 'toChange', header: 'Do Zmiany', width: '' },
            { field: 'students', header: 'Studenci', width: '' }
        ];
    };
    WorkerPanelComponent.prototype.starred = function (e) {
        var _this = this;
        var id = e.target.id;
        var _loop_1 = function (list) {
            if (list.id == id) {
                this_1.userService.projectStar("/List", list.id, list.starred).subscribe(function (result) {
                    if (result) {
                        if (!list.starred)
                            _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie wyróżniono projekt: ' + list.name });
                        else if (list.starred)
                            _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie usunięto wyróżnienie projektu: : ' + list.name });
                        list.starred = !list.starred;
                    }
                });
                return "break";
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = this.lists; _i < _a.length; _i++) {
            var list = _a[_i];
            var state_1 = _loop_1(list);
            if (state_1 === "break")
                break;
        }
    };
    WorkerPanelComponent.prototype.comment = function (event, list, overlaypanel) {
        this.list = list;
        overlaypanel.toggle(event);
    };
    WorkerPanelComponent.prototype.showStudents = function (event, students, overlaypanel) {
        this.students = students;
        overlaypanel.toggle(event);
    };
    WorkerPanelComponent.prototype.confirm = function (list) {
        var _this = this;
        this.userService.projectConfirm("/List/confirm", list).subscribe(function (result) {
            if (list.confirmed)
                _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zatwierdzono projekt: ' + list.name });
            else if (!list.confirmed)
                _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie usunięto zatwierdzenie projektu: ' + list.name });
        });
    };
    WorkerPanelComponent.prototype.save = function () {
        var _this = this;
        this.userService.projectToChange("/List/tochange", this.list).subscribe(function (result) { return _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zapisano komentarz do projektu: ' + _this.list.name }); });
    };
    WorkerPanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workerPanel',
            template: __webpack_require__("./src/app/workerPanel/workerPanel.component.html"),
            styles: [__webpack_require__("./src/app/workerPanel/workerPanel.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_5_primeng_components_common_messageservice__["MessageService"]])
    ], WorkerPanelComponent);
    return WorkerPanelComponent;
}());



/***/ }),

/***/ "./src/app/workerStudents/workerStudents.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/workerStudents/workerStudents.component.html":
/***/ (function(module, exports) {

module.exports = "<p-growl [(value)]=\"msgs\"></p-growl>\r\n<p-confirmDialog></p-confirmDialog>\r\n<p-tabView>\r\n  <p-tabPanel header=\"Twoje grupy\">\r\n    <p-card [style]=\"{'height': '600px'}\">\r\n      <p-chart type=\"polarArea\" [data]=\"data\" [style]=\"{'height': '100%','width': '100%' }\"></p-chart>\r\n      <div style=\"margin-top:5%; float:left\">\r\n        <b style=\"float:left\">Utwórz grupę</b>\r\n        <input type=\"text\" pInputText placeholder=\"Nazwa\" style=\"float:left;margin-top:10%;transform:translateX(-50%)\" [(ngModel)]=\"createGroup.name\" />\r\n        <button pButton type=\"button\" label=\"Stwórz\" style=\"float:left; margin-top:5%; margin-left:0%; margin-bottom:5%; margin-right:5%\" (click)=\"groupCreation()\"></button>\r\n      </div>\r\n      <div style=\"margin-top:5%;float:right\">\r\n        <b style=\"float:right\">Usuń grupę</b>\r\n        <p-dropdown [options]=\"groupsSelect\" placeholder=\"Wybierz grupę\" [style]=\"{'width': '100%','margin-top':'5%'}\" [(ngModel)]=\"groupToDelete\"></p-dropdown>\r\n        <button pButton type=\"button\" class=\"ui-button-danger\" label=\"Usuń\" style=\"float:right; margin-top:5%\" (click)=\"groupDeletionDialog()\"></button>\r\n      </div>\r\n    </p-card>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"Przydziel studentów\">\r\n    <b *ngIf=\"groups != null && groups != undefined && groups.length<1\">Najpierw stwórz grupę</b>\r\n    <p-table #dt *ngIf=\"displayGroups\" [columns]=\"cols\" [value]=\"notConfirmedStudents\" sortMode=\"multiple\" [loading]=\"loading\" [paginator]=\"true\" [rows]=\"10\">\r\n      <ng-template pTemplate=\"caption\">\r\n        <div style=\"text-align: right\">\r\n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input type=\"text\" pInputText size=\"40\" placeholder=\"Szukaj\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n        </div>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style]=\"col.width\">\r\n            {{col.header}}\r\n            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n            <input *ngSwitchCase=\"'firstName'\" pInputText style=\"width:90%\" type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n            <input *ngSwitchCase=\"'lastName'\" pInputText style=\"width:90%\" type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n            <input *ngSwitchCase=\"'nrIndex'\" pInputText style=\"width:90%\" type=\"number\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr [pSelectableRow]=\"rowData\">\r\n          <td *ngFor=\"let col of columns\">\r\n            <div *ngIf=\"col.field == 'groupId'\"><p-dropdown [options]=\"groupsSelect\" placeholder=\"Wybierz grupę\" [style]=\"{'width': '100%'}\" [(ngModel)]=\"rowData[col.field]\"></p-dropdown></div>\r\n            <div *ngIf=\"col.field == 'confirmed'\"><p-button label=\"Zatwierdź\" (onClick)=\"confirm(rowData)\"></p-button></div>\r\n            <div *ngIf=\"col.field == 'firstName' || col.field == 'lastName' || col.field == 'nrIndex'\">{{rowData[col.field]}}</div>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </p-tabPanel>\r\n  <p-tabPanel header=\"Przydzieleni Studenci\">\r\n    <b *ngIf=\"groups != null && groups != undefined && groups.length<1\">Najpierw stwórz grupę</b>\r\n    <p-table #dt *ngIf=\"displayGroups\" [columns]=\"colsConfirmed\" [value]=\"confirmedStudents\" sortMode=\"multiple\" [loading]=\"loadingConfirmed\" [paginator]=\"true\" [rows]=\"10\">\r\n      <ng-template pTemplate=\"caption\">\r\n        <div style=\"text-align: right\">\r\n          <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n          <input type=\"text\" pInputText size=\"40\" placeholder=\"Szukaj\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n        </div>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"header\" let-columns>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [style]=\"col.width\">\r\n            {{col.header}}\r\n            <p-sortIcon [field]=\"col.field\"></p-sortIcon>\r\n          </th>\r\n        </tr>\r\n        <tr>\r\n          <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n            <input *ngSwitchCase=\"'firstName'\" pInputText style=\"width:90%\" type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n            <input *ngSwitchCase=\"'lastName'\" pInputText style=\"width:90%\" type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n            <input *ngSwitchCase=\"'nrIndex'\" pInputText style=\"width:90%\" type=\"number\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\r\n          </th>\r\n        </tr>\r\n      </ng-template>\r\n      <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n        <tr [pSelectableRow]=\"rowData\">\r\n          <td *ngFor=\"let col of columns\">\r\n            <div *ngIf=\"col.field == 'groupId'\"><p-dropdown [options]=\"groupsSelect\" [style]=\"{'width': '100%'}\" [(ngModel)]=\"rowData[col.field]\" (onChange)=\"changeGroupDialog(rowData)\"></p-dropdown></div>\r\n            <div *ngIf=\"col.field == 'confirmed'\"><p-button label=\"Wyrzuć\" (onClick)=\"removeDialog(rowData)\"></p-button></div>\r\n            <div *ngIf=\"col.field == 'firstName' || col.field == 'lastName' || col.field == 'nrIndex'\">{{rowData[col.field]}}</div>\r\n          </td>\r\n        </tr>\r\n      </ng-template>\r\n    </p-table>\r\n  </p-tabPanel>\r\n</p-tabView>\r\n"

/***/ }),

/***/ "./src/app/workerStudents/workerStudents.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkerStudentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__ = __webpack_require__("./src/app/shared/utils/config.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__ = __webpack_require__("./src/app/shared/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api__ = __webpack_require__("./node_modules/primeng/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice__ = __webpack_require__("./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var WorkerStudentsComponent = (function () {
    function WorkerStudentsComponent(http, configService, sanitizer, userService, messageService, confirmationService) {
        var _this = this;
        this.configService = configService;
        this.sanitizer = sanitizer;
        this.userService = userService;
        this.messageService = messageService;
        this.confirmationService = confirmationService;
        this.groupsSelect = [];
        this.createGroup = {};
        this.msgs = [];
        userService.getGroups(userService.getId()).subscribe(function (result) {
            _this.groups = result;
            console.log(_this.groups);
            if (_this.groups.length > 0) {
                _this.groups.map(function (x) {
                    var tmp = {};
                    tmp.value = x.id;
                    tmp.label = x.name;
                    _this.groupsSelect.push(tmp);
                });
                _this.populateGraph();
                _this.displayGroups = true;
            }
            else
                _this.displayGroups = false;
        });
        userService.getNotConfirmedStudents().subscribe(function (result) {
            _this.notConfirmedStudents = result;
            _this.notConfirmedStudents.map(function (x) { return x.groupId = 0; });
            _this.loading = false;
        });
        userService.getConfirmedStudents().subscribe(function (result) {
            _this.confirmedStudents = result;
            _this.loadingConfirmed = false;
        });
        this.cols = [
            { field: 'firstName', header: 'Imię' },
            { field: 'lastName', header: 'Nazwisko' },
            { field: 'nrIndex', header: 'Nr Indeksu' },
            { field: 'groupId', header: 'Grupa' },
            { field: 'confirmed', header: 'Zatwierdź' }
        ];
        this.colsConfirmed = [
            { field: 'firstName', header: 'Imię' },
            { field: 'lastName', header: 'Nazwisko' },
            { field: 'nrIndex', header: 'Nr Indeksu' },
            { field: 'groupId', header: 'Grupa' },
            { field: 'confirmed', header: 'Wyrzuć' }
        ];
    }
    WorkerStudentsComponent.prototype.groupCreation = function () {
        var _this = this;
        var uniqueName = true;
        if (this.createGroup.name !== undefined && this.createGroup.name !== null) {
            this.createGroup.name = this.createGroup.name.trim();
            if (this.createGroup.name.length <= 0)
                uniqueName = false;
        }
        else
            uniqueName = false;
        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i].name === this.createGroup.name) {
                uniqueName = false;
                break;
            }
        }
        if (uniqueName) {
            var groupName = JSON.parse(JSON.stringify(this.createGroup.name));
            this.createGroup.name = "";
            this.userService.createGroup(groupName).subscribe(function (result) {
                if (result) {
                    _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie dodano grupę' });
                    _this.groups = result;
                    if (_this.groups.length > 0) {
                        _this.groupsSelect = [];
                        _this.groups.map(function (x) {
                            var tmp = {};
                            tmp.value = x.id;
                            tmp.label = x.name;
                            _this.groupsSelect.push(tmp);
                        });
                        _this.populateGraph();
                        _this.displayGroups = true;
                    }
                    else
                        _this.displayGroups = false;
                }
                else
                    _this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się dodać grupy' });
            });
        }
        else
            this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Nazwy grup nie mogą być takie same' });
    };
    WorkerStudentsComponent.prototype.confirm = function (student) {
        var _this = this;
        student.confirmed = !student.confirmed;
        if (student.groupId !== 0 && student.groupId !== null && student.groupId !== undefined)
            this.userService.studentConfirm("/Student", student).subscribe(function (result) {
                if (result) {
                    _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zatwierdzono studenta' });
                    for (var i = 0; i < _this.notConfirmedStudents.length; i++) {
                        if (_this.notConfirmedStudents[i].id == student.id) {
                            _this.notConfirmedStudents.splice(i, 1);
                            _this.confirmedStudents.push(student);
                            break;
                        }
                    }
                    for (var i = 0; i < _this.groups.length; i++) {
                        if (_this.groups[i].id === student.groupId)
                            _this.groups[i].students.push(student);
                    }
                    _this.populateGraph();
                }
                else
                    _this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się zatwierdzić studenta' });
            });
        else
            this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Wybierz grupę dla studenta' });
    };
    WorkerStudentsComponent.prototype.remove = function (student) {
        var _this = this;
        student.confirmed = !student.confirmed;
        student.groupId = null;
        if (student.groupId !== 0)
            this.userService.studentConfirm("/Student", student).subscribe(function (result) {
                if (result) {
                    _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie wyrzucono studenta' });
                    for (var i = 0; i < _this.confirmedStudents.length; i++) {
                        if (_this.confirmedStudents[i].id == student.id) {
                            _this.confirmedStudents.splice(i, 1);
                            _this.notConfirmedStudents.push(student);
                            break;
                        }
                    }
                    for (var i = 0; i < _this.groups.length; i++) {
                        for (var j = 0; j < _this.groups[i].students.length; j++) {
                            if (_this.groups[i].students[j].id === student.id) {
                                _this.groups[i].students.splice(j, 1);
                                break;
                            }
                        }
                    }
                    _this.populateGraph();
                    _this.groupsSelect = [];
                    _this.groups.map(function (x) {
                        var tmp = {};
                        tmp.value = x.id;
                        tmp.label = x.name;
                        _this.groupsSelect.push(tmp);
                    });
                }
                else
                    _this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się wyrzucić studenta' });
            });
        else
            this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Wybierz grupę dla studenta' });
    };
    WorkerStudentsComponent.prototype.removeDialog = function (student) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Czy napewno chcesz wyrzucić studenta: ' + student.firstName + ' ' + student.lastName + '?',
            header: 'Potwierdzenie',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.remove(student);
            }
        });
    };
    WorkerStudentsComponent.prototype.changeGroup = function (student) {
        var _this = this;
        this.userService.studentConfirm("/Student", student).subscribe(function (result) {
            if (result) {
                _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie zmieniono grupę' });
                for (var i = 0; i < _this.groups.length; i++) {
                    for (var j = 0; j < _this.groups[i].students.length; j++) {
                        if (_this.groups[i].students[j].id === student.id) {
                            _this.groups[i].students.splice(j, 1);
                            break;
                        }
                    }
                }
                for (var i = 0; i < _this.groups.length; i++) {
                    if (_this.groups[i].id === student.groupId) {
                        _this.groups[i].students.push(student);
                        break;
                    }
                }
                _this.populateGraph();
            }
            else
                _this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się zmienić grupy' });
        });
    };
    WorkerStudentsComponent.prototype.changeGroupDialog = function (student) {
        var _this = this;
        this.confirmationService.confirm({
            message: 'Czy napewno chcesz zmienić grupę studentowi: ' + student.firstName + ' ' + student.lastName + '?',
            header: 'Potwierdzenie',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.changeGroup(student);
            }
        });
    };
    WorkerStudentsComponent.prototype.groupDeletion = function () {
        var _this = this;
        var group = {};
        group.id = this.groupToDelete;
        if (group.id !== null && group.id !== undefined)
            this.userService.removeWorkerGroup(group).subscribe(function (result) {
                if (result) {
                    _this.messageService.add({ severity: 'success', summary: 'Sukces', detail: 'Pomyślnie usunięto grupę' });
                    _this.userService.getNotConfirmedStudents().subscribe(function (result) {
                        _this.notConfirmedStudents = result;
                        _this.notConfirmedStudents.map(function (x) { return x.groupId = 0; });
                    });
                    _this.userService.getConfirmedStudents().subscribe(function (result) {
                        _this.confirmedStudents = result;
                    });
                    for (var i = 0; i < _this.groups.length; i++) {
                        if (_this.groups[i].id === group.id) {
                            _this.groups.splice(i, 1);
                            break;
                        }
                    }
                    _this.populateGraph();
                    for (var i = 0; i < _this.groupsSelect.length; i++) {
                        if (_this.groupsSelect[i].value === group.id) {
                            _this.groupsSelect.splice(i, 1);
                            break;
                        }
                    }
                }
                else
                    _this.messageService.add({ severity: 'error', summary: 'Błąd', detail: 'Nie udało się usunąc grupy' });
            });
        else
            this.messageService.add({ severity: 'info', summary: 'Informacja', detail: 'Wybierz grupę do usunięcia' });
    };
    WorkerStudentsComponent.prototype.groupDeletionDialog = function () {
        var _this = this;
        var groupName;
        for (var i = 0; i < this.groups.length; i++) {
            if (this.groups[i].id === this.groupToDelete) {
                groupName = this.groups[i].name;
                break;
            }
        }
        this.confirmationService.confirm({
            message: 'Czy napewno chcesz usunąć grupę: ' + groupName + '?',
            header: 'Potwierdzenie',
            icon: 'pi pi-exclamation-triangle',
            accept: function () {
                _this.groupDeletion();
            }
        });
    };
    WorkerStudentsComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    WorkerStudentsComponent.prototype.populateGraph = function () {
        var _this = this;
        var data = [];
        var backgroundColor = [];
        var labels = [];
        this.groups.map(function (x) {
            data.push(x.students.length);
            labels.push(x.name);
            backgroundColor.push(_this.getRandomColor());
        });
        this.data = {
            datasets: [{
                    data: data,
                    backgroundColor: backgroundColor,
                    label: 'Grupy',
                }],
            labels: labels
        };
    };
    WorkerStudentsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-workerStudents',
            template: __webpack_require__("./src/app/workerStudents/workerStudents.component.html"),
            styles: [__webpack_require__("./src/app/workerStudents/workerStudents.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_2__shared_utils_config_service__["a" /* ConfigService */], __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DomSanitizer"], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_6_primeng_components_common_messageservice__["MessageService"], __WEBPACK_IMPORTED_MODULE_5_primeng_api__["ConfirmationService"]])
    ], WorkerStudentsComponent);
    return WorkerStudentsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map