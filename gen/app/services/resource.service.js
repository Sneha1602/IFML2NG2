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
var lowResImages_1 = require('../data/lowResImages');
var highResImages_1 = require('../data/highResImages');
var lang_EN_US_1 = require('../data/lang_EN_US');
var lang_DE_DE_1 = require('../data/lang_DE_DE');
var lang_IT_IT_1 = require('../data/lang_IT_IT');
var ResourceService = (function () {
    function ResourceService() {
        this.setImageFile("low");
        this.setLangFile("enus");
    }
    ResourceService.prototype.setImageFile = function (key) {
        if (key === 'low') {
            this.images = lowResImages_1.LowResImages;
        }
        else {
            this.images = highResImages_1.HighResImages;
        }
    };
    ResourceService.prototype.setLangFile = function (key) {
        if (key === "enus") {
            this.langStrings = lang_EN_US_1.lang_EN_US;
        }
        else if (key === "dede") {
            this.langStrings = lang_DE_DE_1.lang_DE_DE;
        }
        else if (key === "itit") {
            this.langStrings = lang_IT_IT_1.lang_IT_IT;
        }
    };
    ResourceService.prototype.getImagePath = function (key) {
        if (this.images != undefined && this.images.length > 0) {
            var image;
            image = this.images.find(function (s) { return s.key == key; });
            return image.path;
        }
        else {
            return undefined;
        }
    };
    ResourceService.prototype.getLangString = function (key) {
        if (this.langStrings != undefined && this.langStrings.length > 0) {
            var langString;
            langString = this.langStrings.find(function (s) {
                return s.key == key;
            });
            //console.log(key);
            if (langString != undefined) {
                return langString.text;
            }
        }
        return key;
    };
    ResourceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ResourceService);
    return ResourceService;
}());
exports.ResourceService = ResourceService;
//# sourceMappingURL=resource.service.js.map