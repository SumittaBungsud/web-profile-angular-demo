import { Component } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-home',
  imports: [ProfileComponent, ProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {}
