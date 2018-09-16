import {Routes} from '@angular/router';

export const ROUTER_CONFIG: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/content'},
  {path: 'content', loadChildren: './content/content.module#ContentModule'},
];
