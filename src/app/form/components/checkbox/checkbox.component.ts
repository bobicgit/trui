import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  field: FieldConfig;
  form: FormGroup;
  fieldControl: AbstractControl;
  required: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
