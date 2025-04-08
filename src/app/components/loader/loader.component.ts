import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.sass',
})
export class LoaderComponent {
  @Input() isShown = true;

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.isShown = !this.isShown;
  //   }, 4000);
  // }
}
