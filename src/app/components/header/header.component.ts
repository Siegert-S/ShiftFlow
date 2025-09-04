import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() tabName: string = 'Test';
  @Input() hideMenu = false;
  @Output() hideMenuChange = new EventEmitter<boolean>();

  switchMenu() {
    console.log('menu click');

    this.hideMenu = !this.hideMenu;
    this.hideMenuChange.emit(this.hideMenu);
  }
}
