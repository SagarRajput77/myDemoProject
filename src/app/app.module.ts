import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Crud1Component } from './myComp/crud1/crud1.component';
import { FormsModule } from '@angular/forms';
import { ObservalComponent } from './myComp/observal/observal.component';

@NgModule({
  declarations: [
    AppComponent,
    Crud1Component,
    ObservalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
