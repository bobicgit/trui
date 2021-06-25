import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static getValidatorErrorMessage(validatorName: string): string {
    const config = {
      required: 'Required',
      email: 'Invalid email address',
    };

    return config[validatorName];
  }
}
