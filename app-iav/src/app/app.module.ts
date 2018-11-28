import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/**
* Importing routing module, app component and Http Services module
*/
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
/**
* Importing local components and services
*/
import { ChartPanelComponent } from './chart-panel/chart-panel.component';
import { LogPanelComponent } from './log-panel/log-panel.component';
import { DataLoadService } from './data-load.service';


@NgModule({
  declarations: [
    AppComponent,
    ChartPanelComponent,
    LogPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataLoadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
