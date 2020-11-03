import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UDRestoComponent } from './udresto.component';

describe('UDRestoComponent', () => {
  let component: UDRestoComponent;
  let fixture: ComponentFixture<UDRestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UDRestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UDRestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
