import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { localStorageUserKey, LoginService } from '../../login/services/login.service';

const jwtHelper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(public loginService: LoginService) { }
  public isAuthenticated(): boolean {
    return !!this.loginService.loggedInUser$.value;
  }
}
