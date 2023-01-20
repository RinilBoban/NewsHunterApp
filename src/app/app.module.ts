import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeModule } from './home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { TechnologyComponent } from './technology/technology.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FooterComponent } from './footer/footer.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { BusinessComponent } from './business/business.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { IndiaComponent } from './india/india.component';
import { ClipboardComponent } from './clipboard/clipboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TechnologyComponent,
    FooterComponent,
    SportsComponent,
    EntertainmentComponent,
    HealthComponent,
    ScienceComponent,
    BusinessComponent,
    SearchComponent,
    AdvanceSearchComponent,
    IndiaComponent,
    ClipboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
