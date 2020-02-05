(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-detail-vehicule-detail-vehicule-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-vehicule/detail-vehicule.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-vehicule/detail-vehicule.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDetailVehiculeDetailVehiculePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>DetailVehicule</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<ion-card>\r\n  <ion-card-header>\r\n<ion-item>\r\n  <ion-avatar>\r\n\r\n  </ion-avatar>\r\n  <ion-label center text-center>Nacelle araignée TR 170</ion-label>\r\n</ion-item>\r\n  </ion-card-header>\r\n  <ion-card-content center text-center>\r\n    <ion-row>\r\n      <ion-col center text-center>\r\n        <button>\r\n\t\t\t<img src=\"/assets/WebExport/Image_1.png\" alt=\"ion\">\r\n        </button>\r\n      </ion-col>\r\n      <ion-col >\r\n          <br>\r\n          <div>AC-879-ZE</div>\r\n          <br>\r\n          <div>Aix-en-Provence</div>\r\n                    <br>\r\n          <div>En maintenance</div>\r\n      </ion-col>\r\n     </ion-row>\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Product Description</ion-label>\r\n      <ion-textarea formControlName=\"prod_desc\"></ion-textarea>\r\n    </ion-item>\r\n  </ion-card-content>\r\n</ion-card>\r\n\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/detail-vehicule/detail-vehicule-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/detail-vehicule/detail-vehicule-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: DetailVehiculePageRoutingModule */

  /***/
  function srcAppPagesDetailVehiculeDetailVehiculeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailVehiculePageRoutingModule", function () {
      return DetailVehiculePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _detail_vehicule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail-vehicule.page */
    "./src/app/pages/detail-vehicule/detail-vehicule.page.ts");

    const routes = [{
      path: '',
      component: _detail_vehicule_page__WEBPACK_IMPORTED_MODULE_3__["DetailVehiculePage"]
    }];
    let DetailVehiculePageRoutingModule = class DetailVehiculePageRoutingModule {};
    DetailVehiculePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DetailVehiculePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/detail-vehicule/detail-vehicule.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/detail-vehicule/detail-vehicule.module.ts ***!
    \*****************************************************************/

  /*! exports provided: DetailVehiculePageModule */

  /***/
  function srcAppPagesDetailVehiculeDetailVehiculeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailVehiculePageModule", function () {
      return DetailVehiculePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _detail_vehicule_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./detail-vehicule-routing.module */
    "./src/app/pages/detail-vehicule/detail-vehicule-routing.module.ts");
    /* harmony import */


    var _detail_vehicule_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./detail-vehicule.page */
    "./src/app/pages/detail-vehicule/detail-vehicule.page.ts");

    let DetailVehiculePageModule = class DetailVehiculePageModule {};
    DetailVehiculePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_vehicule_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailVehiculePageRoutingModule"]],
      declarations: [_detail_vehicule_page__WEBPACK_IMPORTED_MODULE_6__["DetailVehiculePage"]]
    })], DetailVehiculePageModule);
    /***/
  },

  /***/
  "./src/app/pages/detail-vehicule/detail-vehicule.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/detail-vehicule/detail-vehicule.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDetailVehiculeDetailVehiculePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbC12ZWhpY3VsZS9kZXRhaWwtdmVoaWN1bGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/detail-vehicule/detail-vehicule.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/detail-vehicule/detail-vehicule.page.ts ***!
    \***************************************************************/

  /*! exports provided: DetailVehiculePage */

  /***/
  function srcAppPagesDetailVehiculeDetailVehiculePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailVehiculePage", function () {
      return DetailVehiculePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let DetailVehiculePage = class DetailVehiculePage {
      constructor() {}

      ngOnInit() {}

    };
    DetailVehiculePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detail-vehicule',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail-vehicule.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/detail-vehicule/detail-vehicule.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail-vehicule.page.scss */
      "./src/app/pages/detail-vehicule/detail-vehicule.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], DetailVehiculePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-detail-vehicule-detail-vehicule-module-es5.js.map