import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateProjectFormComponent } from './create-project-form/create-project-form.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateProjectFormComponent } from './update-project-form/update-project-form.component';

@NgModule({
  declarations: [
    ManageProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
    CreateProjectComponent,
    CreateProjectFormComponent,
    UpdateProjectComponent,
    UpdateProjectFormComponent,
  ],
  imports: [ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
