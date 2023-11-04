import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageProjectsService } from 'src/app/core/services/manage-projects.service';

@Component({
  selector: 'create-project-form',
  templateUrl: './create-project-form.component.html',
  styleUrls: ['./create-project-form.component.scss'],
})
export class CreateProjectFormComponent {
  protected createProjectForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    kind: ['', [Validators.required]],
    architecture: ['', [Validators.required]],
    technology: ['', [Validators.required]],
    language: ['', [Validators.required]],
    database: ['', [Validators.required]],
    note: [''],
  });
  protected firstTimeSubmit = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly manageProjectsService: ManageProjectsService
  ) {}

  protected get nameControl() {
    return this.createProjectForm.get('name')!;
  }

  protected get kindControl() {
    return this.createProjectForm.get('kind')!;
  }

  protected get architectureControl() {
    return this.createProjectForm.get('architecture')!;
  }

  protected get technologyControl() {
    return this.createProjectForm.get('technology')!;
  }

  protected get languageControl() {
    return this.createProjectForm.get('language')!;
  }

  protected get databaseControl() {
    return this.createProjectForm.get('database')!;
  }

  protected onSubmit = () => {
    if (this.createProjectForm.invalid) {
      this.firstTimeSubmit = false;
      return;
    }

    this.manageProjectsService.createProject(
      this.formDataToProjectRequestDTO(),
      this.onCreateProjectSuccess
    );
  };

  private formDataToProjectRequestDTO = () => {
    const formValue = this.createProjectForm.value;
    return {
      name: formValue.name!,
      kind: formValue.kind!,
      architecture: formValue.architecture!,
      technology: formValue.technology!,
      lang: formValue.language!,
      db: formValue.database!,
      note: formValue.note!,
    };
  };

  private onCreateProjectSuccess = () => {
    this.router.navigate(['/verified/projects']);
  };

  protected onClearBtnClick = () => {
    this.createProjectForm.reset();
  };
}
