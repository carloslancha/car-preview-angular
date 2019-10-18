import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarPreviewComponent } from './car-preview/car-preview.component';
import { PointComponent } from './point/point.component';

@NgModule({
  declarations: [
    AppComponent,
    CarPreviewComponent,
    PointComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
