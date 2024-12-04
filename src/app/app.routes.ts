import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ListComponent } from './pages/list/list.component';

export const routes: Routes = [
    {path: '', component: WelcomeComponent, title: 'Bienvenida'},
    {path: 'list', component: ListComponent, title: 'Listado'}
];
