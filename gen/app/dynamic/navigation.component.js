//
// Created by IFML2NG2 on 2018/03/20 04:09:22
//
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
// Angular Imports
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
var NavigationComponent = (function () {
    function NavigationComponent(_loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        this.navItems = [];
    }
    NavigationComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var changedProp = changes[propName];
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NavigationComponent.prototype, "navItems", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation-component',
            templateUrl: 'app/dynamic/navigation.component.html',
            providers: [router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map