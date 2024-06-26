import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
  search: FormControl<string | null> = new FormControl('');
  checkbox: FormControl<boolean | null> = new FormControl(false);

  // TODO: question - how to dynamically add more inputs to the form?

  // TODO 3: after user presses Enter on input and the form is invalid - it should have a red border
  // TODO 4: only allow submit if search field has a valid value and checkbox is selected
  onSubmit(event: Event) {
    event.preventDefault();
    if (this.search.value) {
      this.enter.emit(this.search.value);
    }
  }
}
