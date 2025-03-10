import { Component } from '@angular/core';
import { ExpItemComponent } from './exp-item/exp-item.component';

@Component({
  selector: 'app-exp',
  imports: [ExpItemComponent],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.sass',
})
export class ExperienceComponent {
  expType = 'work';

  setExpType(type: string) {
    this.expType = type;
  }
}
