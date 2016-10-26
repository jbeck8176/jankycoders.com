import { Routes } from '@angular/router';

import { LoginRoutes } from './login/index';
import { HomeRoutes } from './home/index';

import { HomeComponent } from './home/index';

export const routes: Routes = [
	...HomeRoutes,
	...LoginRoutes,
	{ path: '**', component: HomeComponent }
];
