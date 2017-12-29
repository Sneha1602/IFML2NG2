"use strict";
// environment context
var EnvironmentProfile = (function () {
    function EnvironmentProfile(brightnessLevel) {
        this.brightnessLevel = brightnessLevel;
    }
    ;
    // set brightness on a scale from 0 to 100;
    EnvironmentProfile.prototype.setBrightnessLevel = function (brightness) {
        if (brightness > 100) {
            this.brightnessLevel = 100;
        }
        else if (brightness < 0) {
            this.brightnessLevel = 0;
        }
        else {
            this.brightnessLevel = brightness;
        }
    };
    ;
    // returns brightness level
    EnvironmentProfile.prototype.getBrightnessLevel = function () {
        return this.brightnessLevel;
    };
    return EnvironmentProfile;
}());
exports.EnvironmentProfile = EnvironmentProfile;
//# sourceMappingURL=environment.profile.js.map