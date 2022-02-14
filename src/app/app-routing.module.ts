import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvantagesComponent } from './advantages/advantages.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { CurrentOpeningsComponent } from './current-openings/current-openings.component';
import { HomeComponent } from './home/home.component';
import { LifeatWorkComponent } from './lifeat-work/lifeat-work.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'currentopenings',component:CurrentOpeningsComponent},
  
  {path:'benefits',component:BenefitsComponent},
  {path:'lifeatwork',component:LifeatWorkComponent},
  {path:'advantages',component:AdvantagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
