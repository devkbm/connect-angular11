import { Component, Self, Optional, Input } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-form-item-input',
  templateUrl: './form-item-input.component.html',
  styleUrls: ['./form-item-input.component.css']
})
export class FormItemInputComponent implements ControlValueAccessor {

  @Input() disabled: boolean = false;
  @Input() labelText: string = '';
  @Input() placeholder: string = '';
  @Input() itemId: string = '';

  onChange: any = (_:any) => {};
  onTouched: any = () => {};

  _value: any ='';
  set value(val: any) {
    this._value = val;
    this.onChange(val);
    this.onTouched(val);
  }

  constructor(@Self()  @Optional() private ngControl: NgControl) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    console.log(fn);
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
