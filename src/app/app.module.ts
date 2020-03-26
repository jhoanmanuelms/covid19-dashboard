import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardPrincipalComponent } from './dashboard-principal/dashboard-principal.component';
import { NbCardModule, NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import { ResumenComponent } from './resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPrincipalComponent,
    ResumenComponent
  ],
    imports: [
      BrowserModule,
      NbCardModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NbThemeModule.forRoot({ name: 'default' }),
      NbLayoutModule,
      NbEvaIconsModule,
      AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
