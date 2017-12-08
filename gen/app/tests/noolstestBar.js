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
var authentication_service_1 = require('../services/authentication.service');
var contextController_service_1 = require('../context/contextController.service');
var Language_1 = require('../context/types/Language');
var Level_1 = require('../context/types/Level');
var Mood_1 = require('../context/types/Mood');
var Weather_1 = require('../context/types/Weather');
var NoolsTestBarComponent = (function () {
    //    private userWeakVision: boolean;
    //    private userSelfEfficiacy: string;
    function NoolsTestBarComponent(_service, _context) {
        var _this = this;
        this._service = _service;
        this._context = _context;
        this.active = true;
        this.profile = this._context.getProfile();
        this.change = this._context.changedSubject.subscribe(function (change) {
            _this.movement = Level_1.Level[_this.profile.getEnvironment().getMovement()];
            _this.faceDetected = _this.profile.getUser().getFaceDetected();
            _this.mood = Mood_1.Mood[_this.profile.getUser().getMood()];
            _this.age = _this.profile.getUser().getAge();
            _this.gender = _this.profile.getUser().getGender();
            _this.language = Language_1.Language[_this.profile.getUser().getLanguage()];
            _this.location = _this.profile.getEnvironment().getLocation();
            _this.deviceType = _this.profile.getPlatform().getDeviceType();
            _this.ambientLight = _this.profile.getEnvironment().getAmbientLight();
            _this.weather = Weather_1.Weather[_this.profile.getEnvironment().getWeather()];
            _this.userRole = _this.profile.getApp().getUserRole();
            _this.moodChecked = _this.profile.getApp().getMoodChecked();
            _this._context.setNotChanged();
        });
        //            this.userWeakVision = _profile.getProfile().getUser().hasWeakVision();
        //            this.userSelfEfficiacy = _profile.getProfile().getUser().hasHighComputerSelfEfficiacy();
    }
    NoolsTestBarComponent.prototype.logout = function () {
        this._service.logout();
    };
    NoolsTestBarComponent.prototype.setActivation = function () {
        this._context.setActivation(this.active);
    };
    NoolsTestBarComponent = __decorate([
        core_1.Component({
            selector: 'noolstestbar',
            template: "\n        <div class=\"container\" >\n            <div class=\"checkbox\">\n                <label><input type=\"checkbox\" [(ngModel)]=\"active\" (ngModelChange)=\"setActivation()\">Context Tracking</label>\n                <label><input type=\"checkbox\" [(ngModel)]=\"dashboard\">ToggleDashboard</label>\n                <a (click)=\"logout()\" href=\"\">Click Here to logout</a>\n            </div>\n        </div>\n        <div class=\"container-fluid\" [hidden]=\"!dashboard\">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <table class=\"table table-striped\">\n                        <th><h3>User</h3></th>\n                        <tr>\n                            <td>Face Detected:</td>\n                            <td>{{faceDetected}}</td> \n                        </tr>\n                        <tr>\n                            <td>Mood:</td>\n                            <td>{{mood}}</td> \n                        </tr>\n                        <tr>\n                            <td>Age:</td>\n                            <td>{{age}}</td> \n                        </tr>\n                        <tr>\n                            <td>Gender:</td>\n                            <td>{{gender}}</td> \n                        </tr>\n                    </table>\n                </div>\n                <div class=\"col-md-3\">\n                    <table class=\"table table-striped\">\n                        <th><h3>Platform</h3></th>\n                        <tr>\n                            <td>Device Type:</td>\n                            <td>{{deviceType}}</td>\n                        </tr>\n                    </table>\n                </div>\n                <div class=\"col-md-3\">\n                    <table class=\"table table-striped\">\n                        <th><h3>Environment</h3></th>\n                        <tr>\n                            <td>Movement:</td>\n                            <td>{{movement}}</td> \n                        </tr>\n                        <tr>\n                            <td>Location:</td>\n                            <td>{{location}}</td> \n                        </tr>\n                        <tr>\n                            <td>Weather:</td>\n                            <td>{{weather}}</td> \n                        </tr>\n                    </table>\n                </div>\n                <div class=\"col-md-3\">\n                    <table class=\"table table-striped\">\n                        <th><h3>App</h3></th>\n                        <tr>\n                            <td>User Role:</td>\n                            <td>{{userRole}}</td> \n                        </tr>\n                        <tr>\n                            <td>Mood Checked:</td>\n                            <td>{{moodChecked}}</td> \n                        </tr>\n                    </table>\n                </div>\n            </div>\n            <!--<h4>AmbientLight: {{ambientLight}}</h4>-->\n            <div id=\"affdex_elements\" style=\"width:640px;height:480px;\"></div>\n        </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, contextController_service_1.ContextControllerService])
    ], NoolsTestBarComponent);
    return NoolsTestBarComponent;
}());
exports.NoolsTestBarComponent = NoolsTestBarComponent;
//# sourceMappingURL=noolstestBar.js.map