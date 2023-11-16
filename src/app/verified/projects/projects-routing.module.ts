import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

const routes: Routes = [
  { path: '', component: ManageProjectsComponent },
  { path: 'create', component: CreateProjectComponent },
  { path: 'update/:id', component: UpdateProjectComponent },
  { path: 'details/:id', component: ProjectDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
