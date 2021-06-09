import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80uComponent } from './section80u.component';

describe('Section80uComponent', () => {
  let component: Section80uComponent;
  let fixture: ComponentFixture<Section80uComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section80uComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
