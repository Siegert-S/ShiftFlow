import { Component, computed, EventEmitter, inject, Output } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RouterLink, Router } from "@angular/router";
import { NgClass } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menuService = inject(MenuService);
  router = inject(Router);
  user = inject(AuthService);

  credential = this.user.userCredential;

  menu = this.menuService.getMenu()

  visibelMenu = computed(() => {
    return this.menu().filter(tab => {
      let result = tab.authRequired ? this.credential() != null : true;
      console.log(result);

      return result;
    })
  })

  @Output() activTab = new EventEmitter<string>();

  constructor() {
    // console.log(this.visibelMenu());

  }


  setActivTab(name: string) {
    this.activTab.emit(name);
  }
}
