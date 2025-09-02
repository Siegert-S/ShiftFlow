import { Component, forwardRef, Injector, Input, Optional, Self } from '@angular/core';
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
      // useExisting: MyInputComponent,
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

  constructor(private injector: Injector) { }

  // ngOnInit()
  ngAfterViewInit() {
    const ngControl = this.injector.get(NgControl, null);
    if (ngControl) {
      ngControl.valueAccessor = this;
      this._control = ngControl.control as FormControl;
    }
    console.log(this.control);

  }

  private _control: FormControl | null = null;


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
    console.log('update trigger');

    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value);
  }

  markTouched() {
    this.onTouched();
    console.log(this.control);

  }

  onFocus() {
    this.focus = true;
    console.log('focus');
    console.log(this.value);

  }

  onBlur() {
    this.focus = false;
    this.markTouched();

    console.log('blur');
    console.log(this.value);

  }

  switchPass() {
    this.hide = !this.hide;
  }
}
