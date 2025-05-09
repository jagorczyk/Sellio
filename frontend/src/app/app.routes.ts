import { Routes } from '@angular/router';
import {AuthorizationComponent} from '../authorization/authorization.component';
import {NavigationComponent} from '../navigation/navigation.component';
import {authorizationGuard} from '../guards/AuthorizationGuard/authorization.guard';
import {ItemDetailsComponent} from '../items/ItemDetails/itemdetails.component';
import {ItemsComponent} from '../items/ItemsList/items.component';
import {MainlayoutComponent} from '../layouts/mainlayout/mainlayout.component';
import {AuthlayoutComponent} from '../layouts/authlayout/authlayout.component';

// export const routes: Routes = [
//   {path: "authorization", component: AuthorizationComponent, canActivate: [authorizationGuard]},
//   // {path: "navigation", component: NavigationComponent},
//   {path: 'item/:name', component: ItemDetailsComponent},
//   {path: '', component: ItemsComponent, pathMatch: 'full'}
// ];

export const routes: Routes = [
  {
    path: '',
    component: MainlayoutComponent,
    children: [
      { path: '', component: ItemsComponent },
      { path: 'item/:name', component: ItemDetailsComponent },
    ]
  },
  {
    path: '',
    component: AuthlayoutComponent,
    children: [
      { path: 'authorization', component: AuthorizationComponent },
    ]
  },
  { path: '**', redirectTo: 'items' }
];
