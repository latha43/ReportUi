
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home.component';
import {AppComponent} from "./app.component";
import {CucumberComponent} from "./app.cucumber-component";
import {KarmaComponent} from "./app.karma-component";
import {JunitComponent} from "./app.junit-component";
const routes: Routes = [
    { path: 'list', component: AppComponent },
    { path: 'cucumber', component: CucumberComponent },
    { path: 'karma', component: KarmaComponent },
    { path: 'junit', component: JunitComponent },
    { path: 'home', component: HomeComponent },
    { path: '',redirectTo: '/home',pathMatch: 'full'}
];

export const routingModule = RouterModule.forRoot(routes);