import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80cComponent } from './section80c.component';

describe('Section80cComponent', () => {
  let component: Section80cComponent;
  let fixture: ComponentFixture<Section80cComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section80cComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80cComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
