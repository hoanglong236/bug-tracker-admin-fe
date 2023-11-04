import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'create-project-component',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent {
  constructor(private readonly router: Router) {}

  protected goToProjectsPage = () => {
    this.router.navigate(['/verified/projects']);
  };
}
