import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { ExperienceComponent } from '../experience/experience.component';
import { SkillComponent } from '../skill/skill.component';

@Component({
  selector: 'app-profile',
  imports: [AboutmeComponent, ExperienceComponent, SkillComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass',
})
export class ProfileComponent {
  currentTab = 'about';

  setCurrentTab(arrg: string) {
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
}
