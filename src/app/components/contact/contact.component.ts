import { Component } from '@angular/core';
import { PopbtnComponent } from '../popbtn/popbtn.component';
import { FadeBoxComponent } from '../fade-box/fade-box.component';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact',
  imports: [PopbtnComponent, FadeBoxComponent, FontAwesomeModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass',
})
export class ContactComponent {
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
