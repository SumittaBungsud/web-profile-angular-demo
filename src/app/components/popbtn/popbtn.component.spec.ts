import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopbtnComponent } from './popbtn.component';

describe('PopbtnComponent', () => {
  let component: PopbtnComponent;
  let fixture: ComponentFixture<PopbtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopbtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
