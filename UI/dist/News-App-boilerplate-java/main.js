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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>News Application</span>\r\n  <!-- admin menu starts here -->\r\n  <span *ngIf=\"authService.isLoggedIn()\">\r\n    <span *ngIf=\"authService.isAdmin()\">\r\n  <button mat-button [routerLink]=\"['./news/allnews']\" >All news</button>\r\n  <button mat-button [routerLink]=\"['./news/appnews']\" class=\"appnews\">App news</button>\r\n</span>\r\n<span *ngIf=\"!authService.isAdmin()\">\r\n<button mat-button [routerLink]=\"['./news/appnews']\" class=\"appnews\">App news</button>\r\n<button mat-button [routerLink]=\"['./news/watchlist']\" class=\"watchlist\">WatchList</button>\r\n<button  mat-button [routerLink]=\"['./news/search']\" class=\"search-button\">Search</button>\r\n</span>\r\n<button mat-buton (click)=\"Logout()\" class=\"logout\">Logout</button>\r\n</span>\r\n<!-- {{authService.isAdmin()}} -->\r\n<!-- admin menu ends here -->\r\n  </mat-toolbar>\r\n  <router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _app_modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app/modules/authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function AppComponent(authService, routes) {
        this.authService = authService;
        this.routes = routes;
        this.title = 'News-App-boilerplate-java';
        this.isAdmin = false;
        this.isMenuRequired = false;
    }
    AppComponent.prototype.Logout = function () {
        console.log("log out action triggered");
        this.authService.deleteToken();
        this.routes.navigate(['/login']);
    };
    AppComponent.prototype.ngOnInit = function () {
        // console.log("intalizinggggg");
        // const token = this.authService.getToken();
        // console.log("token is ", token);
        // if(token != null){
        //   this.isMenuRequired=true;
        //   console.log("menu required");
        //   this.isAdmin=this.authService.isAdmin();
        //   console.log("user type in app component is Admin?", this.isAdmin);
        // }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_app_modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/authentication/authentication.module */ "./src/app/modules/authentication/authentication.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_newsapp_newsapp_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/newsapp/newsapp.module */ "./src/app/modules/newsapp/newsapp.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import {AuthGuardService} from './authGuard.service';



var appRoutes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _modules_newsapp_newsapp_module__WEBPACK_IMPORTED_MODULE_4__["NewsappModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _modules_authentication_authentication_module__WEBPACK_IMPORTED_MODULE_2__["AuthenticationModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            //  providers: [AuthGuardService],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/authGuard.service.ts":
/*!**************************************!*\
  !*** ./src/app/authGuard.service.ts ***!
  \**************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/modules/authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
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
    function AuthGuardService(router, authSer, activatedRouter) {
        this.router = router;
        this.authSer = authSer;
        this.activatedRouter = activatedRouter;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (!this.authSer.isTokenExpired()) {
            //   if(this.authSer.isAdmin()){
            //         if((this.router.url =='/news/watchlist') ||(this.router.url =='/news/search') ){
            //             return false;
            //         }
            //   }else{
            //       console.log("its not admin")
            //       if(this.router.url =='/news/allnews'){
            //           return false;
            //       }
            //   }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_modules_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/User.ts":
/*!************************************************!*\
  !*** ./src/app/modules/authentication/User.ts ***!
  \************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication-router.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/authentication-router.module.ts ***!
  \************************************************************************/
/*! exports provided: AuthenticationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationRoutingModule", function() { return AuthenticationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var authRoutes = [
    {
        path: '',
        children: [
            {
                path: '',
                redirectTo: '/login',
                pathMatch: 'full'
            },
            {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"],
            },
            {
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            }
        ]
    }
];
var AuthenticationRoutingModule = /** @class */ (function () {
    function AuthenticationRoutingModule() {
    }
    AuthenticationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(authRoutes),
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            ]
        })
    ], AuthenticationRoutingModule);
    return AuthenticationRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.module.ts ***!
  \*****************************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/authentication/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/modules/authentication/register/register.component.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _authentication_router_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./authentication-router.module */ "./src/app/modules/authentication/authentication-router.module.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _authentication_router_module__WEBPACK_IMPORTED_MODULE_9__["AuthenticationRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCardModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]],
            providers: [
                _authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
            ],
            exports: [_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/modules/authentication/authentication.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/authentication.service.ts ***!
  \******************************************************************/
/*! exports provided: TOKEN_NAME, AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOKEN_NAME", function() { return TOKEN_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TOKEN_NAME = 'jwt_token';
// @Injectable({
//   providedIn: 'root'
// })
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(httpClient) {
        this.httpClient = httpClient;
        this.springEndpoint = 'http://localhost:7089/api/userservice';
    }
    AuthenticationService.prototype.registerUser = function (newUser) {
        debugger;
        var url = this.springEndpoint + "/register";
        return this.httpClient.post(url, newUser, { responseType: 'text' });
    };
    AuthenticationService.prototype.loginUser = function (newUser) {
        var url = this.springEndpoint + "/login";
        return this.httpClient.post(url, newUser);
    };
    AuthenticationService.prototype.setToken = function (token) {
        return localStorage.setItem(TOKEN_NAME, token);
    };
    AuthenticationService.prototype.getToken = function () {
        return localStorage.getItem(TOKEN_NAME);
    };
    AuthenticationService.prototype.deleteToken = function () {
        return localStorage.removeItem(TOKEN_NAME);
    };
    AuthenticationService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
        if (decoded.exp == undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthenticationService.prototype.isTokenExpired = function (token) {
        if (!token)
            token = this.getToken();
        if (!token)
            return true;
        var date = this.getTokenExpirationDate(token);
        if (date == undefined || date == null)
            return false;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthenticationService.prototype.isAdmin = function () {
        var token = this.getToken();
        if (token != null) {
            var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_2__(token);
            var role = decoded.roles.scopes;
            if (role == 'ROLE_ADMIN') {
                return true;
            }
            return false;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        var token = this.getToken();
        if (token == null) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-block{\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n    padding-top: 50px;\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\n.full-width{\r\n    width: 100%;\r\n}\r\n\r\nh3{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"login-form\" #loginForm=\"ngForm\" (ngSubmit)=\"loginUser()\" [style.fontsize.px]=\"20\">\r\n    <div class=\"login-block\">\r\n      <div class=\"row\">\r\n        <h3>Login User</h3>\r\n      </div>\r\n      <div class=\"row\">\r\n         <mat-form-field class=\"full-width\">\r\n          <mat-label>userid</mat-label>\r\n          <input id=\"userid\" matInput class=\"inputID\" placeholder=\"userid\" [(ngModel)]=\"newUser.userId\" name=\"userid\" required minlength=\"5\" maxlength=\"10\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Password</mat-label>\r\n          <input id=\"password\" class=\"inputPass\" matInput placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\" type=\"password\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"row\">\r\n          <button class=\"login-user\" mat-raised-button  type=\"submit\" color=\"primary\">Login</button>\r\n          <button class=\"register-button\" mat-raised-button  [routerLink]=\"['/register']\" color=\"primary\">Register</button>\r\n      </div>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/modules/authentication/login/login.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/authentication/login/login.component.ts ***!
  \*****************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../User */ "./src/app/modules/authentication/User.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
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




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.newUser = new _User__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.isAdmin = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        this.authService.loginUser(this.newUser).subscribe(function (data) {
            if (data['token']) {
                _this.authService.setToken(data['token']);
                //test login token decode
                _this.isAdmin = _this.authService.isAdmin();
                _this.isAdmin = _this.authService.isAdmin();
                if (_this.isAdmin) {
                    _this.router.navigate(['news/allnews']);
                }
                else {
                    _this.router.navigate(['/news/appnews']);
                }
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'auth-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/authentication/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/authentication/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".register-block{\r\n    margin: auto;\r\n    width: 50%;\r\n    padding: 10px;\r\n    padding-top: 50px;\r\n    display: flex;\r\n    align-content: center;\r\n    justify-content: center;\r\n    flex-flow: column nowrap;\r\n    align-items: center;\r\n}\r\n\r\n.full-width{\r\n    width: 100%;\r\n}\r\n\r\nh3{\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"register-form\" #registerForm=\"ngForm\" [style.fontsize.px]=\"20\">\r\n    <div class=\"register-block\">\r\n      <div class=\"row\">\r\n        <h3>Register User</h3>\r\n      </div>\r\n      <div class=\"row\">\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>First Name</mat-label>\r\n          <input id=\"firstName\" matInput placeholder=\"First name\" [(ngModel)]=\"newUser.firstName\"name=\"firstName\" required>\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Last Name</mat-label>\r\n          <input id=\"lastName\" matInput placeholder=\"Last Name\" [(ngModel)]=\"newUser.lastName\" name=\"firstName\" required>\r\n        </mat-form-field>\r\n       \r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>userid</mat-label>\r\n          <input id=\"userid\" matInput placeholder=\"Email\" [(ngModel)]=\"newUser.userId\" name=\"userid\" required minlength=\"5\" maxlength=\"10\">\r\n        </mat-form-field>\r\n        <mat-form-field class=\"full-width\">\r\n          <mat-label>Password</mat-label>\r\n          <input id=\"password\" matInput placeholder=\"Password\" [(ngModel)]=\"newUser.password\" name=\"password\" type=\"password\">\r\n        </mat-form-field>\r\n      </div>\r\n      <div class=\"row\">\r\n          <button class=\"register-user\" mat-raised-button   (click)=\"registerUser()\" color=\"primary\">Register</button>\r\n          <button mat-raised-button  type=\"reset\" (click)=\"resetInput()\" color=\"primary\">clear</button>\r\n      </div>\r\n    </div>\r\n  </form>"

/***/ }),

/***/ "./src/app/modules/authentication/register/register.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/authentication/register/register.component.ts ***!
  \***********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../User */ "./src/app/modules/authentication/User.ts");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
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
    function RegisterComponent(authService, router, matSnackBar) {
        this.authService = authService;
        this.router = router;
        this.matSnackBar = matSnackBar;
        this.newUser = new _User__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if ((this.newUser.firstName != null) && (this.newUser.lastName != null) && (this.newUser.userId != null) && (this.newUser.password != null)) {
            this.authService.registerUser(this.newUser).subscribe(function (data) {
                console.log(data);
                _this.matSnackBar.open('Registered user successfully!', '', { duration: 1000 });
                _this.router.navigate(['/login']);
            }, function (err) {
                console.log("error message", err.error);
                _this.matSnackBar.open(err.error, '', { duration: 1000 });
            });
        }
    };
    RegisterComponent.prototype.resetInput = function () {
        this.newUser = null;
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'auth-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/modules/authentication/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/modules/authentication/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/components/container/container.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/container/container.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-container{\r\n    margin: auto;\r\n    width: 80vw;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    height: 100vh;\r\n    overflow-x: auto;\r\n\r\n}"

/***/ }),

