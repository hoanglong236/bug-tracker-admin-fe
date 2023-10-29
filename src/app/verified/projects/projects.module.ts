import { NgModule } from '@angular/core';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ProjectCardComponent } from './manage-projects/project-card/project-card.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

@NgModule({
  declarations: [
    ManageProjectsComponent,
    ProjectCardComponent,
    ProjectDetailsComponent,
  ],
  imports: [ProjectsRoutingModule, SharedModule],
})
export class ProjectsModule {}
