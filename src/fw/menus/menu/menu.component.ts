
import { Component } from '@angular/core';

import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'fw-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  numberOfUnreadSystemEvents: number;

  constructor(public menuService: MenuService) {

  }
}
