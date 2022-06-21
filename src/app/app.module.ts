import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterCarsComponent } from './register-cars/register-cars.component';
import { ListCarsComponent } from './list-cars/list-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterCarsComponent,
    ListCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
