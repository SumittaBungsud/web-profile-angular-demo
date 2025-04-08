import { Component } from '@angular/core';
import {
  RouterOutlet,
  Router,
  Event as RouterEvent,
  NavigationStart,
  // NavigationEnd,
  // NavigationCancel,
  // NavigationError,
} from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  loading = true;

  constructor(private router: Router) {
    this.router.events.subscribe((e: RouterEvent) => {
      this.navigationInterceptor(e);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    }
  }
}
