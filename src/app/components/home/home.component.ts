import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  imports: [
    ProfileComponent,
    ProjectComponent,
    ContactComponent,
    FontAwesomeModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  socials = [
    {
      id: 0,
      link: 'https://github.com/SumittaBungsud',
      icon: faGithub,
    },
    {
      id: 1,
      link: 'https://www.linkedin.com/in/sumitta-bungsud-315a04215/',
      icon: faLinkedin,
    },
    {
      id: 2,
      link: '#contact',
      icon: faEnvelope,
    },
  ];
}
