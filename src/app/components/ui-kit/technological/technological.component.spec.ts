import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologicalComponent } from './technological.component';

describe('TechnologicalComponent', () => {
  let component: TechnologicalComponent;
  let fixture: ComponentFixture<TechnologicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnologicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
