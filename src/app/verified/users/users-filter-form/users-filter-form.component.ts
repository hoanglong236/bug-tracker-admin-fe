import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'users-filter-form',
  templateUrl: './users-filter-form.component.html',
  styleUrls: ['./users-filter-form.component.scss'],
})
export class UsersFilterFormComponent {
  protected filterForm = this.formBuilder.group({
    nameOrEmail: ['', [Validators.required]],
    enableStatus: [
      'all',
      [Validators.required, Validators.pattern('all|enabled|disabled')],
    ],
    sortBy: ['', Validators.required],
  });
  protected firstTimeSubmit = true;

  @Output() submitEvent = new EventEmitter();

  constructor(private readonly formBuilder: FormBuilder) {}

  protected onSubmit = () => {};
}
