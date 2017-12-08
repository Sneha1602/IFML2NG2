//
// Created by IFML2NG2 on 2017/12/08 12:31:18
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
// Search Component Imports
var search_component_1 = require('../dynamic/search.component');
var reservationsList_pipe_1 = require('../helper/pipes/reservationsList.pipe');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
var BookReservationsComponent = (function () {
    // PROTECTED REGION ID _tPI6IIaoEeaTJocisBH8lA.bookReservations ENABLED START
    // PROTECTED REGION END
    function BookReservationsComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        // fill advanced search space
        this.advancedSearchSpace = [
            { key: "reservedBy.studentId", title: "reservedBy.studentId" },
            { key: "reservedBy.firstname", title: "reservedBy.firstname" },
            { key: "reservedBy.lastname", title: "reservedBy.lastname" },
            { key: "reservedBy.studentStatus", title: "reservedBy.studentStatus" },
            { key: "reservedBook.bookId", title: "reservedBook.bookId" },
            { key: "reservedBook.bookStatus", title: "reservedBook.bookStatus" },
            { key: "reservedBook.bookInfo.isbn", title: "reservedBook.bookInfo.isbn" },
            { key: "reservedBook.bookInfo.title", title: "reservedBook.bookInfo.title" },
            { key: "reservedBook.bookInfo.author", title: "reservedBook.bookInfo.author" }
        ];
    }
    // stubs generated for view element events
    BookReservationsComponent.prototype.issueBook = function () {
        this._router.navigate(['/lendingForm', { reservationBinding: JSON.stringify(this.selectedReservationBinding) }]);
    };
    // stubs for data service calls for data bindings
    BookReservationsComponent.prototype.getReservationBinding = function () {
        var _this = this;
        // PROTECTED REGION ID _zM55EIaoEeaTJocisBH8lA.getReservationBinding ENABLED START
        this._dataService.getBookReservations().then(function (reservations) { return _this.reservationBinding = reservations; });
        // PROTECTED REGION END
    };
    BookReservationsComponent.prototype.onSelect = function (el) {
        if (this.selectedReservationBinding === el) {
            this.selectedReservationBinding = undefined;
            this.isSelectedReservationBinding = false;
        }
        else {
            this.selectedReservationBinding = el;
            this.isSelectedReservationBinding = true;
        }
    };
    // called when search filter is updated
    BookReservationsComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    // called when component is initiated			
    BookReservationsComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        this._authenticationService.checkPrivilegesIncludeOne([{ role: 'staff' }]);
        // Call methods for filling data binding
        this.getReservationBinding();
        // PROTECTED REGION ID _tPI6IIaoEeaTJocisBH8lA.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    BookReservationsComponent = __decorate([
        core_1.Component({
            selector: 'bookReservations',
            templateUrl: 'app/views/bookReservations.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass, search_component_1.SearchComponent],
            pipes: [reservationsList_pipe_1.ReservationsListFilter,]
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], BookReservationsComponent);
    return BookReservationsComponent;
}());
exports.BookReservationsComponent = BookReservationsComponent;
//# sourceMappingURL=bookReservations.component.js.map