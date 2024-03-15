import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreNavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: StoreNavbarComponent;
  let fixture: ComponentFixture<StoreNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreNavbarComponent]
    });
    fixture = TestBed.createComponent(StoreNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
