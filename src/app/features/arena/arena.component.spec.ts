import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenaComponent } from './arena.component';

describe('FighterArenaComponent', () => {
  let component: ArenaComponent;
  let fixture: ComponentFixture<ArenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArenaComponent],
    });
    fixture = TestBed.createComponent(ArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
