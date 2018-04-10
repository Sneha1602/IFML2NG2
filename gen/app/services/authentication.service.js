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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
//import { ProfileService } from '../services/profile.service';
var User = /** @class */ (function () {
    function User(email, password, role, id, firstname, lastname, colorBlind) {
        this.email = email;
        this.password = password;
        this.role = role;
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.colorBlind = colorBlind;
    }
    return User;
}());
exports.User = User;
var users = [
    new User('admin', 'admin', 'staff', '', 'Admin', 'User', true),
    new User('hstahl', 'hstahl', 'student', '6701277', 'Hagen', 'Stahl', false),
    new User('rich', 'rich', 'student', '1231233', 'Richard', 'Roe', false)
];
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(_router
    //,private profile: ProfileService
    ) {
        this._router = _router;
        this.isLoggedIn = false;
    }
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('user');
        this.isLoggedIn = false;
        localStorage.setItem('userRole', 'none');
        this._router.navigate(['login']);
    };
    AuthenticationService.prototype.login = function (username, pw) {
        var authenticatedUser = users.find(function (u) { return u.email === username; });
        if (authenticatedUser && authenticatedUser.password === pw) {
            localStorage.setItem('user', JSON.stringify(authenticatedUser));
            this._router.navigate(['login']);
            this.isLoggedIn = true;
            localStorage.setItem('userRole', authenticatedUser.role);
            return true;
        }
        return false;
    };
    AuthenticationService.prototype.getName = function () {
        if (localStorage.getItem('user') !== null) {
            return JSON.parse(localStorage.getItem("user")).firstname + " " + JSON.parse(localStorage.getItem('user')).lastname;
        }
    };
    AuthenticationService.prototype.getId = function () {
        if (localStorage.getItem('user') !== null) {
            return JSON.parse(localStorage.getItem("user")).id;
        }
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem('user') === null) {
            this._router.navigate(['login']);
        }
    };
    AuthenticationService.prototype.checkStaffPrivileges = function () {
        var user;
        user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            this._router.navigate(['login']);
        }
        else {
            if (user.role !== "staff") {
                this._router.navigate(['/']);
            }
        }
    };
    AuthenticationService.prototype.checkPrivilegesIncludeOne = function (roleArray) {
        var user;
        user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            this._router.navigate(['/login']);
        }
        else {
            var result = $.grep(roleArray, function (e) { return e.role == user.role; });
            if (result.length == 0) {
                this._router.navigate(['/login']);
            }
        }
    };
    AuthenticationService.prototype.boolCheckPrivilegesIncludeOne = function (roleArray) {
        var user;
        user = JSON.parse(localStorage.getItem('user'));
        if (user === null) {
            return false;
        }
        else {
            var result = $.grep(roleArray, function (e) { return e.role == user.role; });
            if (result.length == 0) {
                return false;
            }
            else {
                return true;
            }
        }
    };
    AuthenticationService.prototype.isStaff = function () {
        if (localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem("user")).role === 'staff') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.isStudent = function () {
        if (localStorage.getItem('user') !== null && JSON.parse(localStorage.getItem('user')).role === 'student') {
            return true;
        }
        else {
            return false;
        }
    };
    AuthenticationService.prototype.getColorBlind = function () {
        if (localStorage.getItem('user') !== null) {
            return JSON.parse(localStorage.getItem("user")).colorBlind;
        }
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router
            //,private profile: ProfileService
        ])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map