import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuLayoutComponent } from './menu-layout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MenuLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search',
      },
      {
        path: 'studentInfo',
        loadChildren: '../../features/student-info/student-info.module#StudentInfoModule',
      },
      {
        path: 'registration',
        loadChildren: '../../features/registration/registration.module#RegistrationModule',
      },
      {
        path: 'search',
        loadChildren: '../../features/search/search.module#SearchModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuLayoutRoutingModule { }
