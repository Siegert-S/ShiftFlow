import { Injectable, signal } from '@angular/core';
import { MenuTab } from '../models/index.model';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menu = signal<MenuTab[]>(
    [
      { title: 'Login', path: 'login', authRequired: false, clearanceLevel: 0 },
      { title: 'Employees', path: 'employee', authRequired: true, clearanceLevel: 0 },
      { title: 'Shift', path: 'employee', authRequired: true, clearanceLevel: 0 },
      { title: 'Announcement', path: 'employee', authRequired: true, clearanceLevel: 0 },
      { title: 'Logout', path: 'login', authRequired: true, clearanceLevel: 0 },
    ]
  );

  constructor() { }

  getMenu() {
    return this.menu;
  }
}
