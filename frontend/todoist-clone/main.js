"use strict";
(self["webpackChunktodoist_clone"] = self["webpackChunktodoist_clone"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ 8562);
/* harmony import */ var _home_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/pages/home-page/home-page.component */ 8090);
/* harmony import */ var _authorization_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorization/services/auth.guard */ 2811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






const routes = [
    {
        path: '',
        component: _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_0__.MainLayoutComponent,
        children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: '', component: _home_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent, canActivate: [_authorization_services_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard] }
        ],
    },
    {
        path: 'authorization',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_authorization_authorization_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./authorization/authorization.module */ 8274)).then((m) => m.AuthorizationModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
        }), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/modules/material.module */ 8601);
/* harmony import */ var _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/modules/shared.module */ 7208);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ 8562);
/* harmony import */ var _home_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/pages/home-page/home-page.component */ 8090);
/* harmony import */ var _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/header/header.component */ 6290);
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/sidebar/sidebar.component */ 6664);
/* harmony import */ var _home_components_task_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/components/task/task.component */ 1579);
/* harmony import */ var _home_components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/components/create-task/create-task.component */ 5434);
/* harmony import */ var _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/search/search.component */ 9727);
/* harmony import */ var _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/pipes/search.pipe */ 6903);
/* harmony import */ var _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/pipes/filter.pipe */ 8738);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__.environment.production }),
        _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent,
        _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__.MainLayoutComponent,
        _home_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__.HomePageComponent,
        _shared_components_header_header_component__WEBPACK_IMPORTED_MODULE_6__.HeaderComponent,
        _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__.SidebarComponent,
        _home_components_task_task_component__WEBPACK_IMPORTED_MODULE_8__.TaskComponent,
        _home_components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_9__.CreateTaskComponent,
        _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_10__.SearchComponent,
        _shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__.SearchPipe,
        _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__.FilterPipe], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_modules_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _shared_modules_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_18__.ServiceWorkerModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetComponentScope"](_home_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__.HomePageComponent, function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__.MatProgressSpinner, _home_components_task_task_component__WEBPACK_IMPORTED_MODULE_8__.TaskComponent,
    _home_components_create_task_create_task_component__WEBPACK_IMPORTED_MODULE_9__.CreateTaskComponent,
    _shared_components_search_search_component__WEBPACK_IMPORTED_MODULE_10__.SearchComponent]; }, function () { return [_shared_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_11__.SearchPipe,
    _shared_pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_12__.FilterPipe]; });


/***/ }),

/***/ 2811:
/*!******************************************************!*\
  !*** ./src/app/authorization/services/auth.guard.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ 2156);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);



class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.authService.logout();
            this.router.navigate(['/authorization']);
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2156:
/*!********************************************************!*\
  !*** ./src/app/authorization/services/auth.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);





class AuthService {
    constructor(http) {
        this.http = http;
        this.error$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    get token() {
        const expDate = new Date(localStorage.getItem('fb-token-exp'));
        if (new Date() > expDate) {
            this.logout();
            return null;
        }
        return localStorage.getItem('fb-token');
    }
    login(user) {
        user.returnSecureToken = true;
        return this.http
            .post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiKey}`, user)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(this.setToken), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(this.handleError.bind(this)));
    }
    handleError(error) {
        const { message } = error.error.error;
        switch (message) {
            case 'INVALID_EMAIL':
                this.error$.next('Incorrect email');
                break;
            case 'INVALID_PASSWORD':
                this.error$.next('Incorrect password');
                break;
            case 'EMAIL_NOT_FOUND':
                this.error$.next('Email not found');
                break;
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(error);
    }
    logout() {
        this.setToken(null);
    }
    isAuthenticated() {
        return !!this.token;
    }
    setToken(response) {
        if (response) {
            const expDate = new Date(new Date().getTime() + +response.expiresIn * 1000);
            localStorage.setItem('fb-token', response.idToken);
            localStorage.setItem('fb-token-exp', expDate.toString());
        }
        else {
            localStorage.clear();
        }
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5434:
/*!**********************************************************************!*\
  !*** ./src/app/home/components/create-task/create-task.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreateTaskComponent": () => (/* binding */ CreateTaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/tasks/tasks.service */ 6042);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 1961);











function CreateTaskComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Text is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
function CreateTaskComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Text length should be less than 512 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class CreateTaskComponent {
    constructor(tasksService) {
        this.tasksService = tasksService;
    }
    ngOnInit() {
        this.submitted = false;
        this.title = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.maxLength(512),
        ]);
    }
    onSave() {
        if (this.title.invalid) {
            return;
        }
        this.submitted = true;
        const todo = {
            userId: 1,
            title: this.title.value,
            completed: false,
        };
        this.tasksService.create(todo).subscribe(() => {
            this.title.reset();
            this.submitted = false;
        }, () => {
            this.submitted = false;
        });
    }
    onCancel() {
        this.title.reset();
        this.submitted = false;
    }
}
CreateTaskComponent.ɵfac = function CreateTaskComponent_Factory(t) { return new (t || CreateTaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService)); };
CreateTaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CreateTaskComponent, selectors: [["app-create-task"]], decls: 19, vars: 4, consts: [[1, "create"], [1, "create__content"], ["appearance", "standard", 1, "create__field"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "6", "placeholder", "Go to the grocery shop", 1, "create__input", 3, "formControl"], [4, "ngIf"], [1, "create__actions"], ["mat-raised-button", "", "color", "accent", 1, "create__button", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "create__button", 3, "click"]], template: function CreateTaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "New to-do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-content", 1)(4, "mat-form-field", 2)(5, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "To-do");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CreateTaskComponent_mat_error_8_Template, 4, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CreateTaskComponent_mat_error_9_Template, 2, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-card-actions", 5)(11, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_11_listener() { return ctx.onSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CreateTaskComponent_Template_button_click_15_listener() { return ctx.onCancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.title.hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.title.valid || ctx.submitted);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_6__.CdkTextareaAutosize, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_8__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlDirective], styles: [".create[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 20px auto;\n}\n@media screen and (max-width: 480px) {\n  .create[_ngcontent-%COMP%] {\n    margin: 20px 10px;\n  }\n}\n.create__content[_ngcontent-%COMP%] {\n  padding: 10px 0;\n}\n.create__field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWF0ZS10YXNrLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQ0ZFO0VERUY7SUFLUSxpQkFBQTtFQUROO0FBQ0Y7QUFHSTtFQUNJLGVBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtBQUZSIiwiZmlsZSI6ImNyZWF0ZS10YXNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3JjL3N0eWxlcy9taXhpbnMnO1xuQGltcG9ydCAnc3JjL3N0eWxlcy92YXJpYWJsZXMnO1xuXG4uY3JlYXRlIHtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuXG4gICAgQGluY2x1ZGUgcGhvbmVzIHtcbiAgICAgICAgbWFyZ2luOiAyMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgJl9fY29udGVudCB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDsgXG4gICAgfVxuXG4gICAgJl9fZmllbGQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59IiwiQG1peGluIHBob25lcyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZXMpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 1579:
/*!********************************************************!*\
  !*** ./src/app/home/components/task/task.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskComponent": () => (/* binding */ TaskComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/tasks/tasks.service */ 6042);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/home-page/home-page.component */ 8090);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/text-field */ 1307);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 1961);














