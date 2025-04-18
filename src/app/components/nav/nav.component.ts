import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, FontAwesomeModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {
  win_middle_xs = window.innerWidth <= 840;
  faEllipsisV = faEllipsisV;
  isExpand = false;

  onResize() {
    this.win_middle_xs = window.innerWidth <= 840;
  }
}
