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
var router_2 = require('@angular/router');
var common_1 = require('@angular/common');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
// domain concept imports
var LendingFormComponent = (function () {
    // PROTECTED REGION ID _mnIcUIC-Eea2S59Os6LSKA.lendingForm ENABLED START
    // PROTECTED REGION END
    function LendingFormComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
    }
    // stubs generated for view element events
    LendingFormComponent.prototype.issueBook = function () {
        this.issueBookActionAction();
    };
    LendingFormComponent.prototype.issueBookActionAction = function () {
        // PROTECTED REGION ID _vV7RQIDmEea8AL0yBf-zEA.issueBookAction ENABLED START
        if (this.selectedBookToIssueBinding != null) {
            this._dataService.lendBook(this.selectedBookToIssueBinding, this.studentID, this.dueDate);
        }
        else if (this.selectedReservationBinding != null) {
            this._dataService.lendBook(this.selectedReservationBinding.reservedBook, this.studentID, this.dueDate);
        }
        this.bookISBN = '';
        this.studentID = '';
        // PROTECTED REGION END
    };
    // called when component is initiated			
    LendingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Check authentication requirements, if empty, no authentication requirements for this component
        this._authenticationService.checkPrivilegesIncludeOne([{ role: 'staff' }]);
        // Incoming Navigation Flows with Parameter Binding
        this._route.params.subscribe(function (params) {
            if (params['bookToIssueBinding'] != undefined) {
                _this.selectedBookToIssueBinding = JSON.parse(decodeURI(params['bookToIssueBinding']));
            }
            if (params['reservationBinding'] != undefined) {
                _this.selectedReservationBinding = JSON.parse(decodeURI(params['reservationBinding']));
            }
        });
        // PROTECTED REGION ID _mnIcUIC-Eea2S59Os6LSKA.ngOnInit ENABLED START
        if (this.selectedBookToIssueBinding != null) {
            this.bookISBN = this.selectedBookToIssueBinding.bookInfo.isbn;
        }
        else if (this.selectedReservationBinding != null) {
            this.bookISBN = this.selectedReservationBinding.reservedBook.bookInfo.isbn;
            this.studentID = this.selectedReservationBinding.reservedBy.studentId;
        }
        this.dueDate = new Date();
        this.dueDate.setDate(this.dueDate.getDate() + 30);
        // PROTECTED REGION END
    };
    LendingFormComponent = __decorate([
        core_1.Component({
            selector: 'lendingForm',
            templateUrl: 'app/views/lendingForm.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass],
            pipes: []
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], LendingFormComponent);
    return LendingFormComponent;
}());
exports.LendingFormComponent = LendingFormComponent;
//# sourceMappingURL=lendingForm.component.js.map