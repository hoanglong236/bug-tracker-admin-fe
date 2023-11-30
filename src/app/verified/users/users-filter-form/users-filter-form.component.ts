import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { inCollectionValidator } from 'src/app/shared/validators/in-collection.directive';

@Component({
  selector: 'users-filter-form',
  templateUrl: './users-filter-form.component.html',
  styleUrls: ['./users-filter-form.component.scss'],
})
export class UsersFilterFormComponent {
  @Output() submitEvent = new EventEmitter<any>();

  protected filterForm = this.formBuilder.group({
    nameOrEmail: [''],
    status: [
      'all',
      [
        Validators.required,
        inCollectionValidator(['all', 'enabled', 'disabled']),
      ],
    ],
    sortField: [
      'id',
      [Validators.required, inCollectionValidator(['id', 'updatedAt'])],
    ],
    sortDescending: [true, [Validators.required]],
  });

  constructor(private readonly formBuilder: FormBuilder) {}

  protected onSubmit = () => {
    if (this.filterForm.invalid) {
      alert('Please enter valid search criteria!');
      return;
    }
    this.submitEvent.emit(this.getSubmitEventData());
  };

  private getSubmitEventData = () => {
    const formValue = this.filterForm.value;
    return {
      nameOrEmail: formValue.nameOrEmail,
      status: formValue.status,
      sortField: formValue.sortField,
      sortDescending: formValue.sortDescending,
    };
  };
}
