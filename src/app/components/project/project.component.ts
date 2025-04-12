import { Component } from '@angular/core';
import { PopbtnComponent } from '../popbtn/popbtn.component';
import { FadeBoxComponent } from '../fade-box/fade-box.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  imports: [FontAwesomeModule, PopbtnComponent, FadeBoxComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.sass',
})
export class ProjectComponent {
  faGithub = faGithub;
  faLink = faArrowUpRightFromSquare;
}
