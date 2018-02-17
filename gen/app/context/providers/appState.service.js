// Generated by ContextProviderGenerator
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
// Contains Objects that push new data to the Context Controller
// Code for API/Library access has to be inserted in the file:"appState.service.ts" 
// in the folder: static/app/context/providers/
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
// PROTECTED REGION ID general ENABLED START
// PROTECTED REGION END
var AppStateService = (function () {
    // PROTECTED REGION ID appState ENABLED START
    // PROTECTED REGION END
    function AppStateService() {
        // PROTECTED REGION ID constructor ENABLED START
        this._moodCheckedSubject = new Rx_1.BehaviorSubject(false);
        this.moodCheckedSubject = this._moodCheckedSubject.asObservable();
        this._outsideCheckedSubject = new Rx_1.BehaviorSubject(false);
        this.outsideCheckedSubject = this._outsideCheckedSubject.asObservable();
        this._userRoleSubject = new Rx_1.BehaviorSubject("init");
        this.userRoleSubject = this._userRoleSubject.asObservable();
        this.moodChecked = false;
        this.outsideChecked = false;
        this.userRole = "none";
        // PROTECTED REGION END
    }
    AppStateService.prototype.getMoodChecked = function () {
        // PROTECTED REGION ID moodChecked ENABLED START
        // PROTECTED REGION END
        this._moodCheckedSubject.next(this.moodChecked);
    };
    AppStateService.prototype.getOutsideChecked = function () {
        // PROTECTED REGION ID outsideChecked ENABLED START
        // PROTECTED REGION END
        this._outsideCheckedSubject.next(this.outsideChecked);
    };
    AppStateService.prototype.getUserRole = function () {
        // PROTECTED REGION ID userRole ENABLED START
        if (localStorage.getItem('userRole') != null) {
            this.userRole = localStorage.getItem('userRole');
        }
        // PROTECTED REGION END
        this._userRoleSubject.next(this.userRole);
    };
    AppStateService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppStateService);
    return AppStateService;
}());
exports.AppStateService = AppStateService;
//# sourceMappingURL=appState.service.js.map