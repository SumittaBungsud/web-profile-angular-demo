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
}
