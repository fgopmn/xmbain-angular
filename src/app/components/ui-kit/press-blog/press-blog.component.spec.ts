import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressBlogComponent } from './press-blog.component';

describe('PressBlogComponent', () => {
  let component: PressBlogComponent;
  let fixture: ComponentFixture<PressBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
