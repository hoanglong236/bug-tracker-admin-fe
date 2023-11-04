import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProjectsComponent } from './manage-projects/manage-projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

const routes: Routes = [
  { path: '', component: ManageProjectsComponent },
  { path: 'details/:id', component: ProjectDetailsComponent },
  { path: 'create', component: CreateProjectComponent },
  { path: 'update/:id', component: UpdateProjectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
