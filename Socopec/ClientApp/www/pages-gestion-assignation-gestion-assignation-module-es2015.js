(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gestion-assignation-gestion-assignation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion-assignation/gestion-assignation.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion-assignation/gestion-assignation.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>GestionAssignation</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/gestion-assignation/gestion-assignation-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/gestion-assignation/gestion-assignation-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: GestionAssignationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionAssignationPageRoutingModule", function() { return GestionAssignationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _gestion_assignation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gestion-assignation.page */ "./src/app/pages/gestion-assignation/gestion-assignation.page.ts");




const routes = [
    {
        path: '',
        component: _gestion_assignation_page__WEBPACK_IMPORTED_MODULE_3__["GestionAssignationPage"]
    }
];
let GestionAssignationPageRoutingModule = class GestionAssignationPageRoutingModule {
};
GestionAssignationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GestionAssignationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gestion-assignation/gestion-assignation.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/gestion-assignation/gestion-assignation.module.ts ***!
  \*************************************************************************/
/*! exports provided: GestionAssignationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionAssignationPageModule", function() { return GestionAssignationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gestion_assignation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gestion-assignation-routing.module */ "./src/app/pages/gestion-assignation/gestion-assignation-routing.module.ts");
/* harmony import */ var _gestion_assignation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gestion-assignation.page */ "./src/app/pages/gestion-assignation/gestion-assignation.page.ts");







let GestionAssignationPageModule = class GestionAssignationPageModule {
};
GestionAssignationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _gestion_assignation_routing_module__WEBPACK_IMPORTED_MODULE_5__["GestionAssignationPageRoutingModule"]
        ],
        declarations: [_gestion_assignation_page__WEBPACK_IMPORTED_MODULE_6__["GestionAssignationPage"]]
    })
], GestionAssignationPageModule);



/***/ }),

/***/ "./src/app/pages/gestion-assignation/gestion-assignation.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/gestion-assignation/gestion-assignation.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlc3Rpb24tYXNzaWduYXRpb24vZ2VzdGlvbi1hc3NpZ25hdGlvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/gestion-assignation/gestion-assignation.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/gestion-assignation/gestion-assignation.page.ts ***!
  \***********************************************************************/
/*! exports provided: GestionAssignationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GestionAssignationPage", function() { return GestionAssignationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let GestionAssignationPage = class GestionAssignationPage {
    constructor() { }
    ngOnInit() {
    }
};
GestionAssignationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gestion-assignation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gestion-assignation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gestion-assignation/gestion-assignation.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gestion-assignation.page.scss */ "./src/app/pages/gestion-assignation/gestion-assignation.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], GestionAssignationPage);



/***/ })

}]);
//# sourceMappingURL=pages-gestion-assignation-gestion-assignation-module-es2015.js.map