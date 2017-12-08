//
// Created by IFML2NG2 on 2017/12/08 12:31:18
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

// Search Component Imports
import { SearchComponent } from '../dynamic/search.component';
import { InventoryListFilter } from '../helper/pipes/inventoryList.pipe';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports
import { Book } from '../data/book';

@Component({
	selector: 'searchBooks',
	templateUrl: 'app/views/searchBooks.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass ,SearchComponent ],
	pipes: [InventoryListFilter,]
})

export class SearchBooksComponent {
	//Generate variables for parameters and bindings
	selectedBookBinding:  any;
	isSelectedBookBinding:  boolean;
	// variable for advanced search space
	advancedSearchSpace: Object;
	filterBy: String;
	// variable for list data binding
	bookBinding: Book[];
	vBookInfo: any;
	vBookStatus: any;
	// PROTECTED REGION ID _h3vrIIC1Eea2S59Os6LSKA.searchBooks ENABLED START
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
		{key: "bookInfo.isbn", title: "bookInfo.isbn"},
		{key: "bookInfo.title", title: "bookInfo.title"},
		{key: "bookInfo.author", title: "bookInfo.author"},
		{key: "bookStatus", title: "vBookStatus"}
		];
	}
		
	// stubs generated for view element events
	issueBook(){
		this._router.navigate(['/lendingForm', {bookToIssueBinding: JSON.stringify(this.selectedBookBinding)}]);
	}
	
		reserveBook(){
			this.reserveBookActionAction();
		}
	
		reserveBookActionAction(){
			// PROTECTED REGION ID _A2qEQIC_Eea2S59Os6LSKA.reserveBookAction ENABLED START
			this._dataService.reserveBook(this.selectedBookBinding.bookId, this._authenticationService.getId());
    		this.getBookBinding();
			// PROTECTED REGION END
		}
	
		returnBook(){
			this.returnBookActionAction();
		}
	
		returnBookActionAction(){
			// PROTECTED REGION ID _IaebAIC_Eea2S59Os6LSKA.returnBookAction ENABLED START
			// PROTECTED REGION END
		}

	// stubs for data service calls for data bindings
	getBookBinding(){
		// PROTECTED REGION ID _sU8p0IC1Eea2S59Os6LSKA.getBookBinding ENABLED START
		this._dataService.getBooks().then(lendings => this.bookBinding = lendings)
		// PROTECTED REGION END
	}
	
	onSelect(el: Book){
		if(this.selectedBookBinding === el){
			this.selectedBookBinding = undefined;
			this.isSelectedBookBinding = false;
		}else{
			this.selectedBookBinding = el;
			this.isSelectedBookBinding = true;
		}
	}
	
	// called when search filter is updated
	filterUpdated(val: Object){
		this.filterBy = JSON.stringify(val);
	}
	
	// called when component is initiated			
	ngOnInit(){
		// Check authentication requirements, if empty, no authentication requirements for this component
		this._authenticationService.checkPrivilegesIncludeOne([{role:'staff'},{role:'student'}]);
		
		// Call methods for filling data binding
		this.getBookBinding();
		
		
		// PROTECTED REGION ID _h3vrIIC1Eea2S59Os6LSKA.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
