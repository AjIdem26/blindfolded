import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { UserInterface } from '../interface/user.interface';
import { baseApiUrl } from '../../../../../environment/urls'

export const localStorageUserKey = 'userKey';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
  public loggedInUser$ = new BehaviorSubject<UserInterface>(this.getUserFromLocalStorage());
  constructor(private http: HttpClient) { }

  public login(user: UserInterface): Observable<UserInterface> {
    return this.http.post<any>(baseApiUrl + '/user/login', user).pipe(tap({
      next: (responseUser) => {
        localStorage.setItem(localStorageUserKey, JSON.stringify(responseUser));
        this.loggedInUser$.next(responseUser);
      }
    }));
  }

  public getUserFromLocalStorage(): UserInterface {
    const savedUser = localStorage.getItem(localStorageUserKey);
    if (savedUser) {
      return JSON.parse(savedUser) as UserInterface
    } else {
      return null as any;
    }
  }
}
