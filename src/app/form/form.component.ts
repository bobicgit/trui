import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BeFieldConfig, FieldConfig } from 'src/app/field.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  fieldsConfig: FieldConfig[];

  @Input() config: BeFieldConfig[];
  @Output() submitHandler?: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(
    private formsBuilder: FormBuilderService
  ) { }

  ngOnInit(): void {
    const { form, fieldsConfig } = this.formsBuilder.build(this.config);
    this.form = form;
    this.fieldsConfig = fieldsConfig;
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (this.submitHandler) {
      this.submitHandler.emit(this.form);
    } else {
      console.log(this.form.value);
    }
  }
}
