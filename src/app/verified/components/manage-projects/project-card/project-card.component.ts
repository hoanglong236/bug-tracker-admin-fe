import { Component, Input } from '@angular/core';
import { ProjectResponseDTO } from 'src/app/core/dto';

@Component({
  selector: 'project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss'],
})
export class ProjectCardComponent {
  @Input() project?: ProjectResponseDTO;
}
