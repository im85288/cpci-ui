import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import {of} from "rxjs";
import { Store } from '@ngrx/store';
import { FrameworkConfigService } from '../../fw/services/framework-config.service';
import {UserApi} from "../../fw/users/user-api";
import {adminMenuItems} from "../app.menu";
import {MenuService} from "../../fw/services/menu.service";

@Injectable()
export class AuthenticationService implements UserApi {
  private authenticated = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private frameworkConfigService: FrameworkConfigService,
    private menuService: MenuService,
  ) {}

  /*
   * Attempt login and return success true/false.
   */
  login(username: string, password: string): Observable<boolean> {
    this.configureForUser();
    return of(true);
  }

  logout(): Observable<any> {
    return of({});
  }

  manageAccount(): Observable<any> {
    return of({});
  }

  configureForUser(): void {
    this.menuService.items = adminMenuItems;
    this.router.navigate(['/authenticated/cpci']);
  }
}
