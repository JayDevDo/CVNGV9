(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(_cvService) {
        this._cvService = _cvService;
        this.title = "Jay's CV presented with Angular 9.1.1";
    }
    ngOnInit() {
        this.appComponentCV = this._cvService.getCV()
            .subscribe((data) => {
            this.appComponentCV = data;
            console.log("this.appComponentCV data", this.appComponentCV);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["cvngv9"]], decls: 29, vars: 9, consts: [["id", "sticky"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "routerLink", "/profile", "routerLinkActive", "", 3, "active"], ["profileTab", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/jobs", "routerLinkActive", "", 3, "active"], ["jobsTab", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/domains", "routerLinkActive", "", 3, "active"], ["jobDomainsTab", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/locations", "routerLinkActive", "", 3, "active"], ["jobLocationsTab", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/languages", "routerLinkActive", "", 3, "active"], ["languageTab", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/education", "routerLinkActive", "", 3, "active"], ["educationTab", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/tools", "routerLinkActive", "", 3, "active"], ["toolsTab", "routerLinkActive"], ["mat-tab-link", "", "routerLink", "/contact", "routerLinkActive", "", 3, "active"], ["contactTab", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Profile ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Jobs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Domains ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Locations ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Languages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Education ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Tools ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r0.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r1.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r2.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r3.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r4.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r5.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r6.isActive);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", _r7.isActive);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["#sticky[_ngcontent-%COMP%]{\n    position: -webkit-sticky;\n    position: sticky;\n    text-align: center;\n}\n\nnav[_ngcontent-%COMP%]{\n    margin: 0% 5% 1% 5% ;\n    padding: 0px 0px 0px 0px;\n    font-size: 1.8rem;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    font-size: 1.15rem !important;\n    font-weight: bold;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{\n    background-color: #0c0624;\n    color: #FDED2A;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2){\n    color: #0c0624;\n    background-color: #5bbce2;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3){\n    color: #fff;\n    background-color: #245569;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4){\n    color: #fff;\n    background-color: #2f1993;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5){\n    background-color: #d4e4f7;\n    color: #000000;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(6){\n    background-color: #905bec;\n    color: #190934;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(7){\n    background-color: #2b5797;\n    color: #ffffff;\n}\n\n.mat-tab-nav-bar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(8){\n    background-color: #3F729B;\n    color: #ffffff;\n}\n\nrouter-outlet[_ngcontent-%COMP%]{\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzdGlja3l7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbm5hdntcbiAgICBtYXJnaW46IDAlIDUlIDElIDUlIDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDBweCAwcHg7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG59XG5cbi5tYXQtdGFiLW5hdi1iYXIgYXtcbiAgICBmb250LXNpemU6IDEuMTVyZW0gIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1hdC10YWItbmF2LWJhciBhOmZpcnN0LWNoaWxke1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzA2MjQ7XG4gICAgY29sb3I6ICNGREVEMkE7XG59XG5cbi5tYXQtdGFiLW5hdi1iYXIgYTpudGgtY2hpbGQoMil7XG4gICAgY29sb3I6ICMwYzA2MjQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYmNlMjtcbn1cblxuLm1hdC10YWItbmF2LWJhciBhOm50aC1jaGlsZCgzKXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjQ1NTY5O1xufVxuXG4ubWF0LXRhYi1uYXYtYmFyIGE6bnRoLWNoaWxkKDQpe1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjE5OTM7XG59XG5cbi5tYXQtdGFiLW5hdi1iYXIgYTpudGgtY2hpbGQoNSl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZTRmNztcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLm1hdC10YWItbmF2LWJhciBhOm50aC1jaGlsZCg2KXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA1YmVjO1xuICAgIGNvbG9yOiAjMTkwOTM0O1xufVxuXG4ubWF0LXRhYi1uYXYtYmFyIGE6bnRoLWNoaWxkKDcpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjU3OTc7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG4ubWF0LXRhYi1uYXYtYmFyIGE6bnRoLWNoaWxkKDgpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjcyOUI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbnJvdXRlci1vdXRsZXR7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cvngv9',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_Contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/Contact.component */ "./src/app/contact/Contact.component.ts");
/* harmony import */ var _education_Education_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./education/Education.component */ "./src/app/education/Education.component.ts");
/* harmony import */ var _jobDomains_JobDomains_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./jobDomains/JobDomains.component */ "./src/app/jobDomains/JobDomains.component.ts");
/* harmony import */ var _jobLocations_JobLocations_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./jobLocations/JobLocations.component */ "./src/app/jobLocations/JobLocations.component.ts");
/* harmony import */ var _jobs_Jobs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./jobs/Jobs.component */ "./src/app/jobs/Jobs.component.ts");
/* harmony import */ var _languages_Languages_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./languages/Languages.component */ "./src/app/languages/Languages.component.ts");
/* harmony import */ var _profile_Profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/Profile.component */ "./src/app/profile/Profile.component.ts");
/* harmony import */ var _tools_Tools_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./tools/Tools.component */ "./src/app/tools/Tools.component.ts");




















