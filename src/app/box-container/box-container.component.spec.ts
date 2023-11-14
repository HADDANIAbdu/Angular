import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxContainerComponent } from './box-container.component';

describe('BoxContainerComponent', () => {
  let component: BoxContainerComponent;
  let fixture: ComponentFixture<BoxContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxContainerComponent]
    });
    fixture = TestBed.createComponent(BoxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
