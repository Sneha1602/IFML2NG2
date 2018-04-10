"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
// Import generated Nools Service
var nools_service_1 = require("./services/nools.service");
var contextController_service_1 = require("./context/contextController.service");
// Service Imports
var logger_service_1 = require("./services/logger.service");
var authentication_service_1 = require("./services/authentication.service");
var data_service_1 = require("./services/data.service");
var displayProperties_service_1 = require("./services/displayProperties.service");
var resource_service_1 = require("./services/resource.service");
var userData_service_1 = require("./context/providers/userData.service");
var faceDetection_service_1 = require("./context/providers/faceDetection.service");
var deviceAPI_service_1 = require("./context/providers/deviceAPI.service");
var geocoding_service_1 = require("./context/providers/geocoding.service");
var appState_service_1 = require("./context/providers/appState.service");
// PROTECTED REGION ID imports ENABLED START
// PROTECTED REGION END
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    nools_service_1.NoolsService,
    contextController_service_1.ContextControllerService,
    logger_service_1.LoggerService,
    authentication_service_1.AuthenticationService,
    data_service_1.DataService,
    displayProperties_service_1.DisplayPropertiesService,
    resource_service_1.ResourceService,
    userData_service_1.UserDataService,
    faceDetection_service_1.FaceDetectionService,
    deviceAPI_service_1.DeviceAPIService,
    geocoding_service_1.GeocodingService,
    appState_service_1.AppStateService,
]);
//# sourceMappingURL=main.js.map