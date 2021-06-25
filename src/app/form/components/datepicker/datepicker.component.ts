import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  field: FieldConfig;
  form: FormGroup;
  required: boolean;

  constructor() { }

  ngOnInit(): void {
    this.required = this.field.rules && this.field.rules.some(({ name }) => name === 'required');
  }

}
