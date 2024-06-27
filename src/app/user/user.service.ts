import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

export enum UserRole {
  'User' = 'USER',
  'Admin' = 'ADMIN',
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly userRoles: UserRole[] = [UserRole.User];

  hasRole(role: UserRole) {
    return of(this.userRoles.includes(role)).pipe(delay(1000));
  }
}
