import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { BusinessComponent } from './business/business.component';
import { ClipboardComponent } from './clipboard/clipboard.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HeaderComponent } from './header/header.component';
import { HealthComponent } from './health/health.component';
import { IndiaComponent } from './india/india.component';
import { ScienceComponent } from './science/science.component';
import { SearchComponent } from './search/search.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  { path:'', redirectTo:'/home',pathMatch:'full' },
  { path: 'header', component:HeaderComponent},
  { path: 'usa', component:IndiaComponent},
  { path: 'clipboard', component:ClipboardComponent},
  { path: 'search', component:SearchComponent},
  { path: 'sports', component:SportsComponent},
  { path: 'business', component:BusinessComponent},
  { path: 'health', component:HealthComponent},
  { path: 'science', component:ScienceComponent},
  { path: 'entertainment', component:EntertainmentComponent},
  { path: 'technology', component:TechnologyComponent},
  { path: 'advancedSearch', component:AdvanceSearchComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
