import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FighterDetailComponent } from './fighter-detail.component';

describe('FighterDetailComponent', () => {
  let component: FighterDetailComponent;
  let fixture: ComponentFixture<FighterDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FighterDetailComponent],
    });
    fixture = TestBed.createComponent(FighterDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
