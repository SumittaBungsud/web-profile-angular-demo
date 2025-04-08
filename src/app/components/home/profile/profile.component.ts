import { Component, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-profile',
  imports: [
    AboutmeComponent,
    ExperienceComponent,
    SkillComponent,
    CommonModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass',
})
export class ProfileComponent {
  currentTab = 'about';
  win_middle_xs = window.innerWidth <= 840;
  menuStyle_active = `
    color: #cdd0ed;
    background-color: #6B77EA;
  `;
  menuStyle = `
    color: none;
    background-color: none;
  `;

  setCurrentTab(arrg: string) {
    const ref = document.querySelector('.menu-profile');
    if (ref) {
      // Reset styles
      let ref1 = ref.querySelector("li[title~='" + this.currentTab + "']");
      if (ref1) {
        ref1.setAttribute('style', this.menuStyle);
      }

      // Add tab styles
      let ref2 = ref.querySelector("li[title~='" + arrg + "']");
      if (ref2) {
        ref2.setAttribute('style', this.menuStyle_active);
      }
    }
    this.currentTab = arrg;
  }

  previewHandler() {
    const ref = document.getElementById('preview');
    if (ref) {
      const ref2 = ref.querySelector('div > p');
      const ref3 = ref.querySelector('.button');

      if (ref2 && ref3) {
        ref2.remove();
        ref3.remove();
        ref.style.height = '0';
      }
    }
  }

  onResize() {
    this.win_middle_xs = window.innerWidth <= 840;
  }
}
