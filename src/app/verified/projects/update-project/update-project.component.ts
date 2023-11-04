import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'update-project-component',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.scss'],
})
export class UpdateProjectComponent {
  constructor(private readonly router: Router) {}

  protected goToProjectsPage = () => {
    this.router.navigate(['/verified/projects']);
  };
}
