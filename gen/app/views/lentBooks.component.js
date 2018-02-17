//
// Created by IFML2NG2 on 2018/02/17 20:41:09
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
var lentBooks_pipe_1 = require('../helper/pipes/lentBooks.pipe');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
var LentBooksComponent = (function () {
    // PROTECTED REGION ID _NQWk0IC_Eea2S59Os6LSKA.lentBooks ENABLED START
    // PROTECTED REGION END
    function LentBooksComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        // fill advanced search space
        this.advancedSearchSpace = [
            { key: "lentBook.bookId", title: "lentBook.bookId" },
            { key: "lentBook.bookStatus", title: "lentBook.bookStatus" },
            { key: "lentBook.bookInfo.isbn", title: "lentBook.bookInfo.isbn" },
            { key: "lentBook.bookInfo.title", title: "lentBook.bookInfo.title" },
            { key: "lentBook.bookInfo.author", title: "lentBook.bookInfo.author" },
            { key: "lentBy.studentId", title: "lentBy.studentId" },
            { key: "lentBy.firstname", title: "lentBy.firstname" },
            { key: "lentBy.lastname", title: "lentBy.lastname" },
            { key: "lentBy.studentStatus", title: "lentBy.studentStatus" },
            { key: "until", title: "vDueDate" }
        ];
    }
    // stubs generated for view element events
    LentBooksComponent.prototype.extendBook = function () {
        this.extendBookActionAction();
    };
    LentBooksComponent.prototype.extendBookActionAction = function () {
        // PROTECTED REGION ID _JjYHUIDAEea2S59Os6LSKA.extendBookAction ENABLED START
        // PROTECTED REGION END
    };
    // stubs for data service calls for data bindings
    LentBooksComponent.prototype.getLentBooksBinding = function () {
        var _this = this;
        // PROTECTED REGION ID _UloJQIC_Eea2S59Os6LSKA.getLentBooksBinding ENABLED START
        this._dataService.getLendings(this._authenticationService.getId()).then(function (lendings) { return _this.lentBooksBinding = lendings; });
        // PROTECTED REGION END
    };
    LentBooksComponent.prototype.onSelect = function (el) {
        if (this.selectedLentBooksBinding === el) {
            this.selectedLentBooksBinding = undefined;
            this.isSelectedLentBooksBinding = false;
        }
        else {
            this.selectedLentBooksBinding = el;
            this.isSelectedLentBooksBinding = true;
        }
    };
    // called when search filter is updated
    LentBooksComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    // called when component is initiated			
    LentBooksComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        this._authenticationService.checkPrivilegesIncludeOne([{ role: 'student' }]);
        // Call methods for filling data binding
        this.getLentBooksBinding();
        // PROTECTED REGION ID _NQWk0IC_Eea2S59Os6LSKA.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    LentBooksComponent = __decorate([
        core_1.Component({
            selector: 'lentBooks',
            templateUrl: 'app/views/lentBooks.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass, search_component_1.SearchComponent],
            pipes: [lentBooks_pipe_1.LentBooksFilter,]
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], LentBooksComponent);
    return LentBooksComponent;
}());
exports.LentBooksComponent = LentBooksComponent;
//# sourceMappingURL=lentBooks.component.js.map