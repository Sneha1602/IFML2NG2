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
// Search Component Imports
var search_component_1 = require('../dynamic/search.component');
var studentList_pipe_1 = require('../helper/pipes/studentList.pipe');
// Service Imports
var logger_service_1 = require('../services/logger.service');
var authentication_service_1 = require('../services/authentication.service');
var data_service_1 = require('../services/data.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var resource_service_1 = require('../services/resource.service');
var StudentsComponent = (function () {
    // PROTECTED REGION ID _4sXwUIXVEeace_i7152fMw.students ENABLED START
    // PROTECTED REGION END
    function StudentsComponent(_router, _route, _loggerService, _authenticationService, _dataService, _displayPropertiesService, _resourceService) {
        this._router = _router;
        this._route = _route;
        this._loggerService = _loggerService;
        this._authenticationService = _authenticationService;
        this._dataService = _dataService;
        this._displayPropertiesService = _displayPropertiesService;
        this._resourceService = _resourceService;
        // fill advanced search space
        this.advancedSearchSpace = [
            { key: "studentId", title: "vStudentId" },
            { key: "firstname", title: "vStudentFirstname" },
            { key: "lastname", title: "vStudentLastname" },
            { key: "studentStatus", title: "vStudentStatus" }
        ];
    }
    // stubs generated for view element events
    StudentsComponent.prototype.viewStudentDetails = function () {
        this._router.navigate(['/studentDetails', { studentBinding: JSON.stringify(this.selectedStudentBinding) }]);
    };
    // stubs for data service calls for data bindings
    StudentsComponent.prototype.getStudentBinding = function () {
        var _this = this;
        // PROTECTED REGION ID _lqgMcIXWEeaLl5C1A6b47w.getStudentBinding ENABLED START
        this._dataService.getStudents().then(function (students) { return _this.studentBinding = students; });
        // PROTECTED REGION END
    };
    StudentsComponent.prototype.onSelect = function (el) {
        if (this.selectedStudentBinding === el) {
            this.selectedStudentBinding = undefined;
            this.isSelectedStudentBinding = false;
        }
        else {
            this.selectedStudentBinding = el;
            this.isSelectedStudentBinding = true;
        }
    };
    // called when search filter is updated
    StudentsComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    // called when component is initiated			
    StudentsComponent.prototype.ngOnInit = function () {
        // Check authentication requirements, if empty, no authentication requirements for this component
        this._authenticationService.checkPrivilegesIncludeOne([{ role: 'staff' }]);
        // Call methods for filling data binding
        this.getStudentBinding();
        // PROTECTED REGION ID _4sXwUIXVEeace_i7152fMw.ngOnInit ENABLED START
        // PROTECTED REGION END
    };
    StudentsComponent = __decorate([
        core_1.Component({
            selector: 'students',
            templateUrl: 'app/views/students.component.html',
            providers: [logger_service_1.LoggerService, displayProperties_service_1.DisplayPropertiesService, authentication_service_1.AuthenticationService, data_service_1.DataService],
            directives: [common_1.NgClass, search_component_1.SearchComponent],
            pipes: [studentList_pipe_1.StudentListFilter,]
        }), 
        __metadata('design:paramtypes', [router_2.Router, router_1.ActivatedRoute, logger_service_1.LoggerService, authentication_service_1.AuthenticationService, data_service_1.DataService, displayProperties_service_1.DisplayPropertiesService, resource_service_1.ResourceService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map