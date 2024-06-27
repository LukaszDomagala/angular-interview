import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserRole, UserService } from './user/user.service';
import { inject } from '@angular/core';

export interface RouteData {
    allowedRole: UserRole;
}

const getRoleGuard = (route: ActivatedRouteSnapshot) =>
  inject(UserService).hasRole((route.data as RouteData).allowedRole);

export const routes: Routes = [
    {
        path: '', 
        component: HomeComponent, 
        data: { allowedRole: UserRole.User } as RouteData,
        canActivate: [getRoleGuard],
    },
    {
        path: 'admin',
        component: AdminComponent,
        data: { allowedRole: UserRole.Admin } as RouteData,
        canActivate: [getRoleGuard]
    },
];

// TODO: add route guard
