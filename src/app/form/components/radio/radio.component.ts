import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent implements OnInit {

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
