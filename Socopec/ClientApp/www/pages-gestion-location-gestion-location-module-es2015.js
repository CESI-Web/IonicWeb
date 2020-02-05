(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gestion-location-gestion-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion-location/gestion-location.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion-location/gestion-location.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>GestionLocation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/gestion-location/gestion-location-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/gestion-location/gestion-location-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: GestionLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionLocationPageRoutingModule", function() { return GestionLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gestion_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestion-location.page */ "./src/app/pages/gestion-location/gestion-location.page.ts");




const routes = [
    {
        path: '',
        component: _gestion_location_page__WEBPACK_IMPORTED_MODULE_3__["GestionLocationPage"]
    }
];
let GestionLocationPageRoutingModule = class GestionLocationPageRoutingModule {
};
GestionLocationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GestionLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gestion-location/gestion-location.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/gestion-location/gestion-location.module.ts ***!
  \*******************************************************************/
/*! exports provided: GestionLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionLocationPageModule", function() { return GestionLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gestion_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gestion-location-routing.module */ "./src/app/pages/gestion-location/gestion-location-routing.module.ts");
/* harmony import */ var _gestion_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gestion-location.page */ "./src/app/pages/gestion-location/gestion-location.page.ts");







let GestionLocationPageModule = class GestionLocationPageModule {
};
GestionLocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gestion_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["GestionLocationPageRoutingModule"]
        ],
        declarations: [_gestion_location_page__WEBPACK_IMPORTED_MODULE_6__["GestionLocationPage"]]
    })
], GestionLocationPageModule);



/***/ }),

/***/ "./src/app/pages/gestion-location/gestion-location.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/gestion-location/gestion-location.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlc3Rpb24tbG9jYXRpb24vZ2VzdGlvbi1sb2NhdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/gestion-location/gestion-location.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/gestion-location/gestion-location.page.ts ***!
  \*****************************************************************/
/*! exports provided: GestionLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionLocationPage", function() { return GestionLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GestionLocationPage = class GestionLocationPage {
    constructor() { }
    ngOnInit() {
    }
};
GestionLocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gestion-location',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestion-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion-location/gestion-location.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestion-location.page.scss */ "./src/app/pages/gestion-location/gestion-location.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GestionLocationPage);



/***/ })

}]);
//# sourceMappingURL=pages-gestion-location-gestion-location-module-es2015.js.map