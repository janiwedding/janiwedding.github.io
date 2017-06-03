webpackJsonp([1,4],{

/***/ 382:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 382;


/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(503);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/main.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(666),
            styles: [__webpack_require__(662)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/app.component.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_component__ = __webpack_require__(504);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var approutes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__["a" /* AboutComponent */] },
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__["a" /* PortfolioComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_component__["a" /* ContactComponent */] },
    { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__not_found_component__["a" /* PageNotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_portfolio_portfolio_component__["a" /* PortfolioComponent */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_component__["a" /* PageNotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(approutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/app.module.js.map

/***/ }),

/***/ 504:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: '<h2>Page not found</h2>'
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/not-found.component.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        //About us accordion
        jQuery("#faq_main_content").collapse({
            accordion: true,
            open: function () {
                this.addClass("open");
                this.css({ height: this.children().outerHeight() });
            },
            close: function () {
                this.css({ height: "0px" });
                this.removeClass("open");
            }
        });
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: __webpack_require__(667),
            styles: [__webpack_require__(663)]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/about.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: __webpack_require__(668),
            styles: [__webpack_require__(664)]
        }), 
        __metadata('design:paramtypes', [])
    ], ContactComponent);
    return ContactComponent;
}());
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/contact.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            template: __webpack_require__(669),
            styles: [__webpack_require__(665)]
        }), 
        __metadata('design:paramtypes', [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/portfolio.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=D:/Projects/Angular2/jani2wedding/jani2wedding/src/environment.js.map

/***/ }),

/***/ 662:
/***/ (function(module, exports) {

module.exports = ".jani-content {\r\n    min-height: calc(100vh - 84px);\r\n}"

/***/ }),

/***/ 663:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 664:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 665:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 666:
/***/ (function(module, exports) {

module.exports = "<div class=\"culmn\">\n    <nav class=\"navbar navbar-default navbar-fixed white bootsnav\">\n        <div class=\"container\">    \n            <!-- Start Header Navigation -->\n            <div class=\"navbar-header\">\n                <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#navbar-menu\">\n                    <i class=\"fa fa-bars\"></i>\n                </button>\n                <a class=\"navbar-brand\" href=\"#brand\">\n\n                    <img src=\"assets/images/logo.png\" class=\"logo logo-display m-top-10\" alt=\"\">\n                    <img src=\"assets/images/logo.jpg\" class=\"logo logo-scrolled\" alt=\"\">\n\n                </a>\n            </div>\n            <!-- End Header Navigation -->\n\n            <!-- Collect the nav links, forms, and other content for toggling -->\n            <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                <ul class=\"nav navbar-nav navbar-right\" data-in=\"fadeInDown\" data-out=\"fadeOutUp\">\n                    <!--<li><a routerLink=\"/about\">About</a></li>-->\n                    <li><a routerLink=\"/portfolio\" routerLinkActive=\"active\">&nbsp;</a></li>\n                    <!--<li><a routerLink=\"/contact\">Contact</a></li>-->\n                </ul>\n            </div><!-- /.navbar-collapse -->\n        </div>\n\n    </nav>\n    \n    <div class=\"jani-content\">\n        <router-outlet></router-outlet>\n    </div>\n\n    <footer id=\"footer\" class=\"footer bg-black\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"main_footer text-center p-top-40 p-bottom-30\">\n                    <p class=\"wow fadeInRight\" data-wow-duration=\"1s\">\n                        Made with \n                        <i class=\"fa fa-heart\"></i>\n                        by \n                        <a target=\"_blank\" href=\"https://bootstrapthemes.co\">Bootstrap Themes</a> \n                        2016. All Rights Reserved\n                    </p>\n                </div>\n            </div>\n        </div>\n    </footer>\n    \n</div>"

/***/ }),

