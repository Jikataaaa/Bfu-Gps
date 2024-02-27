import { Routes } from '@angular/router';
import { NavigationComponent } from './components/navigation/navigation.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: NavigationComponent }
];
