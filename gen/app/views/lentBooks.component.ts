//
// Created by IFML2NG2 on 2018/02/17 20:41:09
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

// Search Component Imports
import { SearchComponent } from '../dynamic/search.component';
import { LentBooksFilter } from '../helper/pipes/lentBooks.pipe';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports
import { BookLending } from '../data/bookLending';

@Component({
	selector: 'lentBooks',
	templateUrl: 'app/views/lentBooks.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass ,SearchComponent ],
	pipes: [LentBooksFilter,]
})

export class LentBooksComponent {
	//Generate variables for parameters and bindings
	selectedLentBooksBinding:  any;
	isSelectedLentBooksBinding:  boolean;
	// variable for advanced search space
	advancedSearchSpace: Object;
	filterBy: String;
	// variable for list data binding
	lentBooksBinding: BookLending[];
	vLentBook: any;
	vLentBy: any;
	vDueDate: any;
	// PROTECTED REGION ID _NQWk0IC_Eea2S59Os6LSKA.lentBooks ENABLED START
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
		{key: "lentBook.bookId", title: "lentBook.bookId"},
		{key: "lentBook.bookStatus", title: "lentBook.bookStatus"},
		{key: "lentBook.bookInfo.isbn", title: "lentBook.bookInfo.isbn"},
		{key: "lentBook.bookInfo.title", title: "lentBook.bookInfo.title"},
		{key: "lentBook.bookInfo.author", title: "lentBook.bookInfo.author"},
		{key: "lentBy.studentId", title: "lentBy.studentId"},
		{key: "lentBy.firstname", title: "lentBy.firstname"},
		{key: "lentBy.lastname", title: "lentBy.lastname"},
		{key: "lentBy.studentStatus", title: "lentBy.studentStatus"},
		{key: "until", title: "vDueDate"}
		];
	}
		
	// stubs generated for view element events
	
		extendBook(){
			this.extendBookActionAction();
		}
	
		extendBookActionAction(){
			// PROTECTED REGION ID _JjYHUIDAEea2S59Os6LSKA.extendBookAction ENABLED START
			// PROTECTED REGION END
		}

	// stubs for data service calls for data bindings
	getLentBooksBinding(){
		// PROTECTED REGION ID _UloJQIC_Eea2S59Os6LSKA.getLentBooksBinding ENABLED START
		this._dataService.getLendings(this._authenticationService.getId()).then(lendings => this.lentBooksBinding = lendings);
		// PROTECTED REGION END
	}
	
	onSelect(el: BookLending){
		if(this.selectedLentBooksBinding === el){
			this.selectedLentBooksBinding = undefined;
			this.isSelectedLentBooksBinding = false;
		}else{
			this.selectedLentBooksBinding = el;
			this.isSelectedLentBooksBinding = true;
		}
	}
	
	// called when search filter is updated
	filterUpdated(val: Object){
		this.filterBy = JSON.stringify(val);
	}
	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		this._authenticationService.checkPrivilegesIncludeOne([{role:'student'}]);
		
		// Call methods for filling data binding
		this.getLentBooksBinding();
		
		
		// PROTECTED REGION ID _NQWk0IC_Eea2S59Os6LSKA.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