function TaskComponent_div_15_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Text is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
function TaskComponent_div_15_mat_error_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Text length should be less than 512 characters. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function TaskComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8)(1, "mat-form-field", 9)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "To-do");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TaskComponent_div_15_mat_error_5_Template, 4, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, TaskComponent_div_15_mat_error_6_Template, 2, 0, "mat-error", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_15_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onSave()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_div_15_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.onCancel()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx_r0.newTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newTitle.hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.newTitle.hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r0.newTitle.valid || ctx_r0.submitted);
} }
class TaskComponent {
    constructor(tasksService, homePage) {
        this.tasksService = tasksService;
        this.homePage = homePage;
    }
    ngOnInit() {
        this.isChanging = false;
        this.submitted = false;
        this.deleted = false;
        this.checked = false;
        this.newTitle = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(512),
        ]);
    }
    ngOnDestroy() {
        if (this.editSub) {
            this.editSub.unsubscribe();
        }
        if (this.checkSub) {
            this.checkSub.unsubscribe();
        }
    }
    onSave() {
        if (this.newTitle.invalid) {
            return;
        }
        this.submitted = true;
        this.editSub = this.tasksService.edit(this.id, this.newTitle.value).subscribe(() => {
            this.title = this.newTitle.value;
            this.newTitle.reset();
            this.submitted = false;
            this.isChanging = false;
        }, () => {
            this.submitted = false;
        });
    }
    onCancel() {
        this.newTitle.reset();
        this.submitted = false;
        this.isChanging = false;
    }
    remove() {
        this.deleted = true;
        this.homePage.remove(this.id);
    }
    edit() {
        this.isChanging = true;
    }
    check() {
        this.checked = true;
        this.editSub = this.tasksService.check(this.id, !this.completed).subscribe(() => {
            this.completed = !this.completed;
            this.checked = false;
        }, () => {
            this.checked = false;
        });
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_1__.HomePageComponent)); };
TaskComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-task"]], inputs: { id: "id", title: "title", completed: "completed" }, decls: 16, vars: 7, consts: [[1, "task"], [1, "task__ready"], [1, "task__checkbox", 3, "ngModel", "disabled", "ngModelChange", "click"], [1, "task__divider", 3, "vertical"], [1, "task__content"], [1, "task__actions"], ["mat-icon-button", "", 3, "disabled", "click"], ["class", "task__change", 4, "ngIf"], [1, "task__change"], ["appearance", "standard", 1, "task__field"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "6", "placeholder", "Go to the grocery shop", 1, "task__input", 3, "formControl"], [4, "ngIf"], ["mat-raised-button", "", "color", "accent", 1, "task__button", 3, "disabled", "click"], ["mat-raised-button", "", "color", "accent", 1, "task__button", 3, "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-card", 0)(1, "div", 1)(2, "mat-checkbox", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function TaskComponent_Template_mat_checkbox_ngModelChange_2_listener($event) { return ctx.completed = $event; })("click", function TaskComponent_Template_mat_checkbox_click_2_listener() { return ctx.check(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "mat-divider", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-card-content", 4)(6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "mat-card-actions", 5)(9, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_9_listener() { return ctx.edit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_12_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, TaskComponent_div_15_Template, 16, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.completed)("disabled", ctx.isChanging || ctx.checked);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vertical", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isChanging);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isChanging || ctx.deleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isChanging);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__.CdkTextareaAutosize, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_divider__WEBPACK_IMPORTED_MODULE_10__.MatDivider, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__.MatCheckbox, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardActions, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], styles: [".task[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 20px auto;\n}\n.task__ready[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 480px) {\n  .task__ready[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.task__checkbox[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto 0 !important;\n}\n.task__divider[_ngcontent-%COMP%] {\n  margin: 0 10px;\n}\n@media screen and (max-width: 480px) {\n  .task__divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.task__content[_ngcontent-%COMP%] {\n  margin: auto 0;\n}\n@media screen and (max-width: 480px) {\n  .task__content[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n}\n.task__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  margin: auto 0 auto auto !important;\n  padding: 0;\n}\n.task__field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.task__button[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUZKO0FDUEU7RURNQTtJQU1JLHNCQUFBO0VBREo7QUFDRjtBQUlFO0VBQ0UsY0FBQTtFQUNBLHlCQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISjtBQ25CRTtFRHFCQTtJQUlJLGFBQUE7RUFGSjtBQUNGO0FBS0U7RUFDRSxjQUFBO0FBSEo7QUMzQkU7RUQ2QkE7SUFJSSxnQkFBQTtFQUZKO0FBQ0Y7QUFLRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtBQUhKO0FBTUU7RUFDRSxXQUFBO0FBSko7QUFPRTtFQUNFLGtCQUFBO0FBTEoiLCJmaWxlIjoidGFzay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi50YXNrIHtcbiAgbWF4LXdpZHRoOiA3MDBweDtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG5cbiAgJl9fcmVhZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcblxuICAgIEBpbmNsdWRlIHBob25lcyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cbiAgfVxuXG4gICZfX2NoZWNrYm94IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgJl9fZGl2aWRlciB7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICBAaW5jbHVkZSBwaG9uZXMge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICBtYXJnaW46IGF1dG8gMDtcblxuICAgIEBpbmNsdWRlIHBob25lcyB7XG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgfVxuXG4gICZfX2FjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgbWFyZ2luOiBhdXRvIDAgYXV0byBhdXRvICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gICZfX2ZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gICZfX2J1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG59XG4iLCJAbWl4aW4gcGhvbmVzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBob25lcykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8090:
/*!*************************************************************!*\
  !*** ./src/app/home/pages/home-page/home-page.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/tasks/tasks.service */ 6042);
/* harmony import */ var src_app_shared_services_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/search/search.service */ 5505);



function HomePageComponent_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-task", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const todo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", todo_r4.id)("title", todo_r4.title)("completed", todo_r4.completed);
} }
function HomePageComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HomePageComponent_ul_3_li_1_Template, 2, 3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "searchTodos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "filterTodos");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](3, 4, ctx_r0.todos, ctx_r0.done), ctx_r0.searchStr));
} }
function HomePageComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 7);
} }
class HomePageComponent {
    constructor(tasksService, searchService) {
        this.tasksService = tasksService;
        this.searchService = searchService;
        this.todos = [];
        this.searchSub = this.searchService.getSearch()
            .subscribe((search) => {
            this.searchStr = search;
        });
        this.filterSub = this.searchService.getCompleted()
            .subscribe((completed) => {
            this.done = completed;
        });
    }
    ngOnInit() {
        this.tasksSub = this.tasksService.getAll().subscribe((todos) => {
            this.todos = todos;
        });
    }
    remove(id) {
        this.deleteSub = this.tasksService.remove(id).subscribe(() => {
            this.todos = this.todos.filter((todo) => todo.id !== id);
        });
    }
    ngOnDestroy() {
        if (this.tasksSub) {
            this.tasksSub.unsubscribe();
        }
        if (this.deleteSub) {
            this.deleteSub.unsubscribe();
        }
        if (this.searchSub) {
            this.searchSub.unsubscribe();
        }
        if (this.filterSub) {
            this.filterSub.unsubscribe();
        }
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_tasks_tasks_service__WEBPACK_IMPORTED_MODULE_0__.TasksService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_search_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService)); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 6, vars: 2, consts: [[1, "toolbar"], ["class", "todos", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "todos"], ["class", "todos__item", 4, "ngFor", "ngForOf"], [1, "todos__item"], [3, "id", "title", "completed"], ["color", "accent", "mode", "indeterminate", 1, "spinner"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-search")(2, "app-create-task");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HomePageComponent_ul_3_Template, 4, 7, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HomePageComponent_ng_template_4_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.todos.length)("ngIfElse", _r1);
    } }, styles: [".toolbar[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n@media screen and (max-width: 480px) {\n  .toolbar[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n.todos[_ngcontent-%COMP%] {\n  padding: 0 50px;\n}\n@media screen and (max-width: 480px) {\n  .todos[_ngcontent-%COMP%] {\n    padding: 0 10px;\n  }\n}\n.todos__item[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxlQUFBO0FBRkY7QUNERTtFREVGO0lBSUksZUFBQTtFQURGO0FBQ0Y7QUFJQTtFQUNFLGVBQUE7QUFERjtBQ1ZFO0VEVUY7SUFJSSxlQUFBO0VBQUY7QUFDRjtBQUVFO0VBQ0UsZ0JBQUE7QUFBSjtBQUlBO0VBQ0UsWUFBQTtBQURGIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi50b29sYmFyIHtcbiAgcGFkZGluZzogMCA1MHB4O1xuXG4gIEBpbmNsdWRlIHBob25lcyB7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICB9XG59XG5cbi50b2RvcyB7XG4gIHBhZGRpbmc6IDAgNTBweDtcblxuICBAaW5jbHVkZSBwaG9uZXMge1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG4iLCJAbWl4aW4gcGhvbmVzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBob25lcykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6290:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/header/header.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_authorization_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/authorization/services/auth.service */ 2156);
/* harmony import */ var _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sidebar/sidebar.service */ 9759);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);







