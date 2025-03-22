import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {
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
