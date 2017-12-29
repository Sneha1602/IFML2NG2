"use strict";
var DisplayProperties = (function () {
    function DisplayProperties() {
        this.type = '';
        this.role = '';
        this.clearNavigation();
        //General Layout
        this.headerBarClass = '';
        this.routerOutletClass = '';
        this.hideOnMobile = '';
        this.hideOnDesktop = '';
        //tables
        this.tableClass = 'table table-striped table-hover table-condensed';
        //navigation
        this.navbarContainerClass = '';
        this.navbarWrapperClass = '';
        this.navbarHeaderClass = '';
        this.navbarCollapseClass = '';
        this.navbarItemListClass = '';
        //search
        this.searchInputGroupClass = '';
        //boolean
        this.isMobile = false;
        this.isAdvancedUser = false;
    }
    ;
    DisplayProperties.prototype.setProperty = function (prop, v) {
        this[prop] = v;
    };
    DisplayProperties.prototype.setType = function (v) {
        this.type = v;
    };
    DisplayProperties.prototype.setRole = function (v) {
        this.role = v;
    };
    DisplayProperties.prototype.setTableClass = function (v) {
        this.tableClass = v;
    };
    // set navigation for user
    DisplayProperties.prototype.setNavigation = function (nav) {
        this.navigation = nav;
    };
    // Get navigation for user
    DisplayProperties.prototype.getNavigation = function () {
        return this.navigation;
    };
    // clear navigation object
    DisplayProperties.prototype.clearNavigation = function () {
        this.navigation = [];
    };
    // push new Navigation item to navigation
    DisplayProperties.prototype.pushNavigation = function (newItem) {
        this.temp = this.navigation.filter(function (element) {
            return element.path == newItem.path && element.key == newItem.key;
        });
        if (this.temp.length == 0) {
            return this.navigation.push(newItem);
        }
        ;
    };
    // remove Navigation path from navigation
    DisplayProperties.prototype.removeNavigationPath = function (path) {
        if (this.navigation != undefined) {
            this.navigation = this.navigation.filter(function (element) {
                return element.path !== path;
            });
        }
        ;
    };
    return DisplayProperties;
}());
exports.DisplayProperties = DisplayProperties;
//# sourceMappingURL=displayProperties.js.map