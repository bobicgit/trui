import { ValidatorFn } from '@angular/forms';

export interface ValidatorRule {
    name: string;
    validator: ValidatorFn;
    message: string;
}
export interface FieldConfig {
    type: string;
    label: string;
    name: string;
    inputType: string;
    placeholder?: string;
    value?: any;
    options?: Option[];
    rules?: ValidatorRule[];
}

export interface BeFieldConfig {
    type: string;
    name: string;
    label?: string;
    placeholder?: string;
    value?: any;
    rules?: Rules;
    options?: Option[];
}

interface Rules {
    required?: boolean;
    email?: boolean;
}

interface Option {
    value: string;
    label: string;
}
