import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { CurrentOpeningsComponent } from './current-openings/current-openings.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { LifeatWorkComponent } from './lifeat-work/lifeat-work.component';
import { CompanywebsiteComponent } from './companywebsite/companywebsite.component';
import { AdvantagesComponent } from './advantages/advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CurrentOpeningsComponent,
    BenefitsComponent,
    LifeatWorkComponent,
    CompanywebsiteComponent,
    AdvantagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
