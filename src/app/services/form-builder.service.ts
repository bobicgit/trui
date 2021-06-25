import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { BeFieldConfig, FieldConfig, ValidatorRule } from 'src/app/field.interface';
import { ValidationService } from 'src/app/services/validation.service';

// I assume that those "types" in yours Json config will be 'inputs' in html
const inputs: string[] = ['text', 'textarea', 'email', 'password', 'number'];

@Injectable({
  providedIn: 'root'
})
export class FormBuilderService {

  constructor(
    private formBuilder: FormBuilder
  ) { }

  build(config: BeFieldConfig[]): { form: FormGroup, fieldsConfig: FieldConfig[] } {
    if (!config) return;
    const fieldsConfig: FieldConfig[] = this.transformConfig(config);
    const form = this.generateFields(fieldsConfig);
    return { form, fieldsConfig };
  }

  addControlField(config: FieldConfig, form: FormGroup): void {
    if (config.type === 'radio') {
      config.value = config.options[0].value;
    }
    const control = this.formBuilder.control(
      config.value || '',
      this.addValidationRules(config.rules)
    );
    form.addControl(config.name, control);
  }

  transformConfig(fields): FieldConfig[] {
    const determineElementType = (inputType: string): string => {
      return inputs.indexOf(inputType) > -1 && 'input' || inputType;
    };
    // Validations messages exitCode. Now not needed, since it wasnt in design, but
    // maybe in the future you would like to add more verbose messages to invalid
    // fields.
    const createValidationRules = (rules: { [key: string]: boolean }): ValidatorRule[] => {
      return Object.keys(rules).map(ruleKey => {
        return {
          name: ruleKey,
          validator: Validators[ruleKey],
          message: ValidationService.getValidatorErrorMessage(ruleKey)
        };
      });
    };

    return fields.map(field => {
      const fieldCopy = { ...field };
      const type = determineElementType(fieldCopy.type);
      if (type === 'input') {
        fieldCopy.inputType = field.type;
      }
      fieldCopy.rules = createValidationRules(fieldCopy.rules || []);
      return { ...fieldCopy, type };
    });
  }

  private generateFields(config: FieldConfig[]): FormGroup {
    const form = this.formBuilder.group({});

    config.forEach((field: FieldConfig): void => {
      this.addControlField(field, form);
    });

    return form;
  }

  private addValidationRules(rules: ValidatorRule[]): ValidatorFn {
    if (!rules.length) return null;
    const list = [];
    rules.forEach(rule => {
      list.push(rule.validator);
    });
    return Validators.compose(list);
  }
}
