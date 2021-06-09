import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccurancesComponent } from './occurances.component';

describe('OccurancesComponent', () => {
  let component: OccurancesComponent;
  let fixture: ComponentFixture<OccurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccurancesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
