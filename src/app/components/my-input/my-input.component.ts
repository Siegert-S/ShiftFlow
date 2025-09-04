import { Component, forwardRef, Injector, Input, } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, NgControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { TitleCasePipe, NgClass } from '@angular/common';

@Component({
  selector: 'app-my-input',
  standalone: true,
  imports: [MatIconModule, TitleCasePipe, NgClass],
  templateUrl: './my-input.component.html',
  styleUrls: ['./my-input.component.scss'],
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
  @Input() incorrect: boolean | null | undefined;

  focus = false;
  hide = true;
  value: string = '';
  disabled = false;

  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };
  private _control: FormControl | null = null;

  constructor(private injector: Injector) { }

  ngAfterViewInit() {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      ngControl.valueAccessor = this;
      this._control = ngControl.control as FormControl;
    }
  }

  get control(): FormControl | null {
    return this._control;
  }

  writeValue(obj: any): void {
    this.value = obj ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  updateValue(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  markTouched() {
    this.onTouched();
  }

  onFocus() {
    this.focus = true;
  }

  onBlur() {
    this.focus = false;
    this.markTouched();
  }

  switchPass() {
    this.hide = !this.hide;
  }
}
