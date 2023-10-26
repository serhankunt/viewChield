import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Test2TestComponent } from './test2-test.component';

describe('Test2TestComponent', () => {
  let component: Test2TestComponent;
  let fixture: ComponentFixture<Test2TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Test2TestComponent]
    });
    fixture = TestBed.createComponent(Test2TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
