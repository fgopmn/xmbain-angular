import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesChildComponent } from './accessories-child.component';

describe('AccessoriesChildComponent', () => {
  let component: AccessoriesChildComponent;
  let fixture: ComponentFixture<AccessoriesChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessoriesChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessoriesChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
