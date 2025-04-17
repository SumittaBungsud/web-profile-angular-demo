import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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

  ngOnInit() {
    console.log('app reload');
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
}
