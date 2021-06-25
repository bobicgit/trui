import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { BeFieldConfig } from 'src/app/field.interface';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  // I've changed nip and phone filed type to number. I do not want someone to put letters there.
  formConfig: BeFieldConfig[] = [
    { type: 'text', name: 'fullname', label: 'Nazwa firmy / Imię i nazwisko', placeholder: 'np. Apple', rules: { required: true } },
    { type: 'number', name: 'nip', label: 'Numer NIP', placeholder: '123-45-67-890' },
    { type: 'email', name: 'email', label: 'E-mail', placeholder: 'np. example@example.com', rules: { required: true, email: true } },
    { type: 'number', name: 'phone', label: 'Numer telefonu', placeholder: '123 456 789' },
    // tslint:disable-next-line: max-line-length
    { type: 'select', name: 'subject', label: 'Temat', options: [{ value: 'collaboration', label: 'Współpraca' }, { value: 'question', label: 'Pytanie' }, { value: 'complaint', label: 'Reklamacja' }], rules: { required: true } },
    // tslint:disable-next-line: max-line-length
    { type: 'radio', name: 'question', label: 'Czy posiadasz prawo jazdy kat. B?', options: [{ value: 'yes', label: 'Tak' }, { value: 'no', label: 'Nie' }] },
    { type: 'date', name: 'dateofbirth', label: 'Data urodzenia', placeholder: 'Kiedy się urodziłeś?' },
    { type: 'textarea', name: 'message', label: 'Treść wiadomości', placeholder: 'Dzień dobry' }
  ];

  constructor() { }

  getFormConfig(): Observable<BeFieldConfig[]> {
    return of(this.formConfig);
  }
}
