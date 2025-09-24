import { Injectable, signal } from '@angular/core';

export type MenuTab = {
  title: string;
  path: string;
  clearanceLevel: number
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu = signal<MenuTab[]>(
    [
      { title: 'Login', path: 'login', clearanceLevel: 0 },
      { title: 'User', path: 'user', clearanceLevel: 0 },
      { title: 'User', path: 'user', clearanceLevel: 0 },
      { title: 'User', path: 'user', clearanceLevel: 0 },
      { title: 'User', path: 'user', clearanceLevel: 0 },
      { title: 'User', path: 'user', clearanceLevel: 0 },
      { title: 'Logout', path: 'login', clearanceLevel: 0 },
    ]
  );

  constructor() { }

  getMenu() {
    return this.menu;
  }
}
