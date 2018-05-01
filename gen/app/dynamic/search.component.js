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
// Service Imports
var logger_service_1 = require("../services/logger.service");
var authentication_service_1 = require("../services/authentication.service");
var data_service_1 = require("../services/data.service");
var displayProperties_service_1 = require("../services/displayProperties.service");
var resource_service_1 = require("../services/resource.service");
var SearchComponent = /** @class */ (function () {
    function SearchComponent(_loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        this.searchSpace = [];
        this.advancedFilter = {};
        this.title = "";
        this.onFilterUpdate = new core_1.EventEmitter();
    }
    SearchComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var changedProp = changes[propName];
        }
    };
    SearchComponent.prototype.updateFilterSimple = function (val) {
        this.onFilterUpdate.emit({ '*': val });
    };
    SearchComponent.prototype.updateFilterAdvanced = function (key, val) {
        if (val !== "" || val == undefined) {
            this.advancedFilter[key] = val;
        }
        else {
            delete this.advancedFilter[key];
        }
        this.onFilterUpdate.emit(this.advancedFilter);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SearchComponent.prototype, "searchSpace", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SearchComponent.prototype, "title", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SearchComponent.prototype, "onFilterUpdate", void 0);
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'search-component',
            templateUrl: 'app/dynamic/search.component.html'
        }),
        __metadata("design:paramtypes", [logger_service_1.LoggerService,
            authentication_service_1.AuthenticationService,
            data_service_1.DataService,
            displayProperties_service_1.DisplayPropertiesService,
            resource_service_1.ResourceService])
    ], SearchComponent);
    return SearchComponent;
}());
exports.SearchComponent = SearchComponent;
//# sourceMappingURL=search.component.js.map