import {Observable} from "rxjs";
import { Fwuser } from './models/fwuser';

export abstract class UserDetailsApi {
  getLoggedInFwUser: () => Observable<Fwuser>;
}
