import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntoSectionComponent } from './into-section.component';

describe('IntoSectionComponent', () => {
  let component: IntoSectionComponent;
  let fixture: ComponentFixture<IntoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntoSectionComponent]
    });
    fixture = TestBed.createComponent(IntoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
