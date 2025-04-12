import { Component } from '@angular/core';
import { PopbtnComponent } from '../popbtn/popbtn.component';
import { FadeBoxComponent } from '../fade-box/fade-box.component';

@Component({
  selector: 'app-contact',
  imports: [PopbtnComponent, FadeBoxComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass',
})
export class ContactComponent {}
