// Generated by ContextProviderGenerator

// Contains Objects that push new data to the Context Controller

// Code for API/Library access has to be inserted in the file:"appState.service.ts" 
// in the folder: static/app/context/providers/
		
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs/Rx';


// PROTECTED REGION ID general ENABLED START
// PROTECTED REGION END

@Injectable()
export class AppStateService {
	
	private moodChecked: boolean;
	private _moodCheckedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public moodCheckedSubject: Observable<boolean> = this._moodCheckedSubject.asObservable();
	private outsideChecked: boolean;
	private _outsideCheckedSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
	public outsideCheckedSubject: Observable<boolean> = this._outsideCheckedSubject.asObservable();
	private userRole: string;
	private _userRoleSubject: BehaviorSubject<string> = new BehaviorSubject("init");
	public userRoleSubject: Observable<string> = this._userRoleSubject.asObservable();
	
	// PROTECTED REGION ID appState ENABLED START
	// PROTECTED REGION END
	
	constructor(){
		// PROTECTED REGION ID constructor ENABLED START

                this.moodChecked = false;
                this.outsideChecked = false;
                this.userRole = "none";

		// PROTECTED REGION END
	}
	
	getMoodChecked(){
		
		// PROTECTED REGION ID moodChecked ENABLED START
		// PROTECTED REGION END
		
		this._moodCheckedSubject.next(this.moodChecked);
	}
	getOutsideChecked(){
		
		// PROTECTED REGION ID outsideChecked ENABLED START
		// PROTECTED REGION END
		
		this._outsideCheckedSubject.next(this.outsideChecked);
	}
	getUserRole(){
		
		// PROTECTED REGION ID userRole ENABLED START

                if(localStorage.getItem('userRole') != null){
                        this.userRole = localStorage.getItem('userRole');
                }

		// PROTECTED REGION END
		
		this._userRoleSubject.next(this.userRole);
	}
	
	// PROTECTED REGION ID addMethods ENABLED START
	// PROTECTED REGION END
}
