import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTypeCostComponent } from './card-type-cost.component';

describe('CardTypeCostComponent', () => {
  let component: CardTypeCostComponent;
  let fixture: ComponentFixture<CardTypeCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardTypeCostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTypeCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
