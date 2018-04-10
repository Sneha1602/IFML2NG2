"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var navigation_component_1 = require("./dynamic/navigation.component");
var noolstestBar_1 = require("./tests/noolstestBar");
var authentication_service_1 = require("./services/authentication.service");
var displayProperties_service_1 = require("./services/displayProperties.service");
var contextController_service_1 = require("./context/contextController.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(_service, 
    //--> New ContextService          
    _context, 
    //--> Old manual ContextService          
    //private profile: ProfileService,
    _displayPropertiesService) {
        this._service = _service;
        this._context = _context;
        this._displayPropertiesService = _displayPropertiesService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [
                authentication_service_1.AuthenticationService,
                contextController_service_1.ContextControllerService
            ],
            template: "\n\t\t\t<div id=\"bodydiv\" [ngClass]=\"_displayPropertiesService.displayProperties.bodyClass\">\n\t\t\t<noolstestbar></noolstestbar>\n\t\t\t   <div id=\"desktopViewContainter\" class=\"container\">\n\t\t      <div id=\"headerBar\" [ngClass]=\"_displayPropertiesService.displayProperties.headerBarClass\" class=\"row\" style=\"margin-right:0px;padding-left:0px;padding-right:0px;\">\n\t\t        <div class=\"col-md-12\" style=\"width:100%; padding-left:0;padding-right:0px;\">\n\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-link\"><img src=\"./resources/images/logo_transparent.png\" alt=\"LibSoft\" height=\"115\" width=\"175\"></a>\n\t\t\t\t\t\t </div>\n\t\t        <div>\n\t\t        </div>\n\t\t      </div>\n\t\t      <div class=\"row\" style=\"margin-right:0px;margin-left:0px;\">\n\t\t\t\t\t\t<navigation-component [navItems]=\"_displayPropertiesService.displayProperties.navigation\"></navigation-component>\n\t\t\t\t\t\t<div [ngClass]=\"_displayPropertiesService.displayProperties.routerOutletClass\" style=\"margin-left:0;width:83.33332%\">\n\t\t\t\t\t\t\t<router-outlet></router-outlet>\n\t\t\t\t\t\t</div>\n\t\t      </div>\n\t\t\t\t</div>\n\t\t\t</div>\t\n\t\t\t ",
            directives: [router_1.ROUTER_DIRECTIVES, navigation_component_1.NavigationComponent, noolstestBar_1.NoolsTestBarComponent, common_1.NgClass]
        }),
        __metadata("design:paramtypes", [authentication_service_1.AuthenticationService,
            contextController_service_1.ContextControllerService,
            displayProperties_service_1.DisplayPropertiesService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map