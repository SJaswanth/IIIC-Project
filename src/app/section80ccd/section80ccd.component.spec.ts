import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80ccdComponent } from './section80ccd.component';

describe('Section80ccdComponent', () => {
  let component: Section80ccdComponent;
  let fixture: ComponentFixture<Section80ccdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section80ccdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80ccdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
