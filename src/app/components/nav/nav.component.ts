import { Component, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('navbar') navRef!: ElementRef;
  win_middle_xs = window.innerWidth <= 840;
  faEllipsisV = faEllipsisV;
  faXmark = faXmark;
  isExpand = false;
  scrollHeight = 0;

  onResize() {
    this.win_middle_xs = window.innerWidth <= 840;
  }

  onScrollDown() {
    if (this.scrollHeight > window.scrollY) {
      this.navRef.nativeElement.style.height = '70px';
    } else {
      this.navRef.nativeElement.style.height = '0';
    }
    this.scrollHeight = window.scrollY;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
