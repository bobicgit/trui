import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  field: FieldConfig;
  form: FormGroup;
  fieldControl: AbstractControl;
  required: boolean;

  constructor() { }

  ngOnInit(): void {
    this.fieldControl = this.form.get(this.field.name);
    this.required = this.field.rules && this.field.rules.some(({ name }) => name === 'required');
  }
}
