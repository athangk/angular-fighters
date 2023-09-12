import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFighterDialogComponent } from './create-fighter-dialog.component';

describe('CreateFighterDialogComponent', () => {
  let component: CreateFighterDialogComponent;
  let fixture: ComponentFixture<CreateFighterDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFighterDialogComponent],
    });
    fixture = TestBed.createComponent(CreateFighterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
