import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullRangeComponent } from './full-range.component';

describe('FullRangeComponent', () => {
  let component: FullRangeComponent;
  let fixture: ComponentFixture<FullRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
