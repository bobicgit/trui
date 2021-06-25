import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckboxComponent } from 'src/app/form/components/checkbox/checkbox.component';
import { DatepickerComponent } from 'src/app/form/components/datepicker/datepicker.component';
import { InputComponent } from 'src/app/form/components/input/input.component';
import { RadioComponent } from 'src/app/form/components/radio/radio.component';
import { SelectComponent } from 'src/app/form/components/select/select.component';
import { FieldConfig } from '../../field.interface';

const fieldsComponents = {
    input: InputComponent,
    select: SelectComponent,
    radio: RadioComponent,
    date: DatepickerComponent,
    // checkbox: CheckboxComponent
};

@Directive({
    selector: '[appDynamicField]'
})
export class DynamicFieldDirective implements OnInit {
    @Input() field: FieldConfig;
    @Input() form: FormGroup;

    fieldRef: ComponentRef<any>;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver,
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit(): void {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
            fieldsComponents[this.field.type]
        );
        this.fieldRef = this.viewContainerRef.createComponent(componentFactory);
        this.fieldRef.instance.field = this.field;
        this.fieldRef.instance.form = this.form;
    }
}
