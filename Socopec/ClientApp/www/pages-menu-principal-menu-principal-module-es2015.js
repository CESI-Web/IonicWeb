(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-principal-menu-principal-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-principal/menu-principal.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-principal/menu-principal.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Menu principal</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-card routerLink=\"/gestion-parc\">\r\n  <ion-card-header>\r\n<ion-item>\r\n  <ion-avatar slot=\"start\">\r\n  \t\t<img src=\"/assets/WebExport/Image_1.png\" alt=\"ion\">\r\n  </ion-avatar>\r\n  <ion-label center text-center>Gestion parc automobile</ion-label>\r\n</ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content center text-center>\r\n    <div>Ajouter, modifier ou supprimer des véhicules de la flotte.</div>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n\r\n\r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n<ion-item>\r\n  <ion-avatar slot=\"start\">\r\n  \t\t<img src=\"/assets/WebExport/Image_1.png\" alt=\"ion\">\r\n  </ion-avatar>\r\n  <ion-label center text-center>Consultation des agences</ion-label>\r\n</ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content center text-center>\r\n    <div>Consulter les informations pour les agences</div>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n<ion-item>\r\n  <ion-avatar slot=\"start\">\r\n  \t\t<img src=\"/assets/WebExport/Image_1.png\" alt=\"ion\">\r\n  </ion-avatar>\r\n  <ion-label center text-center>Consultation des agents</ion-label>\r\n</ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content center text-center>\r\n    Ajouer, modifier ou supprimer des informations pour les agents.\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n<ion-item>\r\n  <ion-avatar slot=\"start\">\r\n  \t\t<img src=\"/assets/WebExport/Image_1.png\" alt=\"ion\">\r\n  </ion-avatar >\r\n  <ion-label center text-center>Gestion des SAV</ion-label>\r\n</ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content center text-center>\r\n    Consulter les informations des SAV pour les véhicules de la flotte.\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: MenuPrincipalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageRoutingModule", function() { return MenuPrincipalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/pages/menu-principal/menu-principal.page.ts");




const routes = [
    {
        path: '',
        component: _menu_principal_page__WEBPACK_IMPORTED_MODULE_3__["MenuPrincipalPage"]
    }
];
let MenuPrincipalPageRoutingModule = class MenuPrincipalPageRoutingModule {
};
MenuPrincipalPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MenuPrincipalPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.module.ts ***!
  \***************************************************************/
/*! exports provided: MenuPrincipalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPageModule", function() { return MenuPrincipalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-principal-routing.module */ "./src/app/pages/menu-principal/menu-principal-routing.module.ts");
/* harmony import */ var _menu_principal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-principal.page */ "./src/app/pages/menu-principal/menu-principal.page.ts");







let MenuPrincipalPageModule = class MenuPrincipalPageModule {
};
MenuPrincipalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _menu_principal_routing_module__WEBPACK_IMPORTED_MODULE_5__["MenuPrincipalPageRoutingModule"]
        ],
        declarations: [_menu_principal_page__WEBPACK_IMPORTED_MODULE_6__["MenuPrincipalPage"]]
    })
], MenuPrincipalPageModule);



/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff url(\"/assets/WebExport/bg_SOCOPEC_test.png\") no-repeat center center / cover;\n}\n\nion-card {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS1wcmluY2lwYWwvQzpcXFVzZXJzXFxSb2JlcnRQQXN0aXNzXFxEb2N1bWVudHNcXEdpdEh1YlxcSW9uaWNXZWJcXFNvY29wZWNcXENsaWVudEFwcC9zcmNcXGFwcFxccGFnZXNcXG1lbnUtcHJpbmNpcGFsXFxtZW51LXByaW5jaXBhbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUtcHJpbmNpcGFsL21lbnUtcHJpbmNpcGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtGQUFBO0FDQ0o7O0FERUE7RUFDQyxpQkFBQTtBQ0NEIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWVudS1wcmluY2lwYWwvbWVudS1wcmluY2lwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKCcvYXNzZXRzL1dlYkV4cG9ydC9iZ19TT0NPUEVDX3Rlc3QucG5nJykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuICAgIFxyXG59XHJcbmlvbi1jYXJke1xyXG5cdGJhY2tncm91bmQ6d2hpdGU7XHJcblxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKFwiL2Fzc2V0cy9XZWJFeHBvcnQvYmdfU09DT1BFQ190ZXN0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xufVxuXG5pb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu-principal/menu-principal.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/menu-principal/menu-principal.page.ts ***!
  \*************************************************************/
/*! exports provided: MenuPrincipalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPrincipalPage", function() { return MenuPrincipalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MenuPrincipalPage = class MenuPrincipalPage {
    constructor() { }
    ngOnInit() {
    }
};
MenuPrincipalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu-principal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-principal.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-principal/menu-principal.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-principal.page.scss */ "./src/app/pages/menu-principal/menu-principal.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MenuPrincipalPage);



/***/ })

}]);
//# sourceMappingURL=pages-menu-principal-menu-principal-module-es2015.js.map