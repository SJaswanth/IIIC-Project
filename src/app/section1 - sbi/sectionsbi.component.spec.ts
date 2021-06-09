import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1sbiComponent } from './section1sbi.component';

describe('Section1sbiComponent', () => {
  let component: Section1sbiComponent;
  let fixture: ComponentFixture<Section1sbiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section1sbiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section1sbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
