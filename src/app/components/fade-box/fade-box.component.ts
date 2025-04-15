import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-fade-box',
  imports: [],
  templateUrl: './fade-box.component.html',
  styleUrl: './fade-box.component.sass',
})
export class FadeBoxComponent implements AfterViewInit {
  @ViewChild('animatedFade') boxRef!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // console.log(entry);
        if (entry.isIntersecting) {
          this.boxRef.nativeElement.classList.add('visible');
          observer.unobserve(this.boxRef.nativeElement); // stop repeating
        }
      });
    });

    observer.observe(this.boxRef.nativeElement);
  }
}
