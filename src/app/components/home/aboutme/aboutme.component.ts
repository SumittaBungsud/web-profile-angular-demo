import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.component.html',
  styleUrl: './aboutme.component.sass',
})
export class AboutmeComponent {
  @Output() currenttab = new EventEmitter<string>();
  isShown = false;

  onClick(att: string) {
    this.currenttab.emit(att);
  }

  onClickExpand(id: string) {
    const e = document.getElementById(id);
    if (e) {
      const elenCom = e.querySelector('.subject')?.parentElement;
      if (elenCom) {
        if (this.isShown) {
          elenCom.style.height = '20em';
          this.isShown = !this.isShown;
        } else {
          elenCom.style.height = 'auto';
          this.isShown = !this.isShown;
        }
      }
    }
  }
}
