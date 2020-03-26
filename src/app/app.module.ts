import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';
import { NbCardModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { SummaryComponent } from './summary/summary.component';
import { ProgressionComponent } from './progression/progression.component';
import { ChartModule } from 'angular2-chartjs';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPrincipalComponent,
    SummaryComponent,
    ProgressionComponent
  ],
    imports: [
      BrowserModule,
      ChartModule,
      NbCardModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NbThemeModule.forRoot({ name: 'default' }),
      NbLayoutModule,
      NbEvaIconsModule,
      AppRoutingModule
    ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
