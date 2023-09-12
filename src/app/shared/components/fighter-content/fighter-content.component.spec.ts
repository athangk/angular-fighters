import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterContentComponent } from './fighter-content.component';

describe('FighterContentComponent', () => {
  let component: FighterContentComponent;
  let fixture: ComponentFixture<FighterContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FighterContentComponent],
    });
    fixture = TestBed.createComponent(FighterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
