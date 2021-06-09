import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1hdfcComponent } from './section1hdfc.component';

describe('Section1hdfcComponent', () => {
  let component: Section1hdfcComponent;
  let fixture: ComponentFixture<Section1hdfcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1hdfcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section1hdfcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