/***/ 667:
/***/ (function(module, exports) {

module.exports = "<!--About Sections-->\r\n<section id=\"about\" class=\"about roomy-100\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"main_about\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"about_content\">\r\n                        <h2 class=\"wow fadeInRight\" data-wow-duration=\"1s\">ABOUT US</h2>\r\n                        <div class=\"separator_left\"></div>\r\n\r\n                        <p>We are Jani jani a webdeveloper that create digital wedding invitation.</p>\r\n\r\n                        <div class=\"about_btns m-top-40\">\r\n                            <a href=\"\" class=\"btn btn-primary\">DOWNLOAD NOW</a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"about_accordion wow fadeIn\">\r\n                        <div id=\"faq_main_content\" class=\"faq_main_content\">\r\n                            <h6><i class=\"fa fa-angle-right\"></i> UNIQUE DESIGN </h6>\r\n                            <div>\r\n                                <div class=\"content\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\r\n                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore \r\n                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>\r\n\r\n                                </div>\r\n                            </div> <!-- End off accordion item-1 -->\r\n\r\n                            <h6 class=\"open\"><i class=\"fa fa-angle-right\"></i> EXPERIENCE TEAM</h6>\r\n                            <div class=\"open\">\r\n                                <div class=\"content\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\r\n                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore \r\n                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>\r\n                                </div>\r\n                            </div> <!-- End off accordion item-2 -->\r\n\r\n                            <h6> <i class=\"fa fa-angle-right\"></i> GREAT SERVICE </h6>\r\n                            <div>\r\n                                <div class=\"content\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\r\n                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore \r\n                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>\r\n                                </div>\r\n                            </div> <!-- End off accordion item-3 -->\r\n\r\n                            <h6><i class=\"fa fa-angle-right\"></i> FREE UPDATES </h6>\r\n                            <div>\r\n                                <div class=\"content\">\r\n                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,\r\n                                        sed diam nonummy nibh euismod tincidunt ut laoreet dolore \r\n                                        magna aliquam erat volutpat. Ut wisi enim ad minim veniam, </p>\r\n                                </div>\r\n                            </div> <!-- End off accordion item-4 -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div><!--End off row-->\r\n    </div><!--End off container -->\r\n    <br />\r\n    <br />\r\n    <br />\r\n    <br />\r\n    <hr />\r\n    <br />\r\n    <br />\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"about_bottom_content\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"about_bottom_item m-top-20\">\r\n                        <div class=\"ab_head\">\r\n                            <div class=\"ab_head_icon\">\r\n                                <i class=\"icofont icofont-fire-burn\"></i>\r\n                            </div>\r\n                            <h6 class=\"m-top-20\"> WE’RE CREATIVE</h6>\r\n                        </div>\r\n                        <p class=\"m-top-20\">Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, \r\n                            sed diaim nonummy nibsih euismod tincidiunt laorieet doloire\r\n                            magna diam aliquafm erat voluitpati. </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"about_bottom_item m-top-20\">\r\n                        <div class=\"ab_head\">\r\n                            <div class=\"ab_head_icon\">\r\n                                <i class=\"icofont icofont-speech-comments\"></i>\r\n                            </div>\r\n                            <h6 class=\"m-top-20\">WE'RE FRIENDLY</h6>\r\n                        </div>\r\n                        <p class=\"m-top-20\">Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, \r\n                            sed diaim nonummy nibsih euismod tincidiunt laorieet doloire\r\n                            magna diam aliquafm erat voluitpati. </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"about_bottom_item m-top-20\">\r\n                        <div class=\"ab_head\">\r\n                            <div class=\"ab_head_icon\">\r\n                                <i class=\"icofont icofont-heart\"></i>\r\n                            </div>\r\n                            <h6 class=\"m-top-20\">WE LOVE MINIMALISM</h6>\r\n                        </div>\r\n                        <p class=\"m-top-20\">Lorem ipsum dolor sit amet, consectetuer adipiscing ealit, \r\n                            sed diaim nonummy nibsih euismod tincidiunt laorieet doloire\r\n                            magna diam aliquafm erat voluitpati. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div><!--End off row-->\r\n    </div><!--End off container -->\r\n</section> <!--End off About section -->"

/***/ }),

