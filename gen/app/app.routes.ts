import { provideRouter, RouterConfig }  from '@angular/router';

import { SearchBooksComponent } from './views/searchBooks.component';
import { LoginComponent } from './views/login.component';
import { HomeComponent } from './views/home.component';
import { LendingFormComponent } from './views/lendingForm.component';
import { LentBooksComponent } from './views/lentBooks.component';
import { StudentsComponent } from './views/students.component';
import { StudentDetailsComponent } from './views/studentDetails.component';
import { BookReservationsComponent } from './views/bookReservations.component';
import { HelpWindowComponent } from './views/helpWindow.component';

export const routes: RouterConfig = [
	{
		path: 'searchBooks',
		component: SearchBooksComponent
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent
	},
	{
		path: 'lendingForm',
		component: LendingFormComponent
	},
	{
		path: 'lentBooks',
		component: LentBooksComponent
	},
	{
		path: 'students',
		component: StudentsComponent
	},
	{
		path: 'studentDetails',
		component: StudentDetailsComponent
	},
	{
		path: 'bookReservations',
		component: BookReservationsComponent
	},
	{
		path: 'helpWindow',
		component: HelpWindowComponent
	},
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	}
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
