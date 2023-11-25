import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { CreateProjectFormComponent } from './create-project-form/create-project-form.component';

@NgModule({
  declarations: [
    ManageProjectsComponent,
    ProjectCardComponent,
    CreateProjectComponent,
    CreateProjectFormComponent,
  ],
  imports: [ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
