import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ViewManipulationModule } from './components/view-manipulation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ViewManipulationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
