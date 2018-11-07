import {Observable} from "rxjs";

export abstract class UserApi {
  login: (username: string, password: string) => Observable<any>;
  logout: () => Observable<any>;
  manageAccount: () => Observable<any>;
  // changePassword :
}
