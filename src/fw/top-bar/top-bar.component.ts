import { Component } from '@angular/core';

import { FrameworkConfigService } from '../services/framework-config.service';
import { UserApi } from '../users/user-api';
import { Fwuser } from '../users/models/fwuser';
import { select, Store } from '@ngrx/store';

@Component({
  selector: 'fw-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  user: Fwuser;

  constructor(
    public frameworkConfigService: FrameworkConfigService,
    private userApi: UserApi
  ) {
    // store.pipe(select(fromRoot.getLoggedInUser)).subscribe(user => {
    //   if (user && user.userInfo) {
    //     this.user = {
    //       contactName: user.contactName,
    //       email: user.email,
    //       roleName: user.roleName,
    //       avatar: user.userInfo.avatar
    //     };
    //   } else if (user) {
    //     this.user = {
    //       contactName: user.contactName,
    //       email: user.email,
    //       roleName: user.roleName,
    //       avatar: ''
    //     };
    //   }
    // });
  }

  signOut() {
    this.userApi.logout();
  }

  manageAccount() {
    this.userApi.manageAccount();
  }
}
