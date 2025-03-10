import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  imports: [FontAwesomeModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.sass',
})
export class ProjectComponent {
  faGithub = faGithub;
  faLink = faArrowUpRightFromSquare;
}
