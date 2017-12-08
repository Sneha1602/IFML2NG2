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
var profile_1 = require('../helper/profile');
var displayProperties_1 = require('../helper/displayProperties');
var platform_profile_1 = require('../helper/platform.profile');
var user_profile_1 = require('../helper/user.profile');
var state_profile_1 = require('../helper/state.profile');
var environment_profile_1 = require('../helper/environment.profile');
var nools_service_1 = require('../services/nools.service');
var ProfileService = (function () {
    function ProfileService(flow) {
        this.flow = flow;
        // check if profile configuration ist already saved in local storage
        if (localStorage.getItem('profile') != null) {
            // parse profile configuration string to profile object
            var temp;
            temp = JSON.parse(localStorage.getItem('profile'));
            temp.user.__proto__ = user_profile_1.UserProfile.prototype;
            temp.environment.__proto__ = environment_profile_1.EnvironmentProfile.prototype;
            temp.platform.__proto__ = platform_profile_1.PlatformProfile.prototype;
            //temp.state.__proto__ = StateProfile.prototype;
            temp.displayProperties.__proto__ = displayProperties_1.DisplayProperties.prototype;
            temp.__proto__ = profile_1.Profile.prototype;
            this.profile = temp;
            this.profile.state = new state_profile_1.StateProfile();
        }
        else {
            // initialize new profile configuration
            this.profile = new profile_1.Profile();
            this.md = new MobileDetect(window.navigator.userAgent);
            if (this.md.mobile() == null) {
                this.profile.setPlatformType("desktop");
            }
            else {
                this.profile.setPlatformType("mobile");
            }
            // save profile configuration string to local storage
            localStorage.setItem('profile', this.profile.toJSON());
        }
        this.session = this.flow.getSession();
        this.onModified();
    }
    ProfileService.prototype.setUserRole = function (v) {
        this.profile.getUser().setUserRole(v);
        localStorage.setItem('profile', this.profile.toJSON());
        this.onModified();
    };
    ProfileService.prototype.setLanguage = function (v) {
        this.profile.getUser().setLanguage(v);
        localStorage.setItem('profile', this.profile.toJSON());
        this.onModified();
    };
    ProfileService.prototype.setBrightnessLevel = function (v) {
        this.profile.getEnvironment().setBrightnessLevel(v);
        localStorage.setItem('profile', this.profile.toJSON());
        this.onModified();
    };
    ProfileService.prototype.setComputerSelfEfficiacy = function (v) {
        this.profile.getUser().setComputerSelfEfficiacy(v);
        localStorage.setItem('profile', this.profile.toJSON());
        this.onModified();
    };
    ProfileService.prototype.setWeakVision = function (v) {
        this.profile.getUser().setWeakVision(v);
        localStorage.setItem('profile', this.profile.toJSON());
        this.onModified();
    };
    ProfileService.prototype.setIsAdmin = function (v) {
        this.profile.getUser().setIsAdmin(v);
        localStorage.setItem('profile', this.profile.toJSON());
        this.onModified();
    };
    ProfileService.prototype.setPlatformType = function (v) {
        this.profile.getPlatform().setPlatformType(v);
        var test = JSON.stringify(this.profile);
        localStorage.setItem('profile', this.profile.toJSON());
        this.onModified();
    };
    ProfileService.prototype.getProfile = function () {
        return this.profile;
    };
    ProfileService.prototype.onModified = function () {
        //now fire the rules
        this.session.assert(this.getProfile());
        this.session.match(function (err) {
            if (err) {
                console.error(err.stack);
            }
            else {
                console.log("done");
            }
        });
    };
    ProfileService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [nools_service_1.NoolsService])
    ], ProfileService);
    return ProfileService;
}());
exports.ProfileService = ProfileService;
//# sourceMappingURL=profile.service.js.map