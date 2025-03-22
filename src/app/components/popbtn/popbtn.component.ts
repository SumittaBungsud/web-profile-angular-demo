import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popbtn',
  imports: [],
  templateUrl: './popbtn.component.html',
  styleUrl: './popbtn.component.sass',
})
export class PopbtnComponent {
  @Input() txt = '';
  @Input() link = '';
  @Input() backgnd = '#cecece';
  @Input() highl = '#565656';
}