/***/ "./src/app/modules/newsapp/components/container/container.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/container/container.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"movie-container\">\r\n  <newsapp-thumbnail *ngFor=\"let news of newslist\" [news]=\"news\" (addNewsEvent)=\"addNews($event)\" (deleteNewsEvent)=\"deleteNews($event)\"></newsapp-thumbnail>\r\n  </div>"

/***/ }),

/***/ "./src/app/modules/newsapp/components/container/container.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/container/container.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newsapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../newsapp.service */ "./src/app/modules/newsapp/newsapp.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(newsService, matSnackBar, authSer) {
        this.newsService = newsService;
        this.matSnackBar = matSnackBar;
        this.authSer = authSer;
    }
    ContainerComponent.prototype.addNews = function (news) {
        var _this = this;
        var isAdmin = this.authSer.isAdmin();
        if (isAdmin) {
            this.newsService.addNews(news).subscribe(function (news) {
                _this.matSnackBar.open('News added to application!', '', { duration: 1000 });
            });
        }
        else {
            this.newsService.addToWatchList(news).subscribe(function (news) {
                _this.matSnackBar.open('News added to watchlist!', '', { duration: 1000 });
            });
        }
    };
    ContainerComponent.prototype.deleteNews = function (news) {
        var _this = this;
        var isAdmin = this.authSer.isAdmin();
        if (isAdmin) {
            this.newsService.deleteFromLocalRepo(news).subscribe(function (news) {
                _this.matSnackBar.open('News deleted from application!', '', { duration: 2000 });
            }, function (err) {
                console.log("error message", err.error);
                _this.matSnackBar.open(err.error, '', { duration: 1000 });
            });
        }
        else {
            this.newsService.deleteFromWatchList(news).subscribe(function (news) {
                _this.matSnackBar.open('News deleted from watchlist!', '', { duration: 1000 });
            });
        }
        for (var i = 0; i < this.newslist.length; i++) {
            if (this.newslist[i].title == news.title) {
                this.newslist.splice(i, 1);
            }
        }
    };
    ContainerComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ContainerComponent.prototype, "newslist", void 0);
    ContainerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsapp-container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/modules/newsapp/components/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.css */ "./src/app/modules/newsapp/components/container/container.component.css")]
        }),
        __metadata("design:paramtypes", [_newsapp_service__WEBPACK_IMPORTED_MODULE_1__["NewsappService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/components/detailview/detailview.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/detailview/detailview.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field-infix {\r\n    display: block;\r\n    position: relative;\r\n    flex: auto;\r\n    min-width: 0;\r\n    width: 733px;\r\n}"

/***/ }),

/***/ "./src/app/modules/newsapp/components/detailview/detailview.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/detailview/detailview.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span> {{news.title}}</span>\r\n<h4 mat-dialog-title>{{news.title}}</h4>\r\n<div mat-dialog-content>\r\n\r\n  <p><img class=\"movie-image\" mat-card-image [src]=\"news?.urlToImage\" [alt]=\"news?.title\"></p>\r\n  <p> {{news?.description}}</p>\r\n  <mat-form-field>\r\n    <textarea id =\"description\" matInput [(ngModel)]=\"description\">{{news?.description}}</textarea>\r\n</mat-form-field>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button [mat-dialog-close]=\"true\" class=\"close\">Close</button>\r\n  <button mat-button id=\"updateComment\" color= warn (click)=\"updateComments()\">Update</button>\r\n</div>"

/***/ }),

