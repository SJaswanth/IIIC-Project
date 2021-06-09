import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section1icicComponent } from './section1icic.component';

describe(' Section1icicComponent ', () => {
  let component:  Section1icicComponent ;
  let fixture: ComponentFixture< Section1icicComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [  Section1icicComponent  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent( Section1icicComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
