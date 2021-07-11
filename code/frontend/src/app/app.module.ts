import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTableModule} from '@angular/material/table'
import { MatListModule} from '@angular/material/list'
import { MatGridListModule} from '@angular/material/grid-list';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
// import { MatIconModule } from '@angular/material/icon'; 


const IO = [
  BrowserModule,
  AppRoutingModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  BrowserAnimationsModule,
  MatTableModule,
  MatListModule,
  MatGridListModule,
  MatButtonModule,
  MatIconModule,
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent
  ],
  imports: IO,
  exports: IO,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