/***/ "./src/app/modules/newsapp/components/detailview/detailview.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/detailview/detailview.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DetailviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailviewComponent", function() { return DetailviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newsapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../newsapp.service */ "./src/app/modules/newsapp/newsapp.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var DetailviewComponent = /** @class */ (function () {
    function DetailviewComponent(dialogRef, data, newsServ, dialog) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.newsServ = newsServ;
        this.dialog = dialog;
        this.news = data.obj;
        this.description = data.obj.description;
    }
    DetailviewComponent.prototype.ngOnInit = function () {
    };
    DetailviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsapp-detailview',
            template: __webpack_require__(/*! ./detailview.component.html */ "./src/app/modules/newsapp/components/detailview/detailview.component.html"),
            styles: [__webpack_require__(/*! ./detailview.component.css */ "./src/app/modules/newsapp/components/detailview/detailview.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _newsapp_service__WEBPACK_IMPORTED_MODULE_1__["NewsappService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DetailviewComponent);
    return DetailviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/components/localnewslist/localnewslist.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/localnewslist/localnewslist.component.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/newsapp/components/localnewslist/localnewslist.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/localnewslist/localnewslist.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<newsapp-container [newslist]=\"newslist\"></newsapp-container>"

/***/ }),

/***/ "./src/app/modules/newsapp/components/localnewslist/localnewslist.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/localnewslist/localnewslist.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LocalnewslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalnewslistComponent", function() { return LocalnewslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newsapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../newsapp.service */ "./src/app/modules/newsapp/newsapp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalnewslistComponent = /** @class */ (function () {
    function LocalnewslistComponent(newsService) {
        this.newsService = newsService;
        this.newslist = [];
    }
    LocalnewslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        // getLocalRepoNews
        this.newsService.getLocalRepoNews().subscribe(function (newslist) {
            var _a;
            (_a = _this.newslist).push.apply(_a, newslist);
        });
    };
    LocalnewslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsapp-localnewslist',
            template: __webpack_require__(/*! ./localnewslist.component.html */ "./src/app/modules/newsapp/components/localnewslist/localnewslist.component.html"),
            styles: [__webpack_require__(/*! ./localnewslist.component.css */ "./src/app/modules/newsapp/components/localnewslist/localnewslist.component.css")]
        }),
        __metadata("design:paramtypes", [_newsapp_service__WEBPACK_IMPORTED_MODULE_1__["NewsappService"]])
    ], LocalnewslistComponent);
    return LocalnewslistComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/components/newslist/newslist.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/newslist/newslist.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/newsapp/components/newslist/newslist.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/newslist/newslist.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<newsapp-container [newslist]=\"newslist\"></newsapp-container>\r\n"

