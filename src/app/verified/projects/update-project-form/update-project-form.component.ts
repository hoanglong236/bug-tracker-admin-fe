import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectResponseDTO } from 'src/app/core/dto';
import { ManageProjectsService } from 'src/app/core/services/manage-projects.service';

@Component({
  selector: 'update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.scss'],
})
export class UpdateProjectFormComponent implements OnInit {
  protected loading: boolean = true;
  private project!: ProjectResponseDTO;

  protected updateProjectForm = this.formBuilder.group({
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
    private readonly route: ActivatedRoute,
    private readonly manageProjectsService: ManageProjectsService
  ) {}

  ngOnInit(): void {
    const projectId = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    if (isNaN(projectId)) {
      alert('Invalid url parameter');
      this.router.navigate(['/verified/projects']);
      return;
    }
    this.manageProjectsService.getProject(
      projectId,
      this.onGetProjectSuccess,
      this.onGetProjectFailure
    );
  }

  private onGetProjectSuccess = (data: ProjectResponseDTO) => {
    this.project = data;
    this.fillFormData();

    this.loading = false;
  };

  private fillFormData = () => {
    this.updateProjectForm.setValue({
      name: this.project.name,
      kind: this.project.kind,
      architecture: this.project.architecture,
      technology: this.project.technology,
      database: this.project.db,
      language: this.project.lang,
      note: this.project.note,
    });
  };

  private onGetProjectFailure = (err: any) => {
    alert('Project not found!');
    this.router.navigate(['/verified/projects']);
  };

  protected get nameControl() {
    return this.updateProjectForm.get('name')!;
  }

  protected get kindControl() {
    return this.updateProjectForm.get('kind')!;
  }

  protected get architectureControl() {
    return this.updateProjectForm.get('architecture')!;
  }

  protected get technologyControl() {
    return this.updateProjectForm.get('technology')!;
  }

  protected get languageControl() {
    return this.updateProjectForm.get('language')!;
  }

  protected get databaseControl() {
    return this.updateProjectForm.get('database')!;
  }

  protected onSubmit = () => {
    if (this.updateProjectForm.invalid) {
      this.firstTimeSubmit = false;
      return;
    }

    this.manageProjectsService.updateProject(
      this.project!.id,
      this.formDataToProjectRequestDTO(),
      this.onCreateProjectSuccess
    );
  };

  private formDataToProjectRequestDTO = () => {
    const formValue = this.updateProjectForm.value;
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

  protected onResetBtnClick = () => {
    this.updateProjectForm.reset();
    this.fillFormData();
  };
}