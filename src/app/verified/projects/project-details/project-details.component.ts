import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManageProjectsService } from 'src/app/core/services/manage-projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly manageProjectsService: ManageProjectsService
  ) {}
}
