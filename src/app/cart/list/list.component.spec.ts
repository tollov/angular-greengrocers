import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartListComponent } from './list.component';

describe('ListComponent', () => {
  let component: CartListComponent;
  let fixture: ComponentFixture<CartListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartListComponent]
    });
    fixture = TestBed.createComponent(CartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
