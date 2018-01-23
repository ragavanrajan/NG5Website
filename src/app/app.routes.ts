import {HomeComponent} from './components/home/home.component';
import {Routes} from '@angular/router';
import {AboutComponent} from './components/about/about.component';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent}

];