/***/ }),

/***/ "./src/app/modules/newsapp/components/newslist/newslist.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/newslist/newslist.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewslistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewslistComponent", function() { return NewslistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newsapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../newsapp.service */ "./src/app/modules/newsapp/newsapp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewslistComponent = /** @class */ (function () {
    function NewslistComponent(newsService) {
        this.newsService = newsService;
        this.newslist = [];
    }
    NewslistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getNews().subscribe(function (newslist) {
            var _a;
            (_a = _this.newslist).push.apply(_a, newslist);
        });
    };
    NewslistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsapp-newslist',
            template: __webpack_require__(/*! ./newslist.component.html */ "./src/app/modules/newsapp/components/newslist/newslist.component.html"),
            styles: [__webpack_require__(/*! ./newslist.component.css */ "./src/app/modules/newsapp/components/newslist/newslist.component.css")]
        }),
        __metadata("design:paramtypes", [_newsapp_service__WEBPACK_IMPORTED_MODULE_1__["NewsappService"]])
    ], NewslistComponent);
    return NewslistComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/components/search/search.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/search/search.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/newsapp/components/search/search.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/search/search.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-container\">\r\n  <form class=\"example-form\">\r\n      <mat-form-field>\r\n          <input id=\"search-button-input\" matInput type=\"text\" #box (keyup.enter)=\"onEnter(box.value)\">\r\n          <mat-placeholder>Search </mat-placeholder>\r\n       </mat-form-field>\r\n  </form>\r\n</div>\r\n\r\n<newsapp-container [newslist]=\"newslist\"></newsapp-container>"

