import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRestoComponent } from './all-resto.component';

describe('AllRestoComponent', () => {
  let component: AllRestoComponent;
  let fixture: ComponentFixture<AllRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