const routes = [
    { path: '', redirectTo: 'profile', pathMatch: 'full' },
    { path: 'profile', component: _profile_Profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"] },
    { path: 'jobs', component: _jobs_Jobs_component__WEBPACK_IMPORTED_MODULE_14__["JobsComponent"] },
    { path: 'domains', component: _jobDomains_JobDomains_component__WEBPACK_IMPORTED_MODULE_12__["JobDomainsComponent"] },
    { path: 'languages', component: _languages_Languages_component__WEBPACK_IMPORTED_MODULE_15__["LanguagesComponent"] },
    { path: 'education', component: _education_Education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"] },
    { path: 'locations', component: _jobLocations_JobLocations_component__WEBPACK_IMPORTED_MODULE_13__["JobLocationsComponent"] },
    { path: 'tools', component: _tools_Tools_component__WEBPACK_IMPORTED_MODULE_17__["ToolsComponent"] },
    { path: 'contact', component: _contact_Contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _cv_service__WEBPACK_IMPORTED_MODULE_8__["CVService"]
    ], imports: [[
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
        _contact_Contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _education_Education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
        _jobDomains_JobDomains_component__WEBPACK_IMPORTED_MODULE_12__["JobDomainsComponent"],
        _jobLocations_JobLocations_component__WEBPACK_IMPORTED_MODULE_13__["JobLocationsComponent"],
        _jobs_Jobs_component__WEBPACK_IMPORTED_MODULE_14__["JobsComponent"],
        _languages_Languages_component__WEBPACK_IMPORTED_MODULE_15__["LanguagesComponent"],
        _profile_Profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
        _tools_Tools_component__WEBPACK_IMPORTED_MODULE_17__["ToolsComponent"]], imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_4__["MatSliderModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["NoopAnimationsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                    _contact_Contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _education_Education_component__WEBPACK_IMPORTED_MODULE_11__["EducationComponent"],
                    _jobDomains_JobDomains_component__WEBPACK_IMPORTED_MODULE_12__["JobDomainsComponent"],
                    _jobLocations_JobLocations_component__WEBPACK_IMPORTED_MODULE_13__["JobLocationsComponent"],
                    _jobs_Jobs_component__WEBPACK_IMPORTED_MODULE_14__["JobsComponent"],
                    _languages_Languages_component__WEBPACK_IMPORTED_MODULE_15__["LanguagesComponent"],
                    _profile_Profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
                    _tools_Tools_component__WEBPACK_IMPORTED_MODULE_17__["ToolsComponent"]
                ],
                providers: [
                    _cv_service__WEBPACK_IMPORTED_MODULE_8__["CVService"]
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/Contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/Contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");



class ContactComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
        this.pageloc = location.href;
    }
    ngOnInit() {
        this.contactData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.contactData = data[7];
            this.contactData.id = this.contactData.id.toUpperCase();
            console.log("this.contactData Item", this.contactData);
            this.contactData.data[2].value = ["<a href='", this.contactData.data[2].value, "'>click to download</a>"].join("");
            this.contactData.data[3].value = this.pageloc;
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], decls: 37, vars: 8, consts: [[1, "far", "fa-address-card"], [1, "fas", "fa-envelope"], ["target", "_blank", "title", "Opens in a new tab", "href", "assets/CV-JayVanDoormalen.pdf"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "click to download");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.contactData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.data[0].item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.data[0].value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.data[1].item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.contactData.data[1].value, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.data[2].item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.data[3].item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contactData.data[3].value);
    } }, styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\ndiv[_ngcontent-%COMP%]{\n    background-color: #3F729B;\n    color: #ffffff;\n    font-size: 1.25rem;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    margin: 0% 10% 1% 10% ;\n}\n\nspan[_ngcontent-%COMP%]{\n    margin-right: 1%;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #FDDC22;\n    text-align: center;\n    font-size: 1.5rem;\n    padding-top: 2%;\n}\n\nb[_ngcontent-%COMP%]{\n    color: #FDDC22;\n}\n\na[_ngcontent-%COMP%]:link{\n    color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjcyOUI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwJSAxMCUgMSUgMTAlIDtcbn1cblxuc3BhbntcbiAgICBtYXJnaW4tcmlnaHQ6IDElO1xufVxuXG5oMXtcbiAgICBjb2xvcjogI0ZEREMyMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuXG5ie1xuICAgIGNvbG9yOiAjRkREQzIyO1xufVxuXG5hOmxpbmt7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/cv.service.ts":
/*!*******************************!*\
  !*** ./src/app/cv.service.ts ***!
  \*******************************/
/*! exports provided: CVService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CVService", function() { return CVService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class CVService {
    constructor(http) {
        this.http = http;
        this._url = './assets/cvNGv2-NL.json';
    }
    getCV() { return this.http.get(this._url); }
}
CVService.ɵfac = function CVService_Factory(t) { return new (t || CVService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
CVService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CVService, factory: CVService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CVService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/education/Education.component.ts":
/*!**************************************************!*\
  !*** ./src/app/education/Education.component.ts ***!
  \**************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function EducationComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const edu_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r9);
} }
class EducationComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
    }
    ngOnInit() {
        this.educationData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.educationData = data[5];
            this.educationData.id = this.educationData.id.toUpperCase();
            console.log("this.educationData", this.educationData);
        });
    }
}
EducationComponent.ɵfac = function EducationComponent_Factory(t) { return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationComponent, selectors: [["education"]], decls: 8, vars: 2, consts: [[1, "fas", "fa-graduation-cap"], [4, "ngFor", "ngForOf"]], template: function EducationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_li_7_Template, 3, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.educationData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.educationData.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\ndiv[_ngcontent-%COMP%]{\n    background-color: #905bec;\n    color: #190934;\n    font-size: 1.25rem;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    margin: 0% 10% 1% 10% ;\n}\n\na[_ngcontent-%COMP%]{\n    font-size: 1.3rem;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #FDDC22;\n    text-align: center;\n    font-size: 1.75rem;\n}\n\np[_ngcontent-%COMP%]{\n    background-color: #905bec;\n    color: #190934;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDViZWM7XG4gICAgY29sb3I6ICMxOTA5MzQ7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwJSAxMCUgMSUgMTAlIDtcbn1cblxuYXtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuaDF7XG4gICAgY29sb3I6ICNGRERDMjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxucHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA1YmVjO1xuICAgIGNvbG9yOiAjMTkwOTM0O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'education',
                templateUrl: './education.component.html',
                styleUrls: ['./education.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/jobDomains/JobDomains.component.ts":
/*!****************************************************!*\
  !*** ./src/app/jobDomains/JobDomains.component.ts ***!
  \****************************************************/
/*! exports provided: JobDomainsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDomainsComponent", function() { return JobDomainsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function JobDomainsComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jdom_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](jdom_r11.domain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", jdom_r11.years, " years and ", jdom_r11.months, " months");
} }
class JobDomainsComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
    }
    ngOnInit() {
        this.jobDomainData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.jobDomainData = data[1];
            this.jobDomainData.id = this.jobDomainData.id.toUpperCase();
            console.log("this.jobDomainData Item", this.jobDomainData);
            this.jobDomainData.data.forEach((dv) => {
                dv.years = Math.floor(dv.duration / 12);
                dv.months = dv.duration % 12;
            });
        });
    }
}
JobDomainsComponent.ɵfac = function JobDomainsComponent_Factory(t) { return new (t || JobDomainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
JobDomainsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobDomainsComponent, selectors: [["jobDomains"]], decls: 12, vars: 2, consts: [[1, "fas", "fa-users"], [1, "fas", "fa-headphones-alt"], [1, "fas", "fa-campground"], [1, "fas", "fa-warehouse"], [1, "fas", "fa-funnel-dollar"], ["title", "click to filter jobs by domain", 4, "ngFor", "ngForOf"], ["title", "click to filter jobs by domain"]], template: function JobDomainsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, JobDomainsComponent_li_11_Template, 7, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobDomainData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobDomainData.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\ndiv[_ngcontent-%COMP%]{\n    background-color: #245569;\n    color: white;\n    font-size: 1.25rem;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    margin: 0% 10% 1% 10% ;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #FDDC22;\n    text-align: center;\n    font-size: 1.5rem;\n    padding-top: 2%;\n}\n\nspan[_ngcontent-%COMP%]{\n    margin-left: 1%;\n    font-size: 1.25rem;\n}\n\nb[_ngcontent-%COMP%]{\n    color: #FDDC22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iRG9tYWlucy9qb2JEb21haW5zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvam9iRG9tYWlucy9qb2JEb21haW5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDU1Njk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbjogMCUgMTAlIDElIDEwJSA7XG59XG5cbmgxe1xuICAgIGNvbG9yOiAjRkREQzIyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMiU7XG59XG5cbnNwYW57XG4gICAgbWFyZ2luLWxlZnQ6IDElO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuYntcbiAgICBjb2xvcjogI0ZEREMyMjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDomainsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jobDomains',
                templateUrl: './jobDomains.component.html',
                styleUrls: ['./jobDomains.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/jobLocations/JobLocations.component.ts":
/*!********************************************************!*\
  !*** ./src/app/jobLocations/JobLocations.component.ts ***!
  \********************************************************/
/*! exports provided: JobLocationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLocationsComponent", function() { return JobLocationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function JobLocationsComponent_li_7_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const loc_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](loc_r15);
} }
function JobLocationsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, JobLocationsComponent_li_7_li_6_Template, 3, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cntr_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cntr_r13.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cntr_r13.location);
} }
class JobLocationsComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
    }
    ngOnInit() {
        this.jobLocationData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.jobLocationData = data[2];
            this.jobLocationData.id = this.jobLocationData.id.toUpperCase();
            console.log("this.jobLocationData", this.jobLocationData);
        });
    }
}
JobLocationsComponent.ɵfac = function JobLocationsComponent_Factory(t) { return new (t || JobLocationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
JobLocationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobLocationsComponent, selectors: [["jobLocations"]], decls: 10, vars: 2, consts: [[1, "fas", "fa-globe-europe"], [4, "ngFor", "ngForOf"], [1, "maplink"], ["src", "https://www.google.com/maps/d/embed?mid=1FkuGGgHPt2XS-D3BdE6dCJGqLoY", "width", "600", "height", "400"]], template: function JobLocationsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, JobLocationsComponent_li_7_Template, 7, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.jobLocationData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobLocationData.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\ndiv[_ngcontent-%COMP%]{\n    color: #F0F7D4;\n    background-color: #2f1993;\n    font-size: 1.25rem;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    margin: 0% 10% 1% 10% ;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #FDDC22;\n    text-align: center;\n    font-size: 1.5rem;\n    padding-top: 2px;\n}\n\nb[_ngcontent-%COMP%]{\n    color: #FDDC22;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9iTG9jYXRpb25zL2pvYkxvY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9qb2JMb2NhdGlvbnMvam9iTG9jYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuZGl2e1xuICAgIGNvbG9yOiAjRjBGN0Q0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZjE5OTM7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiAwJSAxMCUgMSUgMTAlIDtcbn1cblxuaDF7XG4gICAgY29sb3I6ICNGRERDMjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG59XG5cbmJ7XG4gICAgY29sb3I6ICNGRERDMjI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobLocationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jobLocations',
                templateUrl: './jobLocations.component.html',
                styleUrls: ['./jobLocations.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/jobs/Jobs.component.ts":
/*!****************************************!*\
  !*** ./src/app/jobs/Jobs.component.ts ***!
  \****************************************/
/*! exports provided: JobsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsComponent", function() { return JobsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function JobsComponent_li_76_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 18);
} }
function JobsComponent_li_76_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 19);
} }
function JobsComponent_li_76_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dmn_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", dmn_r24, " ");
} }
function JobsComponent_li_76_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lng_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", lng_r25, " ");
} }
function JobsComponent_li_76_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tl_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tl_r26, " ");
} }
function JobsComponent_li_76_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_li_76_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const i_r18 = ctx.index; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.setActJob(i_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JobsComponent_li_76_i_1_Template, 1, 0, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JobsComponent_li_76_i_2_Template, 1, 0, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Company:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Descr:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, JobsComponent_li_76_span_19_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Location:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Start Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "End Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Duration:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Languages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, JobsComponent_li_76_span_43_Template, 2, 1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Tools used:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, JobsComponent_li_76_span_47_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const job_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r16.jobFiltered(i_r18));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(i_r18 == ctx_r16.actJob));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 == ctx_r16.actJob);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", job_r17.jobTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !(i_r18 == ctx_r16.actJob));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r17.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r17.jobDescr);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", job_r17.jobDomain.length > 1 ? "Domains" : "Domain", ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", job_r17.jobDomain);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r17.countryAndlocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r17.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r17.endDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", job_r17.durationMonths, " months");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", job_r17.languages);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", job_r17.toolsUsed);
} }
class JobsComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
        this.lr = '\n';
        this.actJob = -1;
        this.jobFltrArr = [false, false, false, false, false, false, false, false, false, false, false, false, false];
        this.jobFiltered = (jobId) => { return this.jobFltrArr[jobId]; };
        this.fltrRes = {
            hide: true,
            key: { "srchKey": 'none', "value": '' },
            found: 0
        };
        this.fltrAct = {
            hideFltrOps: true,
            hideDmn: true,
            hideLoc: true,
            hideLng: true,
            hideTml: true
        };
        this.changeFltrOpsState = () => {
            this.fltrAct.hideFltrOps = !this.fltrAct.hideFltrOps;
            if (this.fltrAct.hideFltrOps) {
                this.fltrAct.hideDmn = true;
                this.fltrAct.hideLoc = true;
                this.fltrAct.hideLng = true;
                this.fltrAct.hideTml = true;
            }
        };
        this.changeShowDmn = () => {
            this.fltrAct.hideDmn = !this.fltrAct.hideDmn;
            this.fltrAct.hideLoc = true;
            this.fltrAct.hideLng = true;
            this.fltrAct.hideTml = true;
        };
        this.changeShowLoc = () => {
            this.fltrAct.hideLoc = !this.fltrAct.hideLoc;
            this.fltrAct.hideDmn = true;
            this.fltrAct.hideLng = true;
            this.fltrAct.hideTml = true;
        };
        this.changeShowLng = () => {
            this.fltrAct.hideLng = !this.fltrAct.hideLng;
            this.fltrAct.hideDmn = true;
            this.fltrAct.hideLoc = true;
            this.fltrAct.hideTml = true;
        };
        this.changeShowTml = () => {
            this.fltrAct.hideTml = !this.fltrAct.hideTml;
            this.fltrAct.hideDmn = true;
            this.fltrAct.hideLoc = true;
            this.fltrAct.hideLng = true;
        };
        this.clearFltrRes = () => {
            this.fltrRes = {
                hide: true,
                key: { "srchKey": 'none', "value": '' },
                found: 0
            };
        };
        this.value = 2000;
        this.ticks = {
            placement: 'After',
            thumbLabel: "thumbLabel",
            largeStep: 5,
            smallStep: 1,
            min: 1988,
            max: 2020
        };
        this.step = 10;
        this.tooltip = {
            placement: 'Before',
            isVisible: true,
            showOn: 'Always'
        };
    }
    ngOnInit() {
        this.jobsData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.jobsData = data[0];
            this.jobsData.id = this.jobsData.id.toUpperCase();
            this.jobsDmnData = data[1].data;
            this.jobsLocData = data[2].data;
            this.jobsLngData = data[3].data;
            console.log("this.jobsData ", this.jobsData.data, "this.jobsDmnData ", this.jobsDmnData, "this.jobsLocData ", this.jobsLocData, "this.jobsLngData ", this.jobsLngData);
        });
    }
    isActJob(jobNr) { return (jobNr === this.actJob); }
    setActJob(jobNr) {
        if (jobNr == this.actJob) {
            this.actJob = -1;
        }
        else {
            this.actJob = jobNr;
        }
    }
    resetFltrArr() {
        this.jobFltrArr = [false, false, false, false, false, false, false, false, false, false, false, false, false];
        this.clearFltrRes();
    }
    filterJobsByDomain(dmn) {
        this.resetFltrArr();
        this.clearFltrRes();
        this.fltrRes.hide = false;
        this.fltrRes.key.srchKey = "domain";
        this.fltrRes.key.value = dmn;
        for (let ji = 0; ji < this.jobsData.data.length; ji++) {
            if (this.jobsData.data[ji].jobDomain.includes(dmn)) {
                this.jobFltrArr[ji] = false;
                this.fltrRes.found++;
            }
            else {
                this.jobFltrArr[ji] = true;
            }
        }
    }
    filterJobsByLocation(loc) {
        this.resetFltrArr();
        this.clearFltrRes();
        this.fltrRes.hide = false;
        this.fltrRes.key.srchKey = "Country";
        this.fltrRes.key.value = loc;
        for (let ji = 0; ji < this.jobsData.data.length; ji++) {
            if (this.jobsData.data[ji].countryAndlocation.includes(loc)) {
                this.jobFltrArr[ji] = false;
                this.fltrRes.found++;
            }
            else {
                this.jobFltrArr[ji] = true;
            }
        }
    }
    filterJobsByLanguage(lng) {
        this.resetFltrArr();
        this.clearFltrRes();
        this.fltrRes.hide = false;
        this.fltrRes.key.srchKey = "Language";
        this.fltrRes.key.value = lng;
        for (let jl = 0; jl < this.jobsData.data.length; jl++) {
            if (this.jobsData.data[jl].languages.includes(lng)) {
                this.jobFltrArr[jl] = false;
                this.fltrRes.found++;
            }
            else {
                this.jobFltrArr[jl] = true;
            }
        }
    }
    filterJobsByPeriod(per) {
        this.resetFltrArr();
        this.clearFltrRes();
        this.fltrRes.hide = false;
        this.fltrRes.key.srchKey = "Period";
        this.fltrRes.key.value = per;
        for (let jp = 0; jp < this.jobsData.data.length; jp++) {
            let sd = parseInt(this.jobsData.data[jp].startDate.slice(0, 4));
            let ed = parseInt(this.jobsData.data[jp].endDate.slice(0, 4));
            console.log("filterJobsByPeriod:", this.lr, "start date yr:", sd, "period:", per, "end date yr:", ed);
            //  return (i >= minValueInclusive && i <= maxValueInclusive);
            if (per >= sd && per <= ed) {
                this.jobFltrArr[jp] = false;
                this.fltrRes.found++;
            }
            else {
                this.jobFltrArr[jp] = true;
            }
        }
    }
    changeValue(event) {
        this.perSelected = event.value;
        this.filterJobsByPeriod(this.perSelected);
    }
}
JobsComponent.ɵfac = function JobsComponent_Factory(t) { return new (t || JobsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
JobsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobsComponent, selectors: [["jobs"]], decls: 77, vars: 27, consts: [[1, "jobContent"], [3, "click"], [3, "hidden"], ["thumbLabel", "", "tickInterval", "auto", "min", "1988", "max", "2020", 3, "input"], ["id", "srchRes", 3, "hidden"], [1, "clrFltr"], [1, "jobListWrapper"], ["title", "click for details", "class", "jobTitle", 3, "hidden", "click", 4, "ngFor", "ngForOf"], ["title", "click for details", 1, "jobTitle", 3, "hidden", "click"], ["class", "fas fa-chevron-right", 4, "ngIf"], ["class", "fas fa-chevron-down", 4, "ngIf"], [1, "jobdetails", 3, "hidden"], [1, "joblist"], [1, "jdHeader"], [1, "jdItem"], ["class", "jdItem domItem", 4, "ngFor", "ngForOf"], ["class", "jdItem lngItem", 4, "ngFor", "ngForOf"], ["class", "jdItem toolItem", 4, "ngFor", "ngForOf"], [1, "fas", "fa-chevron-right"], [1, "fas", "fa-chevron-down"], [1, "jdItem", "domItem"], [1, "jdItem", "lngItem"], [1, "jdItem", "toolItem"]], template: function JobsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_6_listener() { return ctx.changeFltrOpsState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Filter by: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_10_listener() { return ctx.changeShowDmn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_12_listener() { return ctx.changeShowLoc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_14_listener() { return ctx.changeShowLng(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_16_listener() { return ctx.changeShowTml(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_20_listener() { return ctx.filterJobsByDomain(ctx.jobsDmnData[0].domain); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_22_listener() { return ctx.filterJobsByDomain(ctx.jobsDmnData[1].domain); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_24_listener() { return ctx.filterJobsByDomain(ctx.jobsDmnData[2].domain); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_26_listener() { return ctx.filterJobsByDomain(ctx.jobsDmnData[3].domain); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_28_listener() { return ctx.filterJobsByDomain(ctx.jobsDmnData[4].domain); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_31_listener() { return ctx.filterJobsByLocation(ctx.jobsLocData[0].country); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_33_listener() { return ctx.filterJobsByLocation(ctx.jobsLocData[5].country); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_35_listener() { return ctx.filterJobsByLocation(ctx.jobsLocData[1].country); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_37_listener() { return ctx.filterJobsByLocation(ctx.jobsLocData[2].country); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_39_listener() { return ctx.filterJobsByLocation(ctx.jobsLocData[3].country); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_41_listener() { return ctx.filterJobsByLocation(ctx.jobsLocData[4].country); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_44_listener() { return ctx.filterJobsByLanguage(ctx.jobsLngData[0].lcode); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_46_listener() { return ctx.filterJobsByLanguage(ctx.jobsLngData[1].lcode); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_48_listener() { return ctx.filterJobsByLanguage(ctx.jobsLngData[2].lcode); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_50_listener() { return ctx.filterJobsByLanguage(ctx.jobsLngData[3].lcode); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "1993");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-slider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function JobsComponent_Template_mat_slider_input_55_listener($event) { return ctx.changeValue($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "2019");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Found ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "with ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " being ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobsComponent_Template_button_click_72_listener() { return ctx.resetFltrArr(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "clear filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, JobsComponent_li_76_Template, 48, 15, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.jobsData.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.fltrAct.hideFltrOps ? "show" : "hide", " filter options ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fltrAct.hideFltrOps);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fltrAct.hideDmn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsDmnData[0].domain, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsDmnData[1].domain, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsDmnData[2].domain, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsDmnData[3].domain, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsDmnData[4].domain, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fltrAct.hideLoc);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLocData[0].country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLocData[5].country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLocData[1].country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLocData[2].country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLocData[3].country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLocData[4].country, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fltrAct.hideLng);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLngData[0].lingo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLngData[1].lingo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLngData[2].lingo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.jobsLngData[3].lingo, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fltrAct.hideTml);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.fltrRes.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fltrRes.found);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fltrRes.key.srchKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.fltrRes.key.value);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.jobsData.data);
    } }, directives: [_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSlider"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\nli[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:active{\n    display: none;\n}\n\ndiv.jobContent[_ngcontent-%COMP%]{\n    color: #0c0624;\n    background-color: #5bbce2;\n    font-size: 1.25rem;\n    margin: 0% 5% 1% 5% ;\n}\n\nh1[_ngcontent-%COMP%]{\n    color:  #B88914;\n    text-align: center;\n    font-size: 1.5rem;\n    padding-top: 2px;\n}\n\nul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    color: #1a3e4c;\n    font-size: 1.1rem;\n}\n\n.jobListWrapper[_ngcontent-%COMP%]{\n    overflow: auto;\n}\n\n.jdHeader[_ngcontent-%COMP%]{\n    color: #B88914;    \n    font-weight: bold;\n}\n\n.jobdetails[_ngcontent-%COMP%]{\n    border: 1px solid black;\n    background-color: #D4EDF7;\n    width: 80%;\n    box-shadow: 60px 3px black;\n}\n\n.jdItem[_ngcontent-%COMP%]{\n    padding-left: 5px;\n    color: #585858;\n}\n\n.hidden[_ngcontent-%COMP%]{\n    display: none;\n}\n\n.jobTitle[_ngcontent-%COMP%]:hover{\n    background-color: #B88914;\n}\n\n#srchRes[_ngcontent-%COMP%]{\n    background-color: #B88914;\n    color: #0c0624;\n}\n\n.clrFltr[_ngcontent-%COMP%]{\n    float: right;\n}\n\n#timeline[_ngcontent-%COMP%]{\n    width: 100%;\n}\n\n#timeline[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]{\n    background-color: #ffffff;\n  \n}\n\n.mat-slider-horizontal[_ngcontent-%COMP%]{\n    width: 60%;\n    margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtFQUMzQixLQUFLO0FBQ1A7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvam9icy9qb2JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsaXtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxubGkgPiBpOmFjdGl2ZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5kaXYuam9iQ29udGVudHtcbiAgICBjb2xvcjogIzBjMDYyNDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJiY2UyO1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBtYXJnaW46IDAlIDUlIDElIDUlIDtcbn1cblxuaDF7XG4gICAgY29sb3I6ICAjQjg4OTE0O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xufVxuXG51bCA+IGxpID4gZGl2e1xuICAgIGNvbG9yOiAjMWEzZTRjO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXG4uam9iTGlzdFdyYXBwZXJ7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5qZEhlYWRlcntcbiAgICBjb2xvcjogI0I4ODkxNDsgICAgXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5qb2JkZXRhaWxze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjc7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBib3gtc2hhZG93OiA2MHB4IDNweCBibGFjaztcbn1cblxuLmpkSXRlbXtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBjb2xvcjogIzU4NTg1ODtcbn1cblxuLmhpZGRlbntcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uam9iVGl0bGU6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4ODkxNDtcbn1cblxuI3NyY2hSZXN7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0I4ODkxNDtcbiAgICBjb2xvcjogIzBjMDYyNDtcbn1cblxuLmNsckZsdHJ7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4jdGltZWxpbmV7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbiN0aW1lbGluZSA+IHNwYW57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgLyogICovXG59XG5cbi5tYXQtc2xpZGVyLWhvcml6b250YWx7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jobs',
                templateUrl: './jobs.component.html',
                styleUrls: ['./jobs.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/languages/Languages.component.ts":
/*!**************************************************!*\
  !*** ./src/app/languages/Languages.component.ts ***!
  \**************************************************/
/*! exports provided: LanguagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguagesComponent", function() { return LanguagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function LanguagesComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const lan_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lan_r30.lingo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lan_r30.level);
} }
class LanguagesComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
    }
    ngOnInit() {
        this.languagesData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.languagesData = data[3];
            this.languagesData.id = this.languagesData.id.toUpperCase();
            console.log("this.languagesData Item", this.languagesData);
        });
    }
}
LanguagesComponent.ɵfac = function LanguagesComponent_Factory(t) { return new (t || LanguagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
LanguagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LanguagesComponent, selectors: [["languages"]], decls: 8, vars: 2, consts: [[1, "fas", "fa-language"], [4, "ngFor", "ngForOf"]], template: function LanguagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LanguagesComponent_li_7_Template, 5, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.languagesData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languagesData.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\ndiv[_ngcontent-%COMP%]{\n    background-color: #d4e4f7;\n    color: #000000;\n    font-size: 1.25rem;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    margin: 0% 10% 1% 10% ;\n}\n\na[_ngcontent-%COMP%]{\n    font-size: 1.3rem;\n}\n\nb[_ngcontent-%COMP%]{\n    color: #FDDC22;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #347B98;\n    text-align: center;\n    font-size: 1.75rem;\n    padding-top: 2%;\n}\n\nspan[_ngcontent-%COMP%]{\n    margin-left: 1%;\n    font-size: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZ3VhZ2VzL2xhbmd1YWdlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2xhbmd1YWdlcy9sYW5ndWFnZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5kaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZTRmNztcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBtYXJnaW46IDAlIDEwJSAxJSAxMCUgO1xufVxuXG5cbmF7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbmJ7XG4gICAgY29sb3I6ICNGRERDMjI7XG59XG5cbmgxe1xuICAgIGNvbG9yOiAjMzQ3Qjk4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuXG5zcGFue1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'languages',
                templateUrl: './languages.component.html',
                styleUrls: ['./languages.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/profile/Profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/Profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ProfileComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const profile_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](profile_r32);
} }
class ProfileComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
    }
    ngOnInit() {
        this.profileData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.profileData = data[6];
            this.profileData.id = this.profileData.id.toUpperCase();
            console.log("this.profileData Item", this.profileData);
        });
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["profile"]], decls: 7, vars: 2, consts: [[2, "text-align", "center"], [1, "fas", "fa-head-side-virus"], [1, "profileData"], [4, "ngFor", "ngForOf"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ProfileComponent_a_6_Template, 3, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.profileData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profileData.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\ndiv[_ngcontent-%COMP%]{\n    background-color: #0c0624;\n    color: #588ce2;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    margin: 5% 10% 5% 10%;\n}\n\ndiv[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]{\n    font-size: 1.25rem;\n    border-left: 5px solid yellow;\n    border-top-right-radius: 20px;\n}\n\n.profileData[_ngcontent-%COMP%]{\n    text-align: left;   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGl7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwNjI0O1xuICAgIGNvbG9yOiAjNTg4Y2UyO1xuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiA1JSAxMCUgNSUgMTAlO1xufVxuXG5kaXYgPiBkaXZ7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGJvcmRlci1sZWZ0OiA1cHggc29saWQgeWVsbG93O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xufVxuXG4ucHJvZmlsZURhdGF7XG4gICAgdGV4dC1hbGlnbjogbGVmdDsgICBcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/tools/Tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/Tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _cv_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv.service */ "./src/app/cv.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ToolsComponent_li_7_li_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r36);
} }
function ToolsComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ToolsComponent_li_7_li_5_Template, 3, 1, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "-----------------------------------------------------");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tool_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tool_r34.platform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", tool_r34.skills);
} }
class ToolsComponent {
    constructor(_cvDataService) {
        this._cvDataService = _cvDataService;
    }
    ngOnInit() {
        this.toolsData = this._cvDataService.getCV()
            .subscribe((data) => {
            this.toolsData = data[4];
            this.toolsData.id = this.toolsData.id.toUpperCase();
            console.log("this.toolsData Item", this.toolsData);
        });
    }
}
ToolsComponent.ɵfac = function ToolsComponent_Factory(t) { return new (t || ToolsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"])); };
ToolsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ToolsComponent, selectors: [["tools"]], decls: 8, vars: 2, consts: [[1, "fas", "fa-tools"], [4, "ngFor", "ngForOf"]], template: function ToolsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ToolsComponent_li_7_Template, 8, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.toolsData.id, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.toolsData.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: ["li[_ngcontent-%COMP%]{\n    list-style-type: none;\n    list-style: none;\n}\n\ndiv[_ngcontent-%COMP%]{\n    background-color: #2b5797;\n    color: #ffffff;\n    font-size: 1.25rem;\n    height: -webkit-max-content;\n    height: -moz-max-content;\n    height: max-content;\n    margin: 0% 10% 1% 10% ;\n}\n\nh1[_ngcontent-%COMP%]{\n    color: #FDDC22;\n    text-align: center;\n    font-size: 1.5rem;\n    padding-top: 2px;\n}\n\nspan[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%]{\n    color: #FDDC22;\n    font-size: 1.3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbHMvdG9vbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQiwyQkFBbUI7SUFBbkIsd0JBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvdG9vbHMvdG9vbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxpe1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5kaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiNTc5NztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcbiAgICBtYXJnaW46IDAlIDEwJSAxJSAxMCUgO1xufVxuXG5oMXtcbiAgICBjb2xvcjogI0ZEREMyMjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuc3BhbiA+IGJ7XG4gICAgY29sb3I6ICNGRERDMjI7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToolsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tools',
                templateUrl: './tools.component.html',
                styleUrls: ['./tools.component.css']
            }]
    }], function () { return [{ type: _cv_service__WEBPACK_IMPORTED_MODULE_1__["CVService"] }]; }, null); })();


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
const environment = {
    production: true
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cajay/Documents/DEV/PROJECTS/JAVA/CV/CVNGV9/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map