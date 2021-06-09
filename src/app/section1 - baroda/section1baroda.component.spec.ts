import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1barodaComponent } from './section1baroda.component';

describe('Section1barodaComponent', () => {
  let component: Section1barodaComponent;
  let fixture: ComponentFixture<Section1barodaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1barodaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section1barodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
