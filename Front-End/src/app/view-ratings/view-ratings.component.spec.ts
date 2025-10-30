import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRatingsComponent } from './view-ratings.component';

describe('ViewRatingsComponent', () => {
  let component: ViewRatingsComponent;
  let fixture: ComponentFixture<ViewRatingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewRatingsComponent]
    });
    fixture = TestBed.createComponent(ViewRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
