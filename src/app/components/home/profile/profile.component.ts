import { Component } from '@angular/core';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-profile',
  imports: [AboutmeComponent, ExperienceComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.sass',
})
export class ProfileComponent {
  currentTab = 'about';

  setCurrentTab(arrg: string) {
    this.currentTab = arrg;
  }
}
