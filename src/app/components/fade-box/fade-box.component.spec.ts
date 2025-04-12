import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadeBoxComponent } from './fade-box.component';

describe('FadeBoxComponent', () => {
  let component: FadeBoxComponent;
  let fixture: ComponentFixture<FadeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FadeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
