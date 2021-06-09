import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80gComponent } from './section80g.component';

describe('Section80gComponent', () => {
  let component: Section80gComponent;
  let fixture: ComponentFixture<Section80gComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section80gComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80gComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
