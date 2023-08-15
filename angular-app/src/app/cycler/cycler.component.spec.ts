import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CyclerComponent } from './cycler.component';

describe('CyclerComponent', () => {
  let component: CyclerComponent;
  let fixture: ComponentFixture<CyclerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CyclerComponent]
    });
    fixture = TestBed.createComponent(CyclerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