class HeaderComponent {
    constructor(authService, sidebarService, router) {
        this.authService = authService;
        this.sidebarService = sidebarService;
        this.router = router;
    }
    toggleSidebar() {
        this.sidebarService.toggle();
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/authorization']);
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_authorization_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_1__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 0, consts: [["color", "primary", 1, "header"], [1, "header__row"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", 1, "header__logout", 3, "click"], [1, "header__icon"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "mat-toolbar-row", 1)(2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_2_listener() { return ctx.toggleSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_5_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Log out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } }, dependencies: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbar, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__.MatToolbarRow, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".header[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 3;\n}\n.header__row[_ngcontent-%COMP%] {\n  padding: 0 50px;\n  height: 64px;\n}\n@media screen and (max-width: 480px) {\n  .header__row[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    height: 56px;\n  }\n}\n.header__logout[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fdmFyaWFibGVzLnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUFGRjtBQUlFO0VBQ0UsZUFBQTtFQUNBLFlDVm9CO0FEUXhCO0FFVEU7RUZTQTtJQUtJLGVBQUE7SUFDQSxZQ2JnQjtFRFlwQjtBQUNGO0FBSUU7RUFDRSxpQkFBQTtBQUZKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzcmMvc3R5bGVzL21peGluc1wiO1xuQGltcG9ydCBcInNyYy9zdHlsZXMvdmFyaWFibGVzXCI7XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDM7XG5cbiAgJl9fcm93IHtcbiAgICBwYWRkaW5nOiAwIDUwcHg7XG4gICAgaGVpZ2h0OiAkaGVhZGVyLWhlaWdodC1kZXNrdG9wO1xuXG4gICAgQGluY2x1ZGUgcGhvbmVzIHtcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgIGhlaWdodDogJGhlYWRlci1oZWlnaHQtcGhvbmU7XG4gICAgfVxuICB9XG5cbiAgJl9fbG9nb3V0IHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgfVxufVxuIiwiJHBob25lczogNDgwcHg7XG5cbiRoZWFkZXItaGVpZ2h0LWRlc2t0b3A6IDY0cHg7XG4kaGVhZGVyLWhlaWdodC1waG9uZTogNTZweDtcblxuJGNvbnRlbnQtaGVpZ2h0LWRlc2t0b3A6IGNhbGMoMTAwJSAtIDY0cHgpO1xuJGNvbnRlbnQtaGVpZ2h0LXBob25lOiBjYWxjKDEwMCUgLSA1NnB4KTsiLCJAbWl4aW4gcGhvbmVzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBob25lcykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8562:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainLayoutComponent": () => (/* binding */ MainLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../header/header.component */ 6290);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 6664);



class MainLayoutComponent {
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 2, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header")(1, "app-sidebar");
    } }, dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__.SidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 9727:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/search/search.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/search/search.service */ 5505);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);









function SearchComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r1.searchStr = ""); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} }
class SearchComponent {
    constructor(searchService) {
        this.searchService = searchService;
    }
    ngOnInit() {
        this.searchStr = "";
        this.searchService.updateSearch(this.searchStr);
    }
    search() {
        this.searchService.updateSearch(this.searchStr);
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_0__.SearchService)); };
SearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], decls: 7, vars: 2, consts: [[1, "search"], [1, "search__field"], ["matInput", "", "type", "text", "placeholder", "Search...", 1, "header__input", 3, "ngModel", "ngModelChange", "change"], ["mat-icon-button", "", "mat-button", "", "matSuffix", "", 3, "click", 4, "ngIf"], ["mat-mini-fab", "", "color", "accent", 3, "click"], ["mat-icon-button", "", "mat-button", "", "matSuffix", "", 3, "click"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-form-field", 1)(2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_2_listener($event) { return ctx.searchStr = $event; })("change", function SearchComponent_Template_input_change_2_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SearchComponent_button_3_Template, 3, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_4_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.searchStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.searchStr);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel], styles: [".search[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 20px auto;\n  display: flex;\n  flex-wrap: nowrap;\n}\n@media screen and (max-width: 480px) {\n  .search[_ngcontent-%COMP%] {\n    margin: 20px 10px;\n  }\n}\n.search__field[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  width: 90%;\n  max-width: 300px;\n}\n@media screen and (max-width: 480px) {\n  .search__field[_ngcontent-%COMP%] {\n    margin: 0 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL3N0eWxlcy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxnQkFBQTtFQUNELGlCQUFBO0VBRUEsYUFBQTtFQUNBLGlCQUFBO0FBSEQ7QUNKRTtFREVGO0lBUUksaUJBQUE7RUFGRjtBQUNGO0FBSUU7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNFLGdCQUFBO0FBRko7QUNkRTtFRGFBO0lBTUksY0FBQTtFQURKO0FBQ0YiLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9zdHlsZXMvbWl4aW5zXCI7XG5AaW1wb3J0IFwic3JjL3N0eWxlcy92YXJpYWJsZXNcIjtcblxuLnNlYXJjaCB7XG4gIG1heC13aWR0aDogNzAwcHg7XG5cdG1hcmdpbjogMjBweCBhdXRvO1xuXHRcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC13cmFwOiBub3dyYXA7XG5cbiAgQGluY2x1ZGUgcGhvbmVzIHtcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgfVxuXG4gICZfX2ZpZWxkIHtcblx0XHRtYXJnaW46IDAgMjBweDtcblx0XHR3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG5cbiAgICBAaW5jbHVkZSBwaG9uZXMge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgfVxuICB9XG59XG4iLCJAbWl4aW4gcGhvbmVzIHtcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHBob25lcykge1xuICAgIEBjb250ZW50O1xuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 6664:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 9196);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/sidebar/sidebar.service */ 9759);
/* harmony import */ var _services_search_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search/search.service */ 5505);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6362);












