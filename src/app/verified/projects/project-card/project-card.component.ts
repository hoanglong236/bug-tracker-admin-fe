import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProjectResponseDTO } from 'src/app/core/dto';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project!: ProjectResponseDTO;

  @Output() deleteProjectEvent = new EventEmitter<number>();

  protected deleteProject = () => {
    if (confirm('Are you sure you want to delete this project?')) {
      this.deleteProjectEvent.emit(this.project.id);
    }
  };
}
