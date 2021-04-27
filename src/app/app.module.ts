import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FlightsComponent } from './components/flights/flights.component';
import { Err404Component } from './components/err404/err404.component';
import { FlightDetailComponent } from './components/flight-detail/flight-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HotelsComponent,
    NavbarComponent,
    FlightsComponent,
    Err404Component,
    FlightDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