/***/ 668:
/***/ (function(module, exports) {

module.exports = "<!--Contact Us Section-->\r\n<section id=\"contact\" class=\"contact bg-mega fix\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"main_contact roomy-100 text-white\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"rage_widget\">\r\n                        <div class=\"widget_head\">\r\n                            <h3 class=\"text-white\">Jani Jani</h3>\r\n                            <div class=\"separator_small\"></div>\r\n                        </div>\r\n                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \r\n                            sed diam nonummy nibh euismod tincidunt ut laoreet dolore \r\n                            magna aliquam erat volutpat. Ut wisi enim ad minim veniam, \r\n                            quis nostrud exerci tation ullamcorper suscipit lobortis nisl\r\n                            ut aliquip ex ea commodo consequat. </p>\r\n\r\n                        <div class=\"widget_socail m-top-30\">\r\n                            <ul class=\"list-inline\">\r\n                                <li><a href=\"\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                                <li><a href=\"\"><i class=\"fa fa-twitter\"></i></a></li>\r\n                                <li><a href=\"\"><i class=\"fa fa-linkedin\"></i></a></li>\r\n                                <li><a href=\"\"><i class=\"fa fa-vimeo\"></i></a></li>\r\n                                <li><a href=\"\"><i class=\"fa fa-instagram\"></i></a></li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-8 sm-m-top-30\">\r\n                    <form class=\"\" action=\"subcribe.php\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\"> \r\n                                    <input id=\"first_name\" name=\"first_name\" type=\"text\" placeholder=\"Name\" class=\"form-control\" required=\"\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-6\">\r\n                                <div class=\"form-group\">  \r\n                                    <input id=\"phone\" name=\"phone\" type=\"text\" placeholder=\"Phone\" class=\"form-control\">\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col-sm-12\">\r\n                                <div class=\"form-group\">  \r\n                                    <textarea class=\"form-control\" rows=\"6\" placeholder=\"Message\"></textarea>\r\n                                </div>\r\n                                <div class=\"form-group text-center\">\r\n                                    <a href=\"\" class=\"btn btn-primary\">SEND MESSAGE</a>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div><!--End off row -->\r\n    </div><!--End off container -->\r\n</section><!--End off Contact Section-->"

/***/ }),

