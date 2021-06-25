import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { BeFieldConfig } from 'src/app/field.interface';
import { DbService } from 'src/app/services/db.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  formConfig: BeFieldConfig[];
  subscription: Subscription;

  public constructor(
    private translate: TranslateService,
    private db: DbService
  ) {
    translate.setDefaultLang('pl');
    translate.use('pl');
  }

  ngOnInit(): void {
    this.subscription = this.db.getFormConfig().subscribe(formConfig => {
      this.formConfig = formConfig;
    });
  }

  onSubmit(form: FormGroup): void {
    console.log(form.value);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

