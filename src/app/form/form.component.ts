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

  search: FormControl<string | null> = new FormControl('');

  onEnter(event: Event) {
    event.preventDefault();
    if (this.search.value) {
      this.enter.emit(this.search.value);
    }
  }
}
