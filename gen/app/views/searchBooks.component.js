//
// Created by IFML2NG2 on 2018/02/17 19:23:39
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
var inventoryList_pipe_1 = require('../helper/pipes/inventoryList.pipe');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
var SearchBooksComponent = (function () {
    // PROTECTED REGION ID _h3vrIIC1Eea2S59Os6LSKA.searchBooks ENABLED START
    // PROTECTED REGION END
    function SearchBooksComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        // fill advanced search space
        this.advancedSearchSpace = [
            { key: "bookInfo.isbn", title: "bookInfo.isbn" },
            { key: "bookInfo.title", title: "bookInfo.title" },
            { key: "bookInfo.author", title: "bookInfo.author" },
            { key: "bookStatus", title: "vBookStatus" }
        ];
    }
    // stubs generated for view element events
    SearchBooksComponent.prototype.issueBook = function () {
        this._router.navigate(['/lendingForm', { bookToIssueBinding: JSON.stringify(this.selectedBookBinding) }]);
    };
    SearchBooksComponent.prototype.reserveBook = function () {
        this.reserveBookActionAction();
    };
    SearchBooksComponent.prototype.reserveBookActionAction = function () {
        // PROTECTED REGION ID _A2qEQIC_Eea2S59Os6LSKA.reserveBookAction ENABLED START
        this._dataService.reserveBook(this.selectedBookBinding.bookId, this._authenticationService.getId());
        this.getBookBinding();
        // PROTECTED REGION END
    };
    SearchBooksComponent.prototype.returnBook = function () {
        this.returnBookActionAction();
    };
    SearchBooksComponent.prototype.returnBookActionAction = function () {
        // PROTECTED REGION ID _IaebAIC_Eea2S59Os6LSKA.returnBookAction ENABLED START
        // PROTECTED REGION END
    };
    // stubs for data service calls for data bindings
    SearchBooksComponent.prototype.getBookBinding = function () {
        var _this = this;
        // PROTECTED REGION ID _sU8p0IC1Eea2S59Os6LSKA.getBookBinding ENABLED START
        this._dataService.getBooks().then(function (lendings) { return _this.bookBinding = lendings; });
        // PROTECTED REGION END
    };
    SearchBooksComponent.prototype.onSelect = function (el) {
        if (this.selectedBookBinding === el) {
            this.selectedBookBinding = undefined;
            this.isSelectedBookBinding = false;
        }
        else {
            this.selectedBookBinding = el;
            this.isSelectedBookBinding = true;
        }
    };
    // called when search filter is updated
    SearchBooksComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    // called when component is initiated			
    SearchBooksComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        this._authenticationService.checkPrivilegesIncludeOne([{ role: 'staff' }, { role: 'student' }]);
        // Call methods for filling data binding
        this.getBookBinding();
        // PROTECTED REGION ID _h3vrIIC1Eea2S59Os6LSKA.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    SearchBooksComponent = __decorate([
        core_1.Component({
            selector: 'searchBooks',
            templateUrl: 'app/views/searchBooks.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass, search_component_1.SearchComponent],
            pipes: [inventoryList_pipe_1.InventoryListFilter,]
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], SearchBooksComponent);
    return SearchBooksComponent;
}());
exports.SearchBooksComponent = SearchBooksComponent;
//# sourceMappingURL=searchBooks.component.js.map