const _c0 = ["sidebar"];
class SidebarComponent {
    constructor(breakpointObserver, sidebarService, searchService) {
        this.breakpointObserver = breakpointObserver;
        this.sidebarService = sidebarService;
        this.searchService = searchService;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.Breakpoints.Handset)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((result) => result.matches), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)());
    }
    ngOnInit() {
        this.done = true;
        this.notdone = true;
        const completed = {
            done: this.done,
            notdone: this.notdone
        };
        this.searchService.updateCompleted(completed);
    }
    ngAfterViewInit() {
        this.sidebarService.setSidebar(this.sidebar);
    }
    filter() {
        const completed = {
            done: this.done,
            notdone: this.notdone
        };
        this.searchService.updateCompleted(completed);
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_sidebar_sidebar_service__WEBPACK_IMPORTED_MODULE_0__.SidebarService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_search_search_service__WEBPACK_IMPORTED_MODULE_1__.SearchService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sidebar = _t.first);
    } }, decls: 16, vars: 8, consts: [[1, "sidebar"], [1, "sidebar__sidenav", 3, "mode", "opened"], ["sidebar", ""], ["matSubheader", ""], [3, "ngModel", "ngModelChange", "change"], [1, "sidebar__content"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-sidenav-container", 0)(1, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "mat-list")(6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Filter by completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-list-item")(9, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SidebarComponent_Template_mat_checkbox_ngModelChange_9_listener($event) { return ctx.done = $event; })("change", function SidebarComponent_Template_mat_checkbox_change_9_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-list-item")(12, "mat-checkbox", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function SidebarComponent_Template_mat_checkbox_ngModelChange_12_listener($event) { return ctx.notdone = $event; })("change", function SidebarComponent_Template_mat_checkbox_change_12_listener() { return ctx.filter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Not done");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "mat-sidenav-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mode", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx.isHandset$) ? "over" : "side")("opened", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 6, ctx.isHandset$) === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.done);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.notdone);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenav, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContent, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListSubheaderCssMatStyler, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_11__.AsyncPipe], styles: [".sidebar[_ngcontent-%COMP%] {\n  left: 0;\n  margin-top: 64px;\n  width: 100%;\n  height: calc(100% - 64px);\n}\n@media screen and (max-width: 480px) {\n  .sidebar[_ngcontent-%COMP%] {\n    margin-top: 56px;\n    height: calc(100% - 56px);\n  }\n}\n.sidebar__sidenav[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzIiwiLi4vLi4vLi4vLi4vc3R5bGVzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLE9BQUE7RUFDQSxnQkNIc0I7RURJdEIsV0FBQTtFQUNBLHlCQ0Z1QjtBREF6QjtBRUpFO0VGRUY7SUFPSSxnQkNQa0I7SURRbEIseUJDTG1CO0VESXJCO0FBQ0Y7QUFHRTtFQUNJLHNCQUFBO0VBQ0EsWUFBQTtBQUROIiwiZmlsZSI6InNpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3JjL3N0eWxlcy9taXhpbnNcIjtcbkBpbXBvcnQgXCJzcmMvc3R5bGVzL3ZhcmlhYmxlc1wiO1xuXG4uc2lkZWJhciB7XG4gIGxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6ICRoZWFkZXItaGVpZ2h0LWRlc2t0b3A7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRjb250ZW50LWhlaWdodC1kZXNrdG9wO1xuXG4gIEBpbmNsdWRlIHBob25lcyB7XG4gICAgbWFyZ2luLXRvcDogJGhlYWRlci1oZWlnaHQtcGhvbmU7XG4gICAgaGVpZ2h0OiAkY29udGVudC1oZWlnaHQtcGhvbmU7XG4gIH1cblxuICAmX19zaWRlbmF2IHtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gIH1cbn1cbiIsIiRwaG9uZXM6IDQ4MHB4O1xuXG4kaGVhZGVyLWhlaWdodC1kZXNrdG9wOiA2NHB4O1xuJGhlYWRlci1oZWlnaHQtcGhvbmU6IDU2cHg7XG5cbiRjb250ZW50LWhlaWdodC1kZXNrdG9wOiBjYWxjKDEwMCUgLSA2NHB4KTtcbiRjb250ZW50LWhlaWdodC1waG9uZTogY2FsYygxMDAlIC0gNTZweCk7IiwiQG1peGluIHBob25lcyB7XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRwaG9uZXMpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 8601:
/*!***************************************************!*\
  !*** ./src/app/shared/modules/material.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);













const modules = [
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
    _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule
];
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [modules, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule], exports: [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_0__.LayoutModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__.MatToolbarModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIconModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__.MatSidenavModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__.MatDividerModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckboxModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_10__.MatCardModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 7208:
/*!*************************************************!*\
  !*** ./src/app/shared/modules/shared.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule], exports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClientModule] }); })();


/***/ }),

