"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var searchBooks_component_1 = require("./views/searchBooks.component");
var login_component_1 = require("./views/login.component");
var home_component_1 = require("./views/home.component");
var lendingForm_component_1 = require("./views/lendingForm.component");
var lentBooks_component_1 = require("./views/lentBooks.component");
var students_component_1 = require("./views/students.component");
var studentDetails_component_1 = require("./views/studentDetails.component");
var bookReservations_component_1 = require("./views/bookReservations.component");
var helpWindow_component_1 = require("./views/helpWindow.component");
var administration_component_1 = require("./views/administration.component");
exports.routes = [
    {
        path: 'searchBooks',
        component: searchBooks_component_1.SearchBooksComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'lendingForm',
        component: lendingForm_component_1.LendingFormComponent
    },
    {
        path: 'lentBooks',
        component: lentBooks_component_1.LentBooksComponent
    },
    {
        path: 'students',
        component: students_component_1.StudentsComponent
    },
    {
        path: 'studentDetails',
        component: studentDetails_component_1.StudentDetailsComponent
    },
    {
        path: 'bookReservations',
        component: bookReservations_component_1.BookReservationsComponent
    },
    {
        path: 'helpWindow',
        component: helpWindow_component_1.HelpWindowComponent
    },
    {
        path: 'administration',
        component: administration_component_1.AdministrationComponent
    },
    {
        path: '',
        redirectTo: '/searchBooks',
        pathMatch: 'full'
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map