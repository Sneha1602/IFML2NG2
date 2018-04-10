"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// platform context
var PlatformProfile = /** @class */ (function () {
    function PlatformProfile(type) {
        this.type = type;
    }
    ;
    // set platform type to 'mobile' or 'desktop'
    PlatformProfile.prototype.setPlatformType = function (type) {
        this.type = type;
    };
    ;
    // get platform type
    PlatformProfile.prototype.getPlatformType = function () {
        return this.type;
    };
    ;
    return PlatformProfile;
}());
exports.PlatformProfile = PlatformProfile;
//# sourceMappingURL=platform.profile.js.map