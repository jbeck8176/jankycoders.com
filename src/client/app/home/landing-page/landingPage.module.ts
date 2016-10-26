import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landingPage.component';
import { CarouselModule } from 'ng2-bootstrap/ng2-bootstrap';


@NgModule({
    imports: [CommonModule, CarouselModule],
    declarations: [LandingPageComponent],
    exports: [LandingPageComponent]
})

export class LandingPageModule { }
