import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonUserComponent } from './comps/json-user/json-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule } from '@angular/forms';
import { AmericansComponent } from './comps/americans/americans.component';
import { NativeComponent } from './comps/Americans/native/native.component';
import { BlacksComponent } from './comps/Americans/blacks/blacks.component';
import { ImmigrantsComponent } from './comps/Americans/immigrants/immigrants.component';
import { BirthYearPipe } from './comps/birth-year.pipe';
import { StudentsComponent } from './comps/students/students.component';

@NgModule({
  declarations: [
    AppComponent,
    ChocolateComponent,
    IceCreamComponent,
    DataTitleComponent,
    JsonUserComponent,
    LoginComponent,
    AmericansComponent,
    NativeComponent,
    BlacksComponent,
    ImmigrantsComponent,
    BirthYearPipe,
    StudentsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
