import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayForTheRaceSectionComponent } from './stay-for-the-race-section.component';

describe('StayForTheRaceSectionComponent', () => {
  let component: StayForTheRaceSectionComponent;
  let fixture: ComponentFixture<StayForTheRaceSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StayForTheRaceSectionComponent]
    });
    fixture = TestBed.createComponent(StayForTheRaceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
