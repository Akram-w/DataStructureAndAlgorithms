import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NthLargestComponent } from './nth-largest.component';

describe('NthLargestComponent', () => {
  let component: NthLargestComponent;
  let fixture: ComponentFixture<NthLargestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NthLargestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NthLargestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
