"use strict";
// user context
var UserProfile = (function () {
    function UserProfile(r, w, c) {
        this.role = r;
        this.weakVision = w;
        this.computerSelfEfficiacy = c;
        this.isAdmin = false;
        this.language = 'enus';
        this.setAdminChecked(false);
        this.setLangChecked(false);
        this.setRoleChecked(false);
        this.setWeakVisionChecked(false);
        this.setComputerSelfEfficiacyChecked(false);
    }
    ;
    // Set role of user
    UserProfile.prototype.setUserRole = function (role) {
        this.role = role;
        this.setRoleChecked(false);
    };
    ;
    // True if user has weak eyesight, false otherwise
    UserProfile.prototype.setWeakVision = function (hasWeakVision) {
        this.weakVision = hasWeakVision;
        this.setWeakVisionChecked(false);
    };
    ;
    // True if user has high computer self-efficiacy, false otherwise
    UserProfile.prototype.setComputerSelfEfficiacy = function (computerSelfEfficiacy) {
        this.computerSelfEfficiacy = computerSelfEfficiacy;
        this.setComputerSelfEfficiacyChecked(false);
    };
    ;
    // True if user has admin privileges
    UserProfile.prototype.setIsAdmin = function (v) {
        this.isAdmin = v;
        this.setAdminChecked(false);
    };
    // Set key of user language
    UserProfile.prototype.setLanguage = function (v) {
        this.language = v;
        this.setAdminChecked(false);
    };
    // Get role of user
    UserProfile.prototype.getUserRole = function () {
        return this.role;
    };
    ;
    // Get if user has weak vision
    UserProfile.prototype.hasWeakVision = function () {
        return this.weakVision;
    };
    ;
    // Get if user has admin rights
    UserProfile.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    // Get if user has high computer self-efficiacy
    UserProfile.prototype.hasHighComputerSelfEfficiacy = function () {
        return this.computerSelfEfficiacy;
    };
    ;
    // Get language key
    UserProfile.prototype.getLanguage = function () {
        return this.language;
    };
    // Getters and Setters for flags that indicate if rule was already fired once
    UserProfile.prototype.setRoleChecked = function (v) {
        this.roleChecked = v;
    };
    ;
    UserProfile.prototype.setWeakVisionChecked = function (v) {
        this.weakVisionChecked = v;
    };
    ;
    UserProfile.prototype.setAdminChecked = function (v) {
        this.adminChecked = v;
    };
    ;
    UserProfile.prototype.setComputerSelfEfficiacyChecked = function (v) {
        this.computerSelfEfficiacyChecked = v;
    };
    ;
    UserProfile.prototype.setLangChecked = function (v) {
        this.adminChecked = v;
    };
    ;
    UserProfile.prototype.getRoleChecked = function () {
        return this.roleChecked;
    };
    ;
    UserProfile.prototype.getWeakVisionChecked = function () {
        return this.weakVisionChecked;
    };
    ;
    UserProfile.prototype.getAdminChecked = function () {
        return this.adminChecked;
    };
    ;
    UserProfile.prototype.getComputerSelfEfficiacyChecked = function () {
        return this.computerSelfEfficiacyChecked;
    };
    ;
    UserProfile.prototype.getLangChecked = function () {
        return this.adminChecked;
    };
    ;
    return UserProfile;
}());
exports.UserProfile = UserProfile;
//# sourceMappingURL=user.profile.js.map