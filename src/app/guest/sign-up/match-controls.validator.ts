import { AbstractControl } from '@angular/forms';

export const matchControlsValidator = (
  controlName: string,
  matchingControlName: string
) => {
  return (abstractControl: AbstractControl) => {
    const control = abstractControl.get(controlName);
    const matchingControl = abstractControl.get(matchingControlName);

    if (!control || !matchingControl) {
      return { matchValidate: 'Controls not found.' };
    }
    if (matchingControl.errors) {
      return null;
    }
    if (control.value === matchingControl.value) {
      return null;
    }
    const errors = { matchValidate: 'Controls do not match.' };
    matchingControl.setErrors(errors);
    return errors;
  };
};
