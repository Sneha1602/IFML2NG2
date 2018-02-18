//
// Created by IFML2NG2 on 2018/02/18 01:27:02
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

// Search Component Imports
import { SearchComponent } from '../dynamic/search.component';
import { StudentListFilter } from '../helper/pipes/studentList.pipe';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports
import { Student } from '../data/student';

@Component({
	selector: 'students',
	templateUrl: 'app/views/students.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass ,SearchComponent ],
	pipes: [StudentListFilter,]
})

export class StudentsComponent {
	//Generate variables for parameters and bindings
	selectedStudentBinding:  any;
	isSelectedStudentBinding:  boolean;
	// variable for advanced search space
	advancedSearchSpace: Object;
	filterBy: String;
	// variable for list data binding
	studentBinding: Student[];
	vStudentId: any;
	vStudentFirstname: any;
	vStudentLastname: any;
	vStudentStatus: any;
	// PROTECTED REGION ID _4sXwUIXVEeace_i7152fMw.students ENABLED START
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
		// fill advanced search space
		this.advancedSearchSpace = [
		{key: "studentId", title: "vStudentId"},
		{key: "firstname", title: "vStudentFirstname"},
		{key: "lastname", title: "vStudentLastname"},
		{key: "studentStatus", title: "vStudentStatus"}
		];
	}
		
	// stubs generated for view element events
	viewStudentDetails(){
		this._router.navigate(['/studentDetails', {studentBinding: JSON.stringify(this.selectedStudentBinding)}]);
	}

	// stubs for data service calls for data bindings
	getStudentBinding(){
		// PROTECTED REGION ID _lqgMcIXWEeaLl5C1A6b47w.getStudentBinding ENABLED START
		this._dataService.getStudents().then(students => this.studentBinding = students);
		// PROTECTED REGION END
	}
	
	onSelect(el: Student){
		if(this.selectedStudentBinding === el){
			this.selectedStudentBinding = undefined;
			this.isSelectedStudentBinding = false;
		}else{
			this.selectedStudentBinding = el;
			this.isSelectedStudentBinding = true;
		}
	}
	
	// called when search filter is updated
	filterUpdated(val: Object){
		this.filterBy = JSON.stringify(val);
	}
	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		this._authenticationService.checkPrivilegesIncludeOne([{role:'staff'}]);
		
		// Call methods for filling data binding
		this.getStudentBinding();
		
		
		// PROTECTED REGION ID _4sXwUIXVEeace_i7152fMw.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
