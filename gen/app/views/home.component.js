"use strict";
//
// Created by IFML2NG2 on 2018/05/01 19:28:00
//
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
// Angular Imports
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("@angular/router");
var common_1 = require("@angular/common");
// Service Imports
var logger_service_1 = require("../services/logger.service");
var authentication_service_1 = require("../services/authentication.service");
var data_service_1 = require("../services/data.service");
var displayProperties_service_1 = require("../services/displayProperties.service");
var resource_service_1 = require("../services/resource.service");
// domain concept imports
var HomeComponent = /** @class */ (function () {
    //Generate variables for parameters and bindings
    // PROTECTED REGION ID _U0HnUIC2Eea2S59Os6LSKA.home ENABLED START
    // PROTECTED REGION END
    function HomeComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
    }
    // stubs generated for view element events
    // called when component is initiated			
    HomeComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        this._authenticationService.checkPrivilegesIncludeOne([{ role: 'staff' }, { role: 'student' }]);
        // PROTECTED REGION ID _U0HnUIC2Eea2S59Os6LSKA.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: 'app/views/home.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass],
            pipes: []
        }),
        __metadata("design:paramtypes", [router_2.Router,
            router_1.ActivatedRoute,
            logger_service_1.LoggerService,
            authentication_service_1.AuthenticationService,
            data_service_1.DataService,
            displayProperties_service_1.DisplayPropertiesService,
            resource_service_1.ResourceService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map