//
// Created by IFML2NG2 on 2018/02/17 19:23:40
//

// Angular Imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

// Search Component Imports
import { SearchComponent } from '../dynamic/search.component';
import { ReservationsListFilter } from '../helper/pipes/reservationsList.pipe';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

// domain concept imports
import { BookReservation } from '../data/bookReservation';

@Component({
	selector: 'bookReservations',
	templateUrl: 'app/views/bookReservations.component.html',
	providers: [LoggerService,DisplayPropertiesService,AuthenticationService,DataService],
	directives: [NgClass ,SearchComponent ],
	pipes: [ReservationsListFilter,]
})

export class BookReservationsComponent {
	//Generate variables for parameters and bindings
	selectedReservationBinding:  any;
	isSelectedReservationBinding:  boolean;
	// variable for advanced search space
	advancedSearchSpace: Object;
	filterBy: String;
	// variable for list data binding
	reservationBinding: BookReservation[];
	vReservedBy: any;
	vReservedBook: any;
	// PROTECTED REGION ID _tPI6IIaoEeaTJocisBH8lA.bookReservations ENABLED START
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
		{key: "reservedBy.studentId", title: "reservedBy.studentId"},
		{key: "reservedBy.firstname", title: "reservedBy.firstname"},
		{key: "reservedBy.lastname", title: "reservedBy.lastname"},
		{key: "reservedBy.studentStatus", title: "reservedBy.studentStatus"},
		{key: "reservedBook.bookId", title: "reservedBook.bookId"},
		{key: "reservedBook.bookStatus", title: "reservedBook.bookStatus"},
		{key: "reservedBook.bookInfo.isbn", title: "reservedBook.bookInfo.isbn"},
		{key: "reservedBook.bookInfo.title", title: "reservedBook.bookInfo.title"},
		{key: "reservedBook.bookInfo.author", title: "reservedBook.bookInfo.author"}
		];
	}
		
	// stubs generated for view element events
	issueBook(){
		this._router.navigate(['/lendingForm', {reservationBinding: JSON.stringify(this.selectedReservationBinding)}]);
	}

	// stubs for data service calls for data bindings
	getReservationBinding(){
		// PROTECTED REGION ID _zM55EIaoEeaTJocisBH8lA.getReservationBinding ENABLED START
		this._dataService.getBookReservations().then(reservations => this.reservationBinding = reservations);
		// PROTECTED REGION END
	}
	
	onSelect(el: BookReservation){
		if(this.selectedReservationBinding === el){
			this.selectedReservationBinding = undefined;
			this.isSelectedReservationBinding = false;
		}else{
			this.selectedReservationBinding = el;
			this.isSelectedReservationBinding = true;
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
		this.getReservationBinding();
		
		
		// PROTECTED REGION ID _tPI6IIaoEeaTJocisBH8lA.ngOnInit ENABLED START
		// PROTECTED REGION END
	}
}