/***/ 669:
/***/ (function(module, exports) {

module.exports = "<!--Portfolio Section-->\r\n<section id=\"portfolio\" class=\"portfolio lightbg\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"main_portfolio roomy-100\">\r\n                <div class=\"col-md-8 col-md-offset-2\">\r\n                    <div class=\"head_title text-center\">\r\n                        <h2 class=\"wow fadeInRight\" data-wow-duration=\"1s\">OUR PORTOFLIO</h2>\r\n                        <div class=\"separator_auto\"></div>\r\n                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, \r\n                            sed diam nonummy nibh euismod nostrud exerci tation ullamcorper \r\n                            suscipit lobortis nisl ut aliquip ex ea commodo consequat. </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"portfolio_content\">\r\n                    <div class=\"col-md-8\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                                <div class=\"portfolio_item\">\r\n                                    <img src=\"assets/images/Portfolio/2.jpg\" alt=\"\" />\r\n                                    <div class=\"portfolio_hover text-center\">\r\n                                        <h6 class=\"text-uppercase text-white\">Title</h6>\r\n                                        <p class=\" text-white\">Lorem ipsum dolor sit amet</p>\r\n                                        <div class=\"portfolio_hover_icon\">\r\n                                            <a href=\"assets/images/Portfolio/2.jpg\" class=\"popup-img\"><i class=\"fa fa-expand\"></i></a>\r\n                                            <a href=\"\"><i class=\"fa fa-search\"></i></a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>  \r\n                            </div>\r\n                            <div class=\"col-md-6 m-top-30\">\r\n                                <div class=\"portfolio_item portfolio_item2\">\r\n                                    <img src=\"assets/images/Portfolio/3.jpg\" alt=\"\" />\r\n                                    <div class=\"portfolio_hover text-center\">\r\n                                        <h6 class=\"text-uppercase text-white\">Title</h6>\r\n                                        <p class=\" text-white\">Lorem ipsum dolor sit amet</p>\r\n                                        <div class=\"portfolio_hover_icon\">\r\n                                            <a href=\"assets/images/Portfolio/3.jpg\" class=\"popup-img\"><i class=\"fa fa-expand\"></i></a>\r\n                                            <a href=\"\"><i class=\"fa fa-search\"></i></a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 m-top-30\">\r\n                                <div class=\"portfolio_item portfolio_item2\">\r\n                                    <img src=\"assets/images/Portfolio/5.jpg\" alt=\"\" />\r\n                                    <div class=\"portfolio_hover text-center\">\r\n                                        <h6 class=\"text-uppercase text-white\">Title</h6>\r\n                                        <p class=\" text-white\">Lorem ipsum dolor sit amet</p>\r\n                                        <div class=\"portfolio_hover_icon\">\r\n                                            <a href=\"assets/images/Portfolio/5.jpg\" class=\"popup-img\"><i class=\"fa fa-expand\"></i></a>\r\n                                            <a href=\"\"><i class=\"fa fa-search\"></i></a>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"portfolio_item portfolio_item3 sm-m-top-30\">\r\n                            <img src=\"assets/images/Portfolio/1.jpg\" alt=\"\" />\r\n                            <div class=\"portfolio_hover text-center\">\r\n                                <h6 class=\"text-uppercase text-white\">Title</h6>\r\n                                <p class=\" text-white\">Lorem ipsum dolor sit amet</p>\r\n                                <div class=\"portfolio_hover_icon\">\r\n                                    <a href=\"assets/images/Portfolio/1.jpg\" class=\"popup-img\"><i class=\"fa fa-expand\"></i></a>\r\n                                    <a href=\"\"><i class=\"fa fa-search\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 m-top-30\">\r\n                        <div class=\"portfolio_item portfolio_item2\">\r\n                            <img src=\"assets/images/Portfolio/6.jpg\" alt=\"\" />\r\n                            <div class=\"portfolio_hover text-center\">\r\n                                <h6 class=\"text-uppercase text-white\">Title</h6>\r\n                                <p class=\" text-white\">Lorem ipsum dolor sit amet</p>\r\n                                <div class=\"portfolio_hover_icon\">\r\n                                    <a href=\"assets/images/Portfolio/6.jpg\" class=\"popup-img\"><i class=\"fa fa-expand\"></i></a>\r\n                                    <a href=\"\"><i class=\"fa fa-search\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8 m-top-30\">\r\n                        <div class=\"portfolio_item\">\r\n                            <img src=\"assets/images/Portfolio/4.jpg\" alt=\"\" />\r\n                            <div class=\"portfolio_hover text-center\">\r\n                                <h6 class=\"text-uppercase text-white\">Title</h6>\r\n                                <p class=\" text-white\">Lorem ipsum dolor sit amet</p>\r\n                                <div class=\"portfolio_hover_icon\">\r\n                                    <a href=\"assets/images/Portfolio/4.jpg\" class=\"popup-img\"><i class=\"fa fa-expand\"></i></a>\r\n                                    <a href=\"\"><i class=\"fa fa-search\"></i></a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n        </div><!--End off row -->\r\n    </div><!--End off container -->\r\n</section><!-- End off Portfolio section-->"

/***/ }),

/***/ 687:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(383);


/***/ })

},[687]);
//# sourceMappingURL=main.bundle.map