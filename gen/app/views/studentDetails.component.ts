//
// Created by IFML2NG2 on 2017/12/29 16:25:12
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';


// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports

@Component({
	selector: 'studentDetails',
	templateUrl: 'app/views/studentDetails.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass  ],
	pipes: []
})

export class StudentDetailsComponent {
	//Generate variables for parameters and bindings
	selectedStudentBinding:  any;
	isSelectedStudentBinding:  boolean;
	// PROTECTED REGION ID _oMKJgIXZEea82rBnn6BioA.studentDetails ENABLED START
	// PROTECTED REGION END

	constructor(
		private _router: Router,
		private _route: ActivatedRoute
,		private _loggerService: LoggerService,
				private _authenticationService: AuthenticationService,
				private _dataService: DataService,
				private _displayPropertiesService: DisplayPropertiesService,
				private _resourceService: ResourceService
		){
	}
		
	// stubs generated for view element events

	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		this._authenticationService.checkPrivilegesIncludeOne([{role:'staff'}]);
		
		
		// Incoming Navigation Flows with Parameter Binding
		this._route.params.subscribe(params => {
			if(params['studentBinding'] != undefined){
				this.selectedStudentBinding = JSON.parse(decodeURI(params['studentBinding']));
			}
		});
		
		// PROTECTED REGION ID _oMKJgIXZEea82rBnn6BioA.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