/***/ }),

/***/ "./src/app/modules/newsapp/components/search/search.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/newsapp/components/search/search.component.ts ***!
  \***********************************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newsapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../newsapp.service */ "./src/app/modules/newsapp/newsapp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(newsService) {
        this.newsService = newsService;
        this.newslist = [];
    }
    SearchComponent.prototype.onEnter = function (searchKey) {
        var _this = this;
        this.newsService.searchNewsFromLocalRepo(searchKey).subscribe(function (newslist) {
            _this.newslist = newslist;
        });
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsapp-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/modules/newsapp/components/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/modules/newsapp/components/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_newsapp_service__WEBPACK_IMPORTED_MODULE_1__["NewsappService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/components/thumbnail/thumbnail.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/thumbnail/thumbnail.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".movie-thumbnail{\r\n    width:320px;\r\n    margin:10px;\r\n}\r\n\r\n.movie-overview{\r\n    height: 80px;\r\n    overflow: hidden;\r\n    overflow-y: auto;\r\n}\r\n\r\n.movie-image{\r\n    height: 220px;\r\n}\r\n\r\n.movie-overview::-webkit-scrollbar{\r\n    height: 50px;\r\n    width: 5px;\r\n    color: grey;\r\n}\r\n\r\n.movie-actions{\r\n    text-align :right;\r\n}"

/***/ }),

/***/ "./src/app/modules/newsapp/components/thumbnail/thumbnail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/thumbnail/thumbnail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"movie-thumbnail\">\r\n\r\n  <mat-card-header>\r\n      <mat-card-title>\r\n          {{ (news?.title.length>33)? (news?.title | slice:0:33)+'..':(news?.title) }}\r\n      </mat-card-title>\r\n      <mat-card-subtitle>{{news?.publishedAt}}</mat-card-subtitle>\r\n  </mat-card-header>\r\n  <img class=\"movie-image\" mat-card-image [src]=\"news?.urlToImage\" [alt]=\"news?.title\">\r\n \r\n  <mat-card-content class=\"movie-overview\"> \r\n      {{news?.description}}\r\n  </mat-card-content>\r\n\r\n  <mat-card-actions class=\"movie-actions\" *ngIf=\"!authService.isAdmin()\">\r\n      <button *ngIf=\"!(this.router.url == '/news/watchlist')\" mat-button color=\"primary\" (click)=\"addNews()\" class=\"addButton\">Add</button>\r\n       <button *ngIf=\"!(this.router.url == '/news/appnews' || this.router.url == '/news/search')\" mat-button class=\"deleteButton\" color=\"primary\" (click)=\"deleteNews()\">Delete</button>\r\n       <button mat-button color=\"primary\" (click)=\"viewDetails ()\">View Details</button>\r\n    </mat-card-actions>\r\n   <mat-card-actions class=\"movie-actions\" *ngIf=\"authService.isAdmin()\">\r\n      <button *ngIf=\"this.router.url == '/news/allnews'\" mat-button color=\"primary\" (click)=\"addNews()\" class=\"addButton\">Add</button>\r\n       <button *ngIf=\"this.router.url == '/news/appnews'\" mat-button color=\"primary\" (click)=\"deleteNews()\" class=\"deleteButton\">Delete</button>\r\n       <button mat-button color=\"primary\" (click)=\"viewDetails ()\" class=\"viewdetail\">View Details</button>\r\n    </mat-card-actions>\r\n</mat-card>"

/***/ }),

/***/ "./src/app/modules/newsapp/components/thumbnail/thumbnail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/thumbnail/thumbnail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumbnailComponent", function() { return ThumbnailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
/* harmony import */ var _detailview_detailview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../detailview/detailview.component */ "./src/app/modules/newsapp/components/detailview/detailview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ThumbnailComponent = /** @class */ (function () {
    function ThumbnailComponent(snackBar, matDlg, authService, router) {
        this.snackBar = snackBar;
        this.matDlg = matDlg;
        this.authService = authService;
        this.router = router;
        this.addNewsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteNewsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ThumbnailComponent.prototype.ngOnInit = function () {
    };
    ThumbnailComponent.prototype.addNews = function () {
        this.addNewsEvent.emit(this.news);
    };
    ThumbnailComponent.prototype.deleteNews = function () {
        this.deleteNewsEvent.emit(this.news);
    };
    ThumbnailComponent.prototype.viewDetails = function () {
        console.log('movie is getting updated');
        var dialogRef = this.matDlg.open(_detailview_detailview_component__WEBPACK_IMPORTED_MODULE_5__["DetailviewComponent"], {
            width: "800px",
            data: { obj: this.news }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "news", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "addNewsEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ThumbnailComponent.prototype, "deleteNewsEvent", void 0);
    ThumbnailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsapp-thumbnail',
            template: __webpack_require__(/*! ./thumbnail.component.html */ "./src/app/modules/newsapp/components/thumbnail/thumbnail.component.html"),
            styles: [__webpack_require__(/*! ./thumbnail.component.css */ "./src/app/modules/newsapp/components/thumbnail/thumbnail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ThumbnailComponent);
    return ThumbnailComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/components/watchlist/watchlist.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/watchlist/watchlist.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/newsapp/components/watchlist/watchlist.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/watchlist/watchlist.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<newsapp-container [newslist]=\"newslist\"></newsapp-container>"

/***/ }),

/***/ "./src/app/modules/newsapp/components/watchlist/watchlist.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/newsapp/components/watchlist/watchlist.component.ts ***!
  \*****************************************************************************/
/*! exports provided: WatchlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistComponent", function() { return WatchlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _newsapp_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../newsapp.service */ "./src/app/modules/newsapp/newsapp.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WatchlistComponent = /** @class */ (function () {
    function WatchlistComponent(newsService) {
        this.newsService = newsService;
        this.newslist = [];
    }
    WatchlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsService.getMyNews().subscribe(function (newslist) {
            var _a;
            (_a = _this.newslist).push.apply(_a, newslist);
        });
    };
    WatchlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'newsapp-watchlist',
            template: __webpack_require__(/*! ./watchlist.component.html */ "./src/app/modules/newsapp/components/watchlist/watchlist.component.html"),
            styles: [__webpack_require__(/*! ./watchlist.component.css */ "./src/app/modules/newsapp/components/watchlist/watchlist.component.css")]
        }),
        __metadata("design:paramtypes", [_newsapp_service__WEBPACK_IMPORTED_MODULE_1__["NewsappService"]])
    ], WatchlistComponent);
    return WatchlistComponent;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/newsapp/interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../authentication/authentication.service */ "./src/app/modules/authentication/authentication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(auth) {
        this.auth = auth;
        console.log();
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        debugger;
        request = request.clone({
            headers: request.headers.set('Authorization', 'Bearer ' + ("" + this.auth.getToken()))
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/newsapp-router.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/modules/newsapp/newsapp-router.module.ts ***!
  \**********************************************************/
/*! exports provided: NewsAppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsAppRoutingModule", function() { return NewsAppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newsapp_components_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../newsapp/components/newslist/newslist.component */ "./src/app/modules/newsapp/components/newslist/newslist.component.ts");
/* harmony import */ var _newsapp_components_localnewslist_localnewslist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../newsapp/components/localnewslist/localnewslist.component */ "./src/app/modules/newsapp/components/localnewslist/localnewslist.component.ts");
/* harmony import */ var _newsapp_components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../newsapp/components/watchlist/watchlist.component */ "./src/app/modules/newsapp/components/watchlist/watchlist.component.ts");
/* harmony import */ var _newsapp_components_search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../newsapp/components/search/search.component */ "./src/app/modules/newsapp/components/search/search.component.ts");
/* harmony import */ var _authGuard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../authGuard.service */ "./src/app/authGuard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var newsAppRoutes = [
    {
        path: 'news',
        children: [
            {
                path: '',
                redirectTo: '/news/allnews',
                pathMatch: 'full',
                canActivate: [_authGuard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]]
            },
            {
                path: 'allnews',
                component: _newsapp_components_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_2__["NewslistComponent"],
                canActivate: [_authGuard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
                data: {
                    routeparam: 'allnews'
                },
            }, {
                path: 'appnews',
                component: _newsapp_components_localnewslist_localnewslist_component__WEBPACK_IMPORTED_MODULE_3__["LocalnewslistComponent"],
                canActivate: [_authGuard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
                data: {
                    routeparam: 'appnews'
                },
            }, {
                path: 'watchlist',
                component: _newsapp_components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_4__["WatchlistComponent"],
                canActivate: [_authGuard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
                data: {
                    routeparam: 'watchlist'
                },
            }, {
                path: 'search',
                component: _newsapp_components_search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"],
                canActivate: [_authGuard_service__WEBPACK_IMPORTED_MODULE_6__["AuthGuardService"]],
                data: {
                    routeparam: 'search'
                },
            }
        ]
    }
];
var NewsAppRoutingModule = /** @class */ (function () {
    function NewsAppRoutingModule() {
    }
    NewsAppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(newsAppRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], NewsAppRoutingModule);
    return NewsAppRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/newsapp.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/newsapp/newsapp.module.ts ***!
  \***************************************************/
/*! exports provided: NewsappModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsappModule", function() { return NewsappModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_container_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/container/container.component */ "./src/app/modules/newsapp/components/container/container.component.ts");
/* harmony import */ var _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/thumbnail/thumbnail.component */ "./src/app/modules/newsapp/components/thumbnail/thumbnail.component.ts");
/* harmony import */ var _components_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/newslist/newslist.component */ "./src/app/modules/newsapp/components/newslist/newslist.component.ts");
/* harmony import */ var _newsapp_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsapp.service */ "./src/app/modules/newsapp/newsapp.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_localnewslist_localnewslist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/localnewslist/localnewslist.component */ "./src/app/modules/newsapp/components/localnewslist/localnewslist.component.ts");
/* harmony import */ var _newsapp_newsapp_router_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../newsapp/newsapp-router.module */ "./src/app/modules/newsapp/newsapp-router.module.ts");
/* harmony import */ var _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/watchlist/watchlist.component */ "./src/app/modules/newsapp/components/watchlist/watchlist.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/modules/newsapp/components/search/search.component.ts");
/* harmony import */ var _interceptor_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./interceptor.service */ "./src/app/modules/newsapp/interceptor.service.ts");
/* harmony import */ var _authGuard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../authGuard.service */ "./src/app/authGuard.service.ts");
/* harmony import */ var _components_detailview_detailview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/detailview/detailview.component */ "./src/app/modules/newsapp/components/detailview/detailview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var NewsappModule = /** @class */ (function () {
    function NewsappModule() {
    }
    NewsappModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _newsapp_newsapp_router_module__WEBPACK_IMPORTED_MODULE_14__["NewsAppRoutingModule"]
            ],
            entryComponents: [_components_detailview_detailview_component__WEBPACK_IMPORTED_MODULE_19__["DetailviewComponent"]],
            declarations: [_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"], _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__["ThumbnailComponent"], _components_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_4__["NewslistComponent"], _components_localnewslist_localnewslist_component__WEBPACK_IMPORTED_MODULE_13__["LocalnewslistComponent"], _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_15__["WatchlistComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"], _components_detailview_detailview_component__WEBPACK_IMPORTED_MODULE_19__["DetailviewComponent"]],
            exports: [_components_container_container_component__WEBPACK_IMPORTED_MODULE_2__["ContainerComponent"], _components_thumbnail_thumbnail_component__WEBPACK_IMPORTED_MODULE_3__["ThumbnailComponent"], _components_newslist_newslist_component__WEBPACK_IMPORTED_MODULE_4__["NewslistComponent"], _components_localnewslist_localnewslist_component__WEBPACK_IMPORTED_MODULE_13__["LocalnewslistComponent"], _newsapp_newsapp_router_module__WEBPACK_IMPORTED_MODULE_14__["NewsAppRoutingModule"], _components_watchlist_watchlist_component__WEBPACK_IMPORTED_MODULE_15__["WatchlistComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_16__["SearchComponent"], _components_detailview_detailview_component__WEBPACK_IMPORTED_MODULE_19__["DetailviewComponent"]],
            providers: [_newsapp_service__WEBPACK_IMPORTED_MODULE_5__["NewsappService"], {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                    useClass: _interceptor_service__WEBPACK_IMPORTED_MODULE_17__["TokenInterceptor"],
                    multi: true
                }, _authGuard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuardService"]
            ]
        })
    ], NewsappModule);
    return NewsappModule;
}());



/***/ }),

/***/ "./src/app/modules/newsapp/newsapp.service.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/newsapp/newsapp.service.ts ***!
  \****************************************************/
/*! exports provided: NewsappService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsappService", function() { return NewsappService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsappService = /** @class */ (function () {
    //GET /api/v1/watchlist
    function NewsappService(http) {
        this.http = http;
        this.apiKey = "e4b41bc6acf248d19f90e1617d411beb";
        this.baseRepoUrl = "https://newsapi.org/v2/";
        this.newsApiEndpoint = "https://newsapi.org/v2/top-headlines";
        this.newsLocalRepoUrl = "http://localhost:7081/api/v1/news";
        this.deleteFromLocalRepoUrl = "http://localhost:7081/api/v1/news/delete";
        this.watchListUrl = "http://localhost:7081/api/v1/watchlist";
    }
    //https://newsapi.org/v2/everything?q=%3C%3Csearch_text%3E%3E&apiKey=e4b41bc6acf248d19f90e1617d411beb&language=en&page=1
    //get movies from third party
    NewsappService.prototype.getNews = function () {
        //https://newsapi.org/v2/top-headlines?country=in&apikey=e4b41bc6acf248d19f90e1617d411beb&page=1
        var url = this.newsApiEndpoint + "?country=in&apikey=" + this.apiKey + "&page=1";
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.pickMovieResults));
    };
    //get from local
    NewsappService.prototype.getLocalRepoNews = function () {
        return this.http.get(this.newsLocalRepoUrl);
    };
    //get from watchlist
    NewsappService.prototype.getMyNews = function () {
        return this.http.get(this.watchListUrl);
    };
    // add movies to local repo by admin
    NewsappService.prototype.addNews = function (news) {
        return this.http.post(this.newsLocalRepoUrl, news);
    };
    NewsappService.prototype.addToWatchList = function (news) {
        return this.http.post(this.watchListUrl, news);
    };
    NewsappService.prototype.pickMovieResults = function (response) {
        return response['articles'];
    };
    NewsappService.prototype.deleteFromLocalRepo = function (news) {
        var url = this.deleteFromLocalRepoUrl + "/" + news.newsId;
        return this.http.delete(url, { responseType: 'text' });
    };
    NewsappService.prototype.deleteFromWatchList = function (news) {
        var url = this.watchListUrl + "/" + news.newsId;
        return this.http.delete(url, { responseType: 'text' });
    };
    NewsappService.prototype.searchNewsFromLocalRepo = function (searchKey, page) {
        if (page === void 0) { page = 1; }
        if (searchKey.length > 0) {
            var url = this.newsLocalRepoUrl + "/search/" + searchKey;
            return this.http.get(url);
        }
        return null;
    };
    NewsappService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsappService);
    return NewsappService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ZFSE\NewsApp01\NewsApp\UI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map