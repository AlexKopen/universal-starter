import { Component, HostListener, OnInit } from '@angular/core';
import { MENU_ITEMS } from '../constants/menu-items.constant';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuItems: string[] = MENU_ITEMS;

  initialHamburgerClickOccurred = false;
  showSideMenu = false;
  allowOutsideClickEvent = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('window:resize')
  onResize() {
    if (this.initialHamburgerClickOccurred && window.innerWidth >= 768) {
      this.initialHamburgerClickOccurred = false;
      this.showSideMenu = false;
      this.allowOutsideClickEvent = false;
    }
  }

  hamburgerClick(): void {
    this.initialHamburgerClickOccurred = true;
    this.showSideMenu = true;
    // We set allowOutsideClickEvent in outsideMenuClick() because the click outside event is called immediately
  }

  closeClick(): void {
    this.showSideMenu = false;
    this.allowOutsideClickEvent = false;
  }

  outsideMenuClick(): void {
    if (this.allowOutsideClickEvent) {
      this.showSideMenu = false;
      this.allowOutsideClickEvent = false;
    } else {
      if (this.showSideMenu) {
        this.allowOutsideClickEvent = true;
      }
    }
  }

  get mobileMenuClass(): string {
    if (this.initialHamburgerClickOccurred) {
      return this.showSideMenu
        ? 'animated slideInLeft faster'
        : 'animated slideOutLeft faster';
    } else {
      return '';
    }
  }

  menuItemAsRoute(menuItem: string): string {
    if (menuItem.toLowerCase() === 'home') {
      return '/';
    }

    return '/' + menuItem.toLowerCase();
  }
}
