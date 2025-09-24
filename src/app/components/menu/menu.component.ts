import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { RouterLink, Router } from "@angular/router";
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, NgClass],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  menuService = inject(MenuService);
  router = inject(Router)

  menu = this.menuService.getMenu()
}
