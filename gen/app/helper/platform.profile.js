"use strict";
// platform context
var PlatformProfile = (function () {
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