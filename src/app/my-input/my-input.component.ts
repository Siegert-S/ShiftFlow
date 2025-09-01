import { TitleCasePipe } from '@angular/common';
import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-input',
  standalone: true,
  imports: [MatIconModule, TitleCasePipe],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyInputComponent),
      multi: true
    }
  ]
})
export class MyInputComponent implements ControlValueAccessor {

  @Input() type: 'text' | 'password' = 'text';
  @Input() name: string = 'name';

  hide = true;
  value: string = '';
  disabled = false;

  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };

  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  markTouched() {
    this.onTouched();
  }

  switchPass() {
    this.hide = !this.hide;
  }
}
