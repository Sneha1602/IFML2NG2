//
// Created by IFML2NG2 on 2018/02/18 01:27:02
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
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
// domain concept imports
var HelpWindowComponent = (function () {
    // PROTECTED REGION ID _dPjFoFWYEee_i6NdnvfQJg.helpWindow ENABLED START
    // PROTECTED REGION END
    function HelpWindowComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
    }
    // stubs generated for view element events
    HelpWindowComponent.prototype.submitQuestion = function () {
        this.submitQuestionActionAction();
    };
    HelpWindowComponent.prototype.submitQuestionActionAction = function () {
        // PROTECTED REGION ID _sCz-cFXAEee_i6NdnvfQJg.submitQuestionAction ENABLED START
        // PROTECTED REGION END
    };
    HelpWindowComponent.prototype.findClosestLocation = function () {
        this.findLocationActionAction();
    };
    HelpWindowComponent.prototype.findLocationActionAction = function () {
        // PROTECTED REGION ID _slgb0FXAEee_i6NdnvfQJg.findLocationAction ENABLED START
        this._router.navigate(['searchBooks']);
        // PROTECTED REGION END
    };
    // called when component is initiated			
    HelpWindowComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        // PROTECTED REGION ID _dPjFoFWYEee_i6NdnvfQJg.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    HelpWindowComponent = __decorate([
        core_1.Component({
            selector: 'helpWindow',
            templateUrl: 'app/views/helpWindow.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass],
            pipes: []
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], HelpWindowComponent);
    return HelpWindowComponent;
}());
exports.HelpWindowComponent = HelpWindowComponent;
//# sourceMappingURL=helpWindow.component.js.map