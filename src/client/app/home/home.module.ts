import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { BlankPageModule } from './blank-page/blankPage.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { LandingPageModule } from './landing-page/landingPage.module';

import { SidebarComponent } from '../shared/index';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BlankPageModule,
        BSComponentModule,
        LandingPageModule
    ],
    declarations: [HomeComponent, SidebarComponent],
    exports: [HomeComponent, SidebarComponent]
})

export class HomeModule { }
