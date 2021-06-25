import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FieldConfig } from 'src/app/field.interface';

@Component({
  selector: 'app-checkbox-list',
  templateUrl: './checkbox-list.component.html',
  styleUrls: ['./checkbox-list.component.scss']
})
export class CheckboxListComponent implements OnInit {

  constructor() { }

  @Input() form: FormGroup;
  @Input() checkboxes: FieldConfig[];
  @Input() selectAllText?: string;

  allComplete = false;
  boxControls: AbstractControl[] = [];
  requiredMap: { [key: string]: boolean } = {};

  ngOnInit(): void {
    this.checkboxes.forEach(({ name, rules }) => {
      this.boxControls.push(this.form.get(name));
      this.requiredMap[name] = rules.some(({ name: ruleName }) => ruleName === 'required');
    });
  }

  updateAllComplete(): void {
    this.allComplete = this.boxControls.length
      && this.boxControls.map(({ value }) => value).every(value => value);
  }

  someComplete(): boolean {
    if (!this.boxControls.length) return;

    return this.boxControls
      .map(({ value }) => value)
      .filter(value => value === true).length > 0
      && !this.allComplete;
  }

  setAll(completed: boolean): void {
    this.allComplete = completed;
    if (!this.boxControls.length) return;
    this.boxControls.forEach(control => {
      control.setValue(completed);
    });
  }

}
