import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from '../project/project.component';
import { ContactComponent } from '../contact/contact.component';
import { FadeBoxComponent } from '../fade-box/fade-box.component';

@Component({
  selector: 'app-home',
  imports: [
    ProfileComponent,
    ProjectComponent,
    ContactComponent,
    FadeBoxComponent,
    FontAwesomeModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {
  faArrowUp = faArrowUp;

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

  homeSect = [
    { name: 'Profile', isViewed: false },
    { name: 'Project', isViewed: false },
    { name: 'Contact', isViewed: false },
  ];
}
