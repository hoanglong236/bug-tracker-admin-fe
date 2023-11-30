import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const inCollectionValidator = (arr: string[]): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const errors = {
      inCollectionValidate: 'The value must be in the collection',
    };
    return arr.includes(control.value) ? null : errors;
  };
};
