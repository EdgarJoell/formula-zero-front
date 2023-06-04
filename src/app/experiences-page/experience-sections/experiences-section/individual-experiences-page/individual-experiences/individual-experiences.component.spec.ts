import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualExperiencesComponent } from './individual-experiences.component';

describe('IndividualExperiencesComponent', () => {
  let component: IndividualExperiencesComponent;
  let fixture: ComponentFixture<IndividualExperiencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualExperiencesComponent]
    });
    fixture = TestBed.createComponent(IndividualExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
