(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-vehicule-spec-vehicule-spec-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vehicule-spec/vehicule-spec.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vehicule-spec/vehicule-spec.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>vehicule-spec</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n<ion-card>\r\n  <ion-card-header>\r\n<ion-item>\r\n  <ion-label center text-center>Elevateur à nacelle 121F</ion-label>\r\n</ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content center text-center>\r\n    <ion-row>\r\n      <ion-col center text-center>\r\n\t\t\t<img src=\"/assets/WebExport/Image_1.png\" alt=\"ion\">\r\n      </ion-col>\r\n      <ion-col >\r\n          <div>AC-879-ZE</div>\r\n          <div>Aix-en-Provence</div>\r\n          <div>En maintenance</div>\r\n      </ion-col>\r\n     </ion-row>\r\n     <ion-item>\r\n        <ion-label>  </ion-label>\r\n     </ion-item>\r\n     <ion-item>   \r\n        <ion-label> Date de mise en circulation  </ion-label>\r\n     </ion-item>\r\n       <ion-item>\r\n        <ion-label> Dimensions l x L x H  </ion-label>\r\n    \t</ion-item>\r\n    \t <ion-item>   \r\n        <ion-label> Poids  </ion-label>\r\n     </ion-item>\r\n     <ion-item>\r\n        <ion-label> Puissances ch  </ion-label>\r\n\t</ion-item>\r\n\t     <ion-item>\r\n        <ion-label> Agence de rattachement  </ion-label>\r\n\t</ion-item>     \r\n  </ion-card-content>\r\n</ion-card>\r\n    <ion-button expand=\"block\" >Suivre maintenance</ion-button> \r\n    <ion-button expand=\"block\" >Consulter historique</ion-button> \r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pages/vehicule-spec/vehicule-spec-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/vehicule-spec/vehicule-spec-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VehiculeSpecPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculeSpecPageRoutingModule", function() { return VehiculeSpecPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _vehicule_spec_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vehicule-spec.page */ "./src/app/pages/vehicule-spec/vehicule-spec.page.ts");




const routes = [
    {
        path: '',
        component: _vehicule_spec_page__WEBPACK_IMPORTED_MODULE_3__["VehiculeSpecPage"]
    }
];
let VehiculeSpecPageRoutingModule = class VehiculeSpecPageRoutingModule {
};
VehiculeSpecPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VehiculeSpecPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/vehicule-spec/vehicule-spec.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/vehicule-spec/vehicule-spec.module.ts ***!
  \*************************************************************/
/*! exports provided: VehiculeSpecPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculeSpecPageModule", function() { return VehiculeSpecPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _vehicule_spec_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vehicule-spec-routing.module */ "./src/app/pages/vehicule-spec/vehicule-spec-routing.module.ts");
/* harmony import */ var _vehicule_spec_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vehicule-spec.page */ "./src/app/pages/vehicule-spec/vehicule-spec.page.ts");







let VehiculeSpecPageModule = class VehiculeSpecPageModule {
};
VehiculeSpecPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vehicule_spec_routing_module__WEBPACK_IMPORTED_MODULE_5__["VehiculeSpecPageRoutingModule"]
        ],
        declarations: [_vehicule_spec_page__WEBPACK_IMPORTED_MODULE_6__["VehiculeSpecPage"]]
    })
], VehiculeSpecPageModule);



/***/ }),

/***/ "./src/app/pages/vehicule-spec/vehicule-spec.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/vehicule-spec/vehicule-spec.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff url(\"/assets/WebExport/bg_SOCOPEC_test.png\") no-repeat center center / cover;\n}\n\nion-card {\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdmVoaWN1bGUtc3BlYy9DOlxcVXNlcnNcXFJvYmVydFBBc3Rpc3NcXERvY3VtZW50c1xcR2l0SHViXFxJb25pY1dlYlxcU29jb3BlY1xcQ2xpZW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcdmVoaWN1bGUtc3BlY1xcdmVoaWN1bGUtc3BlYy5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3ZlaGljdWxlLXNwZWMvdmVoaWN1bGUtc3BlYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrRkFBQTtBQ0NKOztBREVBO0VBQ0MsaUJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ZlaGljdWxlLXNwZWMvdmVoaWN1bGUtc3BlYy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvV2ViRXhwb3J0L2JnX1NPQ09QRUNfdGVzdC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG4gICAgXHJcbn1cclxuaW9uLWNhcmR7XHJcblx0YmFja2dyb3VuZDp3aGl0ZTtcclxuXHJcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIvYXNzZXRzL1dlYkV4cG9ydC9iZ19TT0NPUEVDX3Rlc3QucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/vehicule-spec/vehicule-spec.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/vehicule-spec/vehicule-spec.page.ts ***!
  \***********************************************************/
/*! exports provided: VehiculeSpecPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiculeSpecPage", function() { return VehiculeSpecPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let VehiculeSpecPage = class VehiculeSpecPage {
    constructor() { }
    ngOnInit() {
    }
};
VehiculeSpecPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vehicule-spec',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./vehicule-spec.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/vehicule-spec/vehicule-spec.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./vehicule-spec.page.scss */ "./src/app/pages/vehicule-spec/vehicule-spec.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], VehiculeSpecPage);



/***/ })

}]);
//# sourceMappingURL=pages-vehicule-spec-vehicule-spec-module-es2015.js.map