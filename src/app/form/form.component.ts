import { Component, EventEmitter, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent {
  @Output() enter: EventEmitter<string> = new EventEmitter<string>();

  // TODO 1: add form group with controls for search and checkbox
  // TODO 2: add validators to search: cannot be empty, length should be greater than 3 and it should contain at least 2 words
  form = new FormGroup({
    search: new FormControl('', [Validators.required, Validators.minLength(3), customValidator()]),
    checkbox: new FormControl(false, [Validators.requiredTrue]),
  });

  get search() {
    return this.form.get('search');
  }

  get checkbox() {
    return this.form.get('checkbox');
  }

  // TODO: question - how to dynamically add more inputs to the form?

  // TODO 3: only allow submit if search field has a valid value and checkbox is selected
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.enter.emit(this.search!.value!);
    }
  }
}

export function customValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isLongerThan2Words = control.value.length > 0 && control.value.trim().split(' ').length > 1;
    return isLongerThan2Words ? null : { notEnoughWords: { value: control.value } };
  };
}
