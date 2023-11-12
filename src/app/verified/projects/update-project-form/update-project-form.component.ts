import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectResponseDTO } from 'src/app/core/dto';
import { ProjectService } from 'src/app/core/services/project.service';

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
    closeStatus: [false, [Validators.required]],
    note: [''],
  });
  protected firstTimeSubmit = true;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly projectService: ProjectService
  ) {}

  ngOnInit(): void {
    const projectId = parseInt(this.route.snapshot.paramMap.get('id') ?? '');
    if (isNaN(projectId)) {
      alert('Invalid url parameter');
      this.router.navigate(['/verified/projects']);
      return;
    }
    this.projectService.getProject(
      projectId,
      this.onGetProjectSuccess,
      this.onGetProjectError
    );
  }

  private onGetProjectSuccess = (value: ProjectResponseDTO) => {
    this.project = value;
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
      closeStatus: this.project.closeFlag,
      note: this.project.note,
    });
  };

  private onGetProjectError = (err: any) => {
    alert(err.error.message);
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

  protected get closeStatusControl() {
    return this.updateProjectForm.get('closeStatus')!;
  }

  protected get databaseControl() {
    return this.updateProjectForm.get('database')!;
  }

  protected onSubmit = () => {
    if (this.updateProjectForm.invalid) {
      this.firstTimeSubmit = false;
      return;
    }

    this.projectService.updateProject(
      this.project.id,
      this.getProjectRequestDTO(),
      this.onUpdateProjectSuccess,
      this.onUpdateProjectError
    );
  };

  private getProjectRequestDTO = () => {
    const formValue = this.updateProjectForm.value;
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

  private onUpdateProjectSuccess = () => {
    this.router.navigate(['/verified/projects']);
  };

  private onUpdateProjectError = (err: any) => {
    alert(err.error.message);
  };

  protected onResetBtnClick = () => {
    this.updateProjectForm.reset();
    this.fillFormData();
  };
}
