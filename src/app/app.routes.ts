import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Sumitta Bungsud',
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    title: 'Projects | Sumitta B.',
  },
];
