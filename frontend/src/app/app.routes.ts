import { Routes } from '@angular/router';
import {AuthorizationComponent} from '../authorization/authorization.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {authorizationGuard} from '../guards/AuthorizationGuard/authorization.guard';

export const routes: Routes = [
  {path: "authorization", component: AuthorizationComponent, canActivate: [authorizationGuard]},
  {path: "navigation", component: NavigationComponent, canActivate: [authorizationGuard]},
  {path: '', redirectTo: '/authorization', pathMatch: 'full'}
];
