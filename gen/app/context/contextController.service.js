"use strict";
// Generated by ContextControllerGenerator
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
// Is the central service of the Context Manager
// It initializes the context providers and refreshes the context profiles with new data
// Timer lengths can be adjusted above the constructor
// For permanent changes please refer to the generator file "IFML2NG2/src/imfl.generator.ng2/ifml.generator...context/ContextControllerGenerator.xtend"
var core_1 = require("@angular/core");
var Rx_1 = require("rxjs/Rx");
var Rx_2 = require("rxjs/Rx");
var profile_1 = require("./profile/profile");
var nools_service_1 = require("../services/nools.service");
var userData_service_1 = require("./providers/userData.service");
var faceDetection_service_1 = require("./providers/faceDetection.service");
var deviceAPI_service_1 = require("./providers/deviceAPI.service");
var geocoding_service_1 = require("./providers/geocoding.service");
var appState_service_1 = require("./providers/appState.service");
var ContextControllerService = /** @class */ (function () {
    function ContextControllerService(flow, userDataService, faceDetectionService, deviceAPIService, geocodingService, appStateService) {
        var _this = this;
        this.flow = flow;
        this.userDataService = userDataService;
        this.faceDetectionService = faceDetectionService;
        this.deviceAPIService = deviceAPIService;
        this.geocodingService = geocodingService;
        this.appStateService = appStateService;
        this.active = true;
        this.changed = false;
        this._changedSubject = new Rx_2.BehaviorSubject(false);
        this.changedSubject = this._changedSubject.asObservable();
        this.timeInit = 0; //initialization for the Timer
        this.timeFast = 750; //update Time for the Fast Update in ms
        this.timeSlow = 8000; //update Time for the Slow Update in ms
        this.profile = new profile_1.Profile();
        this.flow.setProfile(this.profile);
        this.session = this.flow.getSession();
        this.age = this.faceDetectionService.ageSubject.subscribe(function (age) {
            if (_this.active) {
                _this.profile.getUser().setAge(age);
                _this.onModified();
            }
        });
        this.gender = this.faceDetectionService.genderSubject.subscribe(function (gender) {
            if (_this.active) {
                _this.profile.getUser().setGender(gender);
                _this.onModified();
            }
        });
        this.mood = this.faceDetectionService.moodSubject.subscribe(function (mood) {
            if (_this.active) {
                _this.profile.getUser().setMood(mood);
                _this.onModified();
            }
        });
        this.faceDetected = this.faceDetectionService.faceDetectedSubject.subscribe(function (faceDetected) {
            if (_this.active) {
                _this.profile.getUser().setFaceDetected(faceDetected);
                _this.onModified();
            }
        });
        this.language = this.deviceAPIService.languageSubject.subscribe(function (language) {
            if (_this.active) {
                _this.profile.getUser().setLanguage(language);
                _this.onModified();
            }
        });
        this.ambientLight = this.deviceAPIService.ambientLightSubject.subscribe(function (ambientLight) {
            if (_this.active) {
                _this.profile.getEnvironment().setAmbientLight(ambientLight);
                _this.onModified();
            }
        });
        this.movement = this.deviceAPIService.movementSubject.subscribe(function (movement) {
            if (_this.active) {
                _this.profile.getEnvironment().setMovement(movement);
                _this.onModified();
            }
        });
        this.location = this.geocodingService.locationSubject.subscribe(function (location) {
            if (_this.active) {
                _this.profile.getEnvironment().setLocation(location);
                _this.onModified();
            }
        });
        this.weather = this.geocodingService.weatherSubject.subscribe(function (weather) {
            if (_this.active) {
                _this.profile.getEnvironment().setWeather(weather);
                _this.onModified();
            }
        });
        this.deviceType = this.deviceAPIService.deviceTypeSubject.subscribe(function (deviceType) {
            if (_this.active) {
                _this.profile.getPlatform().setDeviceType(deviceType);
                _this.onModified();
            }
        });
        this.moodChecked = this.appStateService.moodCheckedSubject.subscribe(function (moodChecked) {
            if (_this.active) {
                _this.profile.getApp().setMoodChecked(moodChecked);
                _this.onModified();
            }
        });
        this.outsideChecked = this.appStateService.outsideCheckedSubject.subscribe(function (outsideChecked) {
            if (_this.active) {
                _this.profile.getApp().setOutsideChecked(outsideChecked);
                _this.onModified();
            }
        });
        this.userRole = this.appStateService.userRoleSubject.subscribe(function (userRole) {
            if (_this.active) {
                _this.profile.getApp().setUserRole(userRole);
                _this.onModified();
            }
        });
        this.colorBlind = this.appStateService.colorBlindSubject.subscribe(function (colorBlind) {
            if (_this.active) {
                _this.profile.getApp().setColorBlind(colorBlind);
                _this.onModified();
            }
        });
        //Manager checks APIs fast
        var timerFast = Rx_1.Observable.timer(this.timeInit, this.timeFast);
        timerFast.subscribe(function (t) {
            //console.log(t);
            if (_this.active) {
                _this.fast();
            }
        });
        //Manager checks APIs slow
        var timerSlow = Rx_1.Observable.timer(this.timeInit, this.timeSlow);
        timerSlow.subscribe(function (t) {
            //console.log(t);
            if (_this.active) {
                _this.slow();
            }
        });
    }
    ContextControllerService.prototype.fast = function () {
        this.faceDetectionService.getAge();
        this.faceDetectionService.getGender();
        this.faceDetectionService.getMood();
        this.faceDetectionService.getFaceDetected();
        this.deviceAPIService.getAmbientLight();
        this.deviceAPIService.getMovement();
        this.appStateService.getUserRole();
    };
    ContextControllerService.prototype.slow = function () {
        this.deviceAPIService.getLanguage();
        this.geocodingService.getLocation();
        this.geocodingService.getWeather();
        this.deviceAPIService.getDeviceType();
        this.appStateService.getMoodChecked();
        this.appStateService.getColorBlind();
    };
    //returns Profile instance
    ContextControllerService.prototype.getProfile = function () {
        return this.profile;
    };
    ContextControllerService.prototype.onModified = function () {
        //now fire the rules
        this.session.assert(this.getProfile());
        this.session.match(function (err) {
            if (err) {
                console.error(err.stack);
            }
        });
        this.changed = true;
        this._changedSubject.next(this.changed);
    };
    ContextControllerService.prototype.setActivation = function (status) {
        this.active = status;
    };
    ContextControllerService.prototype.setNotChanged = function () {
        this.changed = false;
    };
    ContextControllerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nools_service_1.NoolsService,
            userData_service_1.UserDataService,
            faceDetection_service_1.FaceDetectionService,
            deviceAPI_service_1.DeviceAPIService,
            geocoding_service_1.GeocodingService,
            appState_service_1.AppStateService])
    ], ContextControllerService);
    return ContextControllerService;
}());
exports.ContextControllerService = ContextControllerService;
//# sourceMappingURL=contextController.service.js.map