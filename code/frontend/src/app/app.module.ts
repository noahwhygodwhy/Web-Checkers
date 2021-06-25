import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar'
// import { MatIconModule } from '@angular/material/icon'; 


const IO = [
  BrowserModule,
  AppRoutingModule,
  MatToolbarModule,
  // MatIconModule,
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: IO,
  exports: IO,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
