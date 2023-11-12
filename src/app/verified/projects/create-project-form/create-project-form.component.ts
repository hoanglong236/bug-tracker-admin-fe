import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';

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
    closeStatus: [false, [Validators.required]],
    note: [''],
  });
  protected firstTimeSubmit = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly projectService: ProjectService
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

  protected get closeStatusControl() {
    return this.createProjectForm.get('closeStatus')!;
  }

  protected onSubmit = () => {
    if (this.createProjectForm.invalid) {
      this.firstTimeSubmit = false;
      return;
    }

    this.projectService.createProject(
      this.getProjectRequestDTO(),
      this.onCreateProjectSuccess,
      this.onCreateProjectError
    );
  };

  private getProjectRequestDTO = () => {
    const formValue = this.createProjectForm.value;
    return {
      name: formValue.name!,
      kind: formValue.kind!,
      architecture: formValue.architecture!,
      technology: formValue.technology!,
      lang: formValue.language!,
      db: formValue.database!,
      closeFlag: formValue.closeStatus!,
      note: formValue.note!,
    };
  };

  private onCreateProjectSuccess = () => {
    this.router.navigate(['/verified/projects']);
  };

  private onCreateProjectError = (err: any) => {
    alert(err.error.message);
  };

  protected onClearBtnClick = () => {
    this.createProjectForm.reset();
  };
}
