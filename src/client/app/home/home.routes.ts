import { Route } from '@angular/router';

import { BlankPageRoutes } from './blank-page/index';
import { BSComponentRoutes } from './bs-component/index';

import { LandingPageComponent } from './landing-page/landingPage.component';

import { HomeComponent } from './index';

export const HomeRoutes: Route[] = [
	{
		path: '',
		component: HomeComponent,
		children: [
			...BSComponentRoutes,
			...BlankPageRoutes,
			{ path: '**', component: LandingPageComponent }
		]
	}
];
