import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEllipsisV, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, FontAwesomeModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.sass',
})
export class NavComponent {
  win_middle_xs = window.innerWidth <= 840;
  faEllipsisV = faEllipsisV;
  faXmark = faXmark;
  isExpand = false;

  onResize() {
    this.win_middle_xs = window.innerWidth <= 840;
  }
}
