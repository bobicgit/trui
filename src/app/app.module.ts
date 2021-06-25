import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DbService } from 'src/app/services/db.service';
import { FormBuilderService } from 'src/app/services/form-builder.service';
import { ValidationService } from 'src/app/services/validation.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { InputComponent } from './form/components/input/input.component';
import { RadioComponent } from './form/components/radio/radio.component';
import { SelectComponent } from './form/components/select/select.component';
import { DatepickerComponent } from './form/components/datepicker/datepicker.component';
import { CheckboxComponent } from './form/components/checkbox/checkbox.component';
import { DynamicFieldDirective } from 'src/app/form/dynamic-field/dynamic-field.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AcceptanceCheckboxesComponent } from 'src/app/form/components/acceptanceCheckboxes/acceptance-checkboxes.component';
import { CheckboxListComponent } from 'src/app/form/components/checkboxList/checkbox-list.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    InputComponent,
    RadioComponent,
    SelectComponent,
    DatepickerComponent,
    CheckboxComponent,
    AcceptanceCheckboxesComponent,
    CheckboxListComponent,
    DynamicFieldDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [DbService, FormBuilderService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
};