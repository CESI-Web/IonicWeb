(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accueil-accueil-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccueilAccueilPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Accueil</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n\r\n    \t<ion-button expand=\"block\" routerLink=\"/connexion\">Commencer</ion-button>  \r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/accueil/accueil-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/accueil/accueil-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AccueilPageRoutingModule */

  /***/
  function srcAppPagesAccueilAccueilRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccueilPageRoutingModule", function () {
      return AccueilPageRoutingModule;
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


    var _accueil_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./accueil.page */
    "./src/app/pages/accueil/accueil.page.ts");

    const routes = [{
      path: '',
      component: _accueil_page__WEBPACK_IMPORTED_MODULE_3__["AccueilPage"]
    }];
    let AccueilPageRoutingModule = class AccueilPageRoutingModule {};
    AccueilPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccueilPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/accueil/accueil.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/accueil/accueil.module.ts ***!
    \*************************************************/

  /*! exports provided: AccueilPageModule */

  /***/
  function srcAppPagesAccueilAccueilModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccueilPageModule", function () {
      return AccueilPageModule;
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


    var _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./accueil-routing.module */
    "./src/app/pages/accueil/accueil-routing.module.ts");
    /* harmony import */


    var _accueil_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./accueil.page */
    "./src/app/pages/accueil/accueil.page.ts");

    let AccueilPageModule = class AccueilPageModule {};
    AccueilPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _accueil_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccueilPageRoutingModule"]],
      declarations: [_accueil_page__WEBPACK_IMPORTED_MODULE_6__["AccueilPage"]]
    })], AccueilPageModule);
    /***/
  },

  /***/
  "./src/app/pages/accueil/accueil.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/accueil/accueil.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccueilAccueilPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #fff url(\"/assets/WebExport/bg_SOCOPEC_test.png\") no-repeat center center / cover;\n}\n\nion-button {\n  position: relative;\n  margin: auto;\n  margin-top: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjdWVpbC9DOlxcVXNlcnNcXFJvYmVydFBBc3Rpc3NcXERvY3VtZW50c1xcR2l0SHViXFxJb25pY1dlYlxcU29jb3BlY1xcQ2xpZW50QXBwL3NyY1xcYXBwXFxwYWdlc1xcYWNjdWVpbFxcYWNjdWVpbC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrRkFBQTtBQ0NKOztBRENBO0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY3VlaWwvYWNjdWVpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoJy9hc3NldHMvV2ViRXhwb3J0L2JnX1NPQ09QRUNfdGVzdC5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG59XHJcbmlvbi1idXR0b257XHJcblx0XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi10b3A6ODB2aDtcclxufVxyXG4iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZiB1cmwoXCIvYXNzZXRzL1dlYkV4cG9ydC9iZ19TT0NPUEVDX3Rlc3QucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG59XG5cbmlvbi1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLXRvcDogODB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/accueil/accueil.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/accueil/accueil.page.ts ***!
    \***********************************************/

  /*! exports provided: AccueilPage */

  /***/
  function srcAppPagesAccueilAccueilPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccueilPage", function () {
      return AccueilPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AccueilPage = class AccueilPage {
      constructor() {}

      ngOnInit() {}

    };
    AccueilPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accueil',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./accueil.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/accueil/accueil.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./accueil.page.scss */
      "./src/app/pages/accueil/accueil.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], AccueilPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-accueil-accueil-module-es5.js.map