import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLinksTwoComponent } from './nav-links-two.component';

describe('NavLinksTwoComponent', () => {
  let component: NavLinksTwoComponent;
  let fixture: ComponentFixture<NavLinksTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavLinksTwoComponent]
    });
    fixture = TestBed.createComponent(NavLinksTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
