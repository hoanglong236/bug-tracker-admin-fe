import { AbstractControl } from '@angular/forms';

export const matchControlsValidator = (
  controlName: string,
  matchingControlName: string
) => {
  return (groupControl: AbstractControl) => {
    const control = groupControl.get(controlName);
    const matchingControl = groupControl.get(matchingControlName);

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
