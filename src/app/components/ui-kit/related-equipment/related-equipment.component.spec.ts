import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedEquipmentComponent } from './related-equipment.component';

describe('RelatedEquipmentComponent', () => {
  let component: RelatedEquipmentComponent;
  let fixture: ComponentFixture<RelatedEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
