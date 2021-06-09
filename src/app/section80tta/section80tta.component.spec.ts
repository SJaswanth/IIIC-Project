import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80ttaComponent } from './section80tta.component';

describe('Section80ttaComponent', () => {
  let component: Section80ttaComponent;
  let fixture: ComponentFixture<Section80ttaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section80ttaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80ttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
