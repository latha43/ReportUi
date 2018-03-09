import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ChartsModule } from 'ng2-charts';
import { routingModule } from "./app.router"; 
import {KarmaComponent} from "./app.karma-component";
import {CucumberComponent} from "./app.cucumber-component";
import {JunitComponent} from "./app.junit-component";
import { HomeComponent } from './home.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,CucumberComponent,HomeComponent,KarmaComponent,JunitComponent
  ],
  imports: [
    BrowserModule,routingModule,ChartsModule,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
