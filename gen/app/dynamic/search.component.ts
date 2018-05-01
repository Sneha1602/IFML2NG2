//
// Created by IFML2NG2 on 2018/05/01 19:00:23
//

// Angular Imports
import { Component, Input, Output, OnChanges, EventEmitter, SimpleChange } from '@angular/core';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

@Component({
	selector: 'search-component',
	templateUrl: 'app/dynamic/search.component.html'
})

export class SearchComponent implements OnChanges{
    @Input() searchSpace: Object[] = [];
    public advancedFilter: Object = {};
    @Input() title: string = "";

    @Output() onFilterUpdate = new EventEmitter<Object>();
    
    constructor(
		private _loggerService: LoggerService,
				private _authenticationService: AuthenticationService,
				private _dataService: DataService,
				private _displayPropertiesService: DisplayPropertiesService,
				private _resourceService: ResourceService
		) {
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        for (let propName in changes) { 
            let changedProp = changes[propName];
        }
    }

    updateFilterSimple(val: string){
        this.onFilterUpdate.emit({'*':val});
    }

    updateFilterAdvanced(key: string, val:string){
        if(val !== "" || val == undefined){
            this.advancedFilter[key] = val;
        }else{
            delete this.advancedFilter[key];
        }
        this.onFilterUpdate.emit(this.advancedFilter);
    }
}
