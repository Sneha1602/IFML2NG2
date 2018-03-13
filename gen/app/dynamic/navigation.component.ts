//
// Created by IFML2NG2 on 2018/03/13 15:33:20
//

// Angular Imports
import { Component, Input, OnChanges, SimpleChange } from '@angular/core';
import { RouterLink } from '@angular/router';

// Service Imports
import { LoggerService } from '../services/logger.service';
import { AuthenticationService } from '../services/authentication.service';
import { DataService } from '../services/data.service';
import { DisplayPropertiesService } from '../services/displayProperties.service';
import { ResourceService } from '../services/resource.service';

@Component({
	selector: 'navigation-component',
	templateUrl: 'app/dynamic/navigation.component.html',
	providers: [ RouterLink ]
})

export class NavigationComponent implements OnChanges{
    @Input() navItems: Object[] = [];

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
}
