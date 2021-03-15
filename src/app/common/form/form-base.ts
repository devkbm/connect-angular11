import { FormGroup } from '@angular/forms';
import { Output, EventEmitter, Component } from '@angular/core';

export enum FormType {
    NEW = 'NEW',
    MODIFY = 'MODIFY'
}
@Component({
  template : ''
})
export abstract class FormBase {

    formType: FormType;

    /**
     * Xs < 576px span size
     * Sm >= 576px span size
     */
    formLabelXs = 24;
    formControlXs = 24;
    formLabelSm = 24;
    formControlSm = 24;

    defaultControlSize = {
      /** <= 575 px */
      xs: 24,
      /** < 576 px */
      sm: 24,
      /** < 768 px */
      md: 24,
      /** < 992 px */
      lg: 24,
      /** < 1200 px */
      xl: 24,
      /** < 1600 px */
      xxl: 24
    }

    defaultLabelSize = {
      /** <= 575 px */
      xs: 24,
      /** < 576 px */
      sm: 24,
      /** < 768 px */
      md: 24,
      /** < 992 px */
      lg: 24,
      /** < 1200 px */
      xl: 24,
      /** < 1600 px */
      xxl: 24
    }

    @Output() formSaved = new EventEmitter();
    @Output() formDeleted = new EventEmitter();
    @Output() formClosed = new EventEmitter();

    constructor() {
        this.formType = FormType.NEW;
     }

    /**
     *
     * @param formGroup 폼그룹
     * @param fieldName 필드명
     * @param errorName 에러명
     */
    public isFieldErrors(formGroup: FormGroup, fieldName: string, errorName: string): boolean {
        return formGroup.get(fieldName)?.dirty
            && formGroup.get(fieldName)?.hasError(errorName) ? true : false;
    }
}
