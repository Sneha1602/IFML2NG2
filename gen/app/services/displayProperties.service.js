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
var core_1 = require('@angular/core');
var displayProperties_1 = require('../helper/displayProperties');
var DisplayPropertiesService = (function () {
    function DisplayPropertiesService() {
        // check if profile configuration ist already saved in local storage
        if (localStorage.getItem('displayProperties') != null) {
            // parse profile configuration string to profile object
            var temp;
            temp = JSON.parse(localStorage.getItem('displayProperties'));
            //temp.state.__proto__ = StateProfile.prototype;
            temp.__proto__ = displayProperties_1.DisplayProperties.prototype;
            this.displayProperties = temp;
        }
        else {
            // initialize new profile configuration
            this.displayProperties = new displayProperties_1.DisplayProperties();
            // save profile configuration string to local storage
            localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
            this.displayProperties = new displayProperties_1.DisplayProperties();
        }
    }
    DisplayPropertiesService.prototype.getDisplayProperties = function () {
        return this.displayProperties;
    };
    DisplayPropertiesService.prototype.setProperty = function (prop, v) {
        this.displayProperties.setProperty(prop, v);
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    DisplayPropertiesService.prototype.getProperty = function (prop) {
        return this.displayProperties[prop];
    };
    DisplayPropertiesService.prototype.setType = function (v) {
        this.displayProperties.setType(v);
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    DisplayPropertiesService.prototype.setRole = function (v) {
        this.displayProperties.setRole(v);
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    DisplayPropertiesService.prototype.setTableClass = function (v) {
        this.displayProperties.setTableClass(v);
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    // set navigation for user
    DisplayPropertiesService.prototype.setNavigation = function (nav) {
        this.displayProperties.setNavigation(nav);
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    // Get navigation for user
    DisplayPropertiesService.prototype.getNavigation = function () {
        this.displayProperties.getNavigation();
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    // clear navigation object
    DisplayPropertiesService.prototype.clearNavigation = function () {
        this.displayProperties.clearNavigation();
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    // push new Navigation item to navigation
    DisplayPropertiesService.prototype.pushNavigation = function (newItem) {
        this.displayProperties.pushNavigation(newItem);
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    // remove Navigation path from navigation
    DisplayPropertiesService.prototype.removeNavigationPath = function (path) {
        this.displayProperties.removeNavigationPath(path);
        localStorage.setItem('displayProperties', JSON.stringify(this.displayProperties));
    };
    DisplayPropertiesService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DisplayPropertiesService);
    return DisplayPropertiesService;
}());
exports.DisplayPropertiesService = DisplayPropertiesService;
//# sourceMappingURL=displayProperties.service.js.map