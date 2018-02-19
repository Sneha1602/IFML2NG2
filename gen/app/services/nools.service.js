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
var router_1 = require('@angular/router');
var profile_1 = require('../context/profile/profile');
var resource_service_1 = require('./resource.service');
var displayProperties_service_1 = require('../services/displayProperties.service');
var logger_service_1 = require('./logger.service');
var NoolsService = (function () {
    function NoolsService(dcl, injector, _Router, _LoggerService, _ResourceService, _DisplayPropertiesService) {
        this.dcl = dcl;
        this.injector = injector;
        this._Router = _Router;
        this._LoggerService = _LoggerService;
        this._ResourceService = _ResourceService;
        this._DisplayPropertiesService = _DisplayPropertiesService;
        this.flow = nools.flow("Profile Evaluation", function (flow) {
            flow.rule("Lang de-de", { salience: 1 }, [profile_1.Profile, "m", "m.getUser().getLanguage() == 'dede'"], function (facts) {
                _ResourceService.setLangFile("dede");
            });
            flow.rule("User angry", { salience: 2 }, [profile_1.Profile, "m", "(m.getUser().getMood() == 1 && m.getApp().getMoodChecked() == false)"], function (facts) {
                facts.m.getApp().setMoodChecked(true);
                _DisplayPropertiesService.pushNavigation({ path: '/helpWindow', key: 'Service Point' });
            });
            flow.rule("User not angry", { salience: 2 }, [profile_1.Profile, "m", "(m.getUser().getMood() != 1 && m.getApp().getMoodChecked() == false)"], function (facts) {
                facts.m.getApp().setMoodChecked(true);
                _DisplayPropertiesService.removeNavigationPath('/helpWindow');
            });
            flow.rule("Recommend Learn Location", { salience: 3 }, [profile_1.Profile, "m", "(m.getEnvironment().getLocation() == 'Kernstadt, Paderborn, Deutschland' && m.getEnvironment().getWeather() != 1)"], function (facts) {
                $("#_MjqscFW_Eee_i6NdnvfQJg").show();
                $("#_jZkNwIC2Eea2S59Os6LSKA").hide();
                _Router.navigate(['/login']);
            });
            flow.rule("Don't Recommend Learn Location", { salience: 3 }, [profile_1.Profile, "m", "m.getEnvironment().getLocation() != 'Kernstadt, Paderborn, Deutschland'"], function (facts) {
                $("#_MjqscFW_Eee_i6NdnvfQJg").hide();
                $("#_jZkNwIC2Eea2S59Os6LSKA").show();
            });
            flow.rule("Movement High", { salience: 2 }, [profile_1.Profile, "m", "m.getEnvironment().getMovement() >= 1"], function (facts) {
                $('#_gNqwUIXWEeaLl5C1A6b47w').removeClass('sbig').removeClass('ssmall');
                $('#_gNqwUIXWEeaLl5C1A6b47w').addClass('ssmall');
                $('#_gNqwUIXWEeaLl5C1A6b47w').removeClass('cblue').removeClass('cred').removeClass('cgreen').removeClass('cgrey');
                $('#_gNqwUIXWEeaLl5C1A6b47w').addClass('cred');
            });
            flow.rule("Movement Low", { salience: 2 }, [profile_1.Profile, "m", "m.getEnvironment().getMovement() < 1"], function (facts) {
                $('#_gNqwUIXWEeaLl5C1A6b47w').removeClass('cblue').removeClass('cred').removeClass('cgreen').removeClass('cgrey');
                $('#_gNqwUIXWEeaLl5C1A6b47w').addClass('cgreen');
                $('#_gNqwUIXWEeaLl5C1A6b47w').removeClass('sbig').removeClass('ssmall');
                $('#_gNqwUIXWEeaLl5C1A6b47w').addClass('sbig');
                $('#_LCX6cIXaEea82rBnn6BioA').removeClass('dblue').removeClass('dred').removeClass('dgreen').removeClass('dgrey');
                $('#_LCX6cIXaEea82rBnn6BioA').addClass('dred');
            });
            flow.rule("Platform Desktop", { salience: 6 }, [profile_1.Profile, "m", "m.getPlatform().getDeviceType() == 'desktop'"], function (facts) {
                _DisplayPropertiesService.setProperty('headerBarClass', 'row backgroundSecondary divLine borderSecondary');
                _DisplayPropertiesService.setProperty('routerOutletClass', 'col-md-10');
                _DisplayPropertiesService.setProperty('hideOnMobile', '');
                _DisplayPropertiesService.setProperty('navbarContainerClass', 'sidebar-navbar col-md-2 backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarWrapperClass', 'sidebar-wrapper backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarHeaderClass', 'hideElement backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarCollapseClass', 'backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarItemListClass', 'sidebar-nav textPrimary backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('searchInputGroupClass', 'input-group col-md-6 col-md-offset-4 backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('isMobile', false);
            });
            flow.rule("Platform Mobile", { salience: 6 }, [profile_1.Profile, "m", "m.getPlatform().getDeviceType() == 'mobile'"], function (facts) {
                _DisplayPropertiesService.setProperty('headerBarClass', 'hideElement backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('routerOutletClass', 'col-md-12');
                _DisplayPropertiesService.setProperty('hideOnMobile', 'hideElement backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarContainerClass', 'sidebar-navbar col-md-2 backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarWrapperClass', 'container-fluid backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarHeaderClass', 'navbar-header backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarCollapseClass', 'navbar-collapse collapse backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('navbarItemListClass', 'nav navbar-nav backgroundSecondary textPrimary');
                _DisplayPropertiesService.setProperty('searchInputGroupClass', 'input-group backgroundSecondary borderSecondary');
                _DisplayPropertiesService.setProperty('isMobile', true);
            });
            flow.rule("Navigation Staff", { salience: 11 }, [profile_1.Profile, "m", "m.getApp().getUserRole() == 'staff'"], function (facts) {
                _DisplayPropertiesService.pushNavigation({ path: '/searchBooks', key: 'books' });
                _DisplayPropertiesService.pushNavigation({ path: '/students', key: 'students' });
                _DisplayPropertiesService.pushNavigation({ path: '/bookReservations', key: 'bookReservations' });
                _DisplayPropertiesService.pushNavigation({ path: '/lendingForm', key: 'lendingForm' });
                _DisplayPropertiesService.pushNavigation({ path: '/administration', key: 'administration' });
            });
            flow.rule("Navigation Student", { salience: 11 }, [profile_1.Profile, "m", "m.getApp().getUserRole() == 'student'"], function (facts) {
                _DisplayPropertiesService.pushNavigation({ path: '/lentBooks', key: 'lent' });
                _DisplayPropertiesService.pushNavigation({ path: '/searchBooks', key: 'books' });
            });
            flow.rule("Navigation Unregistered", { salience: 12 }, [profile_1.Profile, "m", "(m.getApp().getUserRole() != 'staff' && m.getApp().getUserRole() != 'student')"], function (facts) {
                _DisplayPropertiesService.clearNavigation();
            });
        });
    }
    NoolsService.prototype.getSession = function () {
        return this.flow.getSession();
    };
    NoolsService.prototype.setProfile = function (m) {
        this.m = m;
    };
    NoolsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.Injector, router_1.Router, logger_service_1.LoggerService, resource_service_1.ResourceService, displayProperties_service_1.DisplayPropertiesService])
    ], NoolsService);
    return NoolsService;
}());
exports.NoolsService = NoolsService;
//# sourceMappingURL=nools.service.js.map