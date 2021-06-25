import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { BeFieldConfig, FieldConfig } from 'src/app/field.interface';
import { FormBuilderService } from 'src/app/services/form-builder.service';

let acceptanceCheckboxes: BeFieldConfig[] = [
  { type: 'checkbox', name: 'data-permission', value: false, rules: { required: true } },
  { type: 'checkbox', name: 'contact-permission', value: false }
];

@Component({
  selector: 'app-acceptance-checkboxes',
  templateUrl: './acceptance-checkboxes.component.html',
  styleUrls: ['./acceptance-checkboxes.component.scss']
})

export class AcceptanceCheckboxesComponent implements OnInit {
  @Input() form: FormGroup;

  boxConfig: FieldConfig[];
  transKeys: string[] = [];

  constructor(
    private formsBuilder: FormBuilderService,
    private translate: TranslateService
  ) {
    acceptanceCheckboxes.forEach(({ name }) => this.transKeys.push(`form.checkbox.${name}`));
  }

  ngOnInit(): void {
    if (!this.form) return;
    this.translate.get(this.transKeys).subscribe((labels: { [key: string]: string }): void => {
      acceptanceCheckboxes = acceptanceCheckboxes.map((box, idx) => ({ ...box, label: Object.values(labels)[idx] }));
      this.boxConfig = this.formsBuilder.transformConfig(acceptanceCheckboxes);
      this.boxConfig.forEach(checkbox => {
        this.formsBuilder.addControlField(checkbox, this.form);
      });
    });
  }
}
