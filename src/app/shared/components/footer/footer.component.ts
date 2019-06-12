import { Component, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../../constants/menu-items.constant';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  menuItems: string[] = MENU_ITEMS;

  constructor() {}

  ngOnInit() {}

  menuItemAsRoute(menuItem: string): string {
    if (menuItem.toLowerCase() === 'home') {
      return '/';
    }

    return '/' + menuItem.toLowerCase();
  }
}
