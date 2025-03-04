import { Routes } from '@angular/router';
import { MapComponent } from './components/map/map.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
    {path:'', component: MapComponent, title:'Map'},
    {path:'users', component: UsersComponent, title:'Users'}
];
