import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRatingComponent } from './insert-rating.component';

describe('InsertRatingComponent', () => {
  let component: InsertRatingComponent;
  let fixture: ComponentFixture<InsertRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertRatingComponent]
    });
    fixture = TestBed.createComponent(InsertRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
