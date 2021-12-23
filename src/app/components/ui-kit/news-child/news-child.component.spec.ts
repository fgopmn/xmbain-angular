import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsChildComponent } from './news-child.component';

describe('NewsChildComponent', () => {
  let component: NewsChildComponent;
  let fixture: ComponentFixture<NewsChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
