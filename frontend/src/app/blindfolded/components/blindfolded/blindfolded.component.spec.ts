import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlindfoldedComponent } from './blindfolded.component';

describe('BlindfoldedComponent', () => {
  let component: BlindfoldedComponent;
  let fixture: ComponentFixture<BlindfoldedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlindfoldedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlindfoldedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
