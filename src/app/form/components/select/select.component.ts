import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  field: FieldConfig;
  form: FormGroup;
  fieldControl: AbstractControl;
  required: boolean;

  constructor() { }

  ngOnInit(): void {
    this.required = this.field.rules && this.field.rules.some(({ name }) => name === 'required');
  }

}
