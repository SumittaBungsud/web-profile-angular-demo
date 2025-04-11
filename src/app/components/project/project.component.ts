import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PopbtnComponent } from '../popbtn/popbtn.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-project',
  imports: [FontAwesomeModule, PopbtnComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.sass',
})
export class ProjectComponent implements AfterViewInit {
  faGithub = faGithub;
  faLink = faArrowUpRightFromSquare;

  @ViewChild('animatedFade') boxRef!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          this.boxRef.nativeElement.classList.add('visible');
          observer.unobserve(this.boxRef.nativeElement); // ถ้าไม่อยากให้ทำซ้ำ
        }
      });
    });

    observer.observe(this.boxRef.nativeElement);
  }
}