/***/ 8738:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/filter.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterPipe": () => (/* binding */ FilterPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FilterPipe {
    transform(todos, completed) {
        return todos.filter((todo) => {
            if (completed.done && completed.notdone) {
                return todo;
            }
            if (completed.done) {
                return todo.completed === true;
            }
            else {
                return todo.completed === false;
            }
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filterTodos", type: FilterPipe, pure: true });


/***/ }),

/***/ 6903:
/*!*********************************************!*\
  !*** ./src/app/shared/pipes/search.pipe.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPipe": () => (/* binding */ SearchPipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SearchPipe {
    transform(todos, search = '') {
        if (!search.trim()) {
            return todos;
        }
        return todos.filter((todo) => {
            return todo.title.toLowerCase().includes(search.toLowerCase());
        });
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchTodos", type: SearchPipe, pure: true });


/***/ }),

/***/ 5505:
/*!**********************************************************!*\
  !*** ./src/app/shared/services/search/search.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchService": () => (/* binding */ SearchService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class SearchService {
    constructor() {
        this.search = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.completed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    getSearch() {
        return this.search.asObservable();
    }
    updateSearch(search) {
        this.search.next(search);
    }
    getCompleted() {
        return this.completed.asObservable();
    }
    updateCompleted(completed) {
        this.completed.next(completed);
    }
}
SearchService.ɵfac = function SearchService_Factory(t) { return new (t || SearchService)(); };
SearchService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SearchService, factory: SearchService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9759:
/*!************************************************************!*\
  !*** ./src/app/shared/services/sidebar/sidebar.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarService": () => (/* binding */ SidebarService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SidebarService {
    // constructor() { }
    setSidebar(sidebar) {
        this.sidebar = sidebar;
    }
    open() {
        return this.sidebar.open();
    }
    close() {
        return this.sidebar.close();
    }
    toggle() {
        this.sidebar.toggle();
    }
}
SidebarService.ɵfac = function SidebarService_Factory(t) { return new (t || SidebarService)(); };
SidebarService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SidebarService, factory: SidebarService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6042:
/*!********************************************************!*\
  !*** ./src/app/shared/services/tasks/tasks.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TasksService": () => (/* binding */ TasksService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class TasksService {
    constructor(http) {
        this.http = http;
        this.URL_JPH = 'https://jsonplaceholder.typicode.com/todos';
    }
    create(todo) {
        const httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.URL_JPH, JSON.stringify(todo), { headers: httpHeader }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => { return response; }));
    }
    getAll() {
        return this.http.get(this.URL_JPH)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => response));
    }
    remove(id) {
        return this.http.delete(`${this.URL_JPH}/${id}`);
    }
    edit(id, title) {
        const httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.patch(`${this.URL_JPH}/${id}`, JSON.stringify({ title }), { headers: httpHeader })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => { return response; }));
    }
    check(id, completed) {
        const httpHeader = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.patch(`${this.URL_JPH}/${id}`, JSON.stringify({ completed }), { headers: httpHeader })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((response) => { return response; }));
    }
}
TasksService.ɵfac = function TasksService_Factory(t) { return new (t || TasksService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
TasksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TasksService, factory: TasksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiKey: 'AIzaSyCUtUM29Nq98XGeMf0NezjN-aruHF6gsyk'
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

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map