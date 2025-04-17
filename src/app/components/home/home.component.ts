import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp } from '@fortawesome/free-solid-svg-icons';
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
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent implements AfterViewInit {
  faArrowUp = faArrowUp;
  currentBox = '';
  @ViewChild('profileBox', { read: ElementRef }) profBox!: ElementRef;
  @ViewChild('projectBox', { read: ElementRef }) projBox!: ElementRef;
  @ViewChild('contactBox', { read: ElementRef }) contBox!: ElementRef;
  @ViewChild('profileTrack') profTrack!: ElementRef;
  @ViewChild('projectTrack') projTrack!: ElementRef;
  @ViewChild('contactTrack') contTrack!: ElementRef;

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

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      async (entries) => {
        await entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            await this.removeCurrentStyle();
            // console.log(observer, entry.intersectionRatio);
            if (entry.target.localName.includes('profile')) {
              this.profTrack.nativeElement.classList.add('expand');
              this.currentBox = 'Profile';
            } else if (entry.target.localName.includes('project')) {
              this.projTrack.nativeElement.classList.add('expand');
              this.currentBox = 'Project';
            } else if (entry.target.localName.includes('contact')) {
              this.contTrack.nativeElement.classList.add('expand');
              this.currentBox = 'Contact';
            }
            // observer.unobserve(this.boxFade.nativeElement); // stop repeating
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(this.profBox.nativeElement);
    observer.observe(this.projBox.nativeElement);
    observer.observe(this.contBox.nativeElement);
  }

  removeCurrentStyle() {
    if (this.currentBox == 'Profile') {
      this.profTrack.nativeElement.classList.remove('expand');
    } else if (this.currentBox == 'Project') {
      this.projTrack.nativeElement.classList.remove('expand');
    } else if ((this.currentBox = 'Contact')) {
      this.contTrack.nativeElement.classList.remove('expand');
    }
  }
}
