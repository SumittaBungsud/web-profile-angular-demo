import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.sass',
})
export class SkillComponent {
  skills = [
    { name: 'React', logo: 'image/react-2.svg' },
    { name: 'NextJS', logo: 'image/next-js.svg' },
    { name: 'Angular', logo: 'image/angular-icon-1.svg' },
    { name: 'Python', logo: 'image/python-5.svg' },
    { name: 'JavaScript', logo: 'image/javascript-2.svg' },
    { name: 'TypeScript', logo: 'image/typescript.svg' },
    { name: 'HTML', logo: 'image/html-1.svg' },
    { name: 'CSS', logo: 'image/css-3.svg' },
    { name: 'Sass', logo: 'image/sass-1.svg' },
    { name: 'TailwindCSS', logo: 'image/tailwindcss.svg' },
    { name: 'NodeJS', logo: 'image/icons8-nodejs.svg' },
    { name: 'Docker', logo: 'image/docker-4.svg' },
    { name: 'Kubernetes', logo: 'image/kubernets.svg' },
    { name: 'Figma', logo: 'image/icons8-figma.svg' },
  ];
}
