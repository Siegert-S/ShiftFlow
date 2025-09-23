import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-my-button',
  standalone: true,
  imports: [],
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.scss'
})
export class MyButtonComponent {

  @Input() theme: 'main' | 'second' = 'main';
  @Input() name: string = 'button';
  @Input() disabled: boolean = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clicked = new EventEmitter<void>();


  onClick() {
    this.clicked.emit();
  }
}
