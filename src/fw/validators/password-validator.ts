import { AbstractControl } from '@angular/forms';

export class PasswordValidator {
  static MatchPassword(AC: AbstractControl) {
    if (AC.get('password') !== null) {
      let password = AC.get('password').value; // to get value in input tag
      let confirmPassword = AC.get('confirmPassword').value; // to get value in input tag
      if (password !== confirmPassword) {
        AC.get('confirmPassword').setErrors({ MatchPassword: true });
      } else {
        return null;
      }
    } else {
      return null;
    }
  }

  static PasswordFormat(AC: AbstractControl) {
    if (AC.get('password') !== null) {
      let password = AC.get('password').value; // to get value in input tag
      let regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);
      if (!regex.test(password)) {
        AC.get('password').setErrors({ PasswordFormat: true });
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
}
