import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section80eeComponent } from './section80ee.component';

describe('Section80eeComponent', () => {
  let component: Section80eeComponent;
  let fixture: ComponentFixture<Section80eeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Section80eeComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section80eeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
