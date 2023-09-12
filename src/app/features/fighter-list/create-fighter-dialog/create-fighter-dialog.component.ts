import { Component, Inject, Optional } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  Fighter,
  FighterImageList,
  FighterRegistration,
} from 'src/app/interfaces/fighters.interfaces';
import { Validators } from '@angular/forms';
import { SharedDisplayModule } from '../../../shared/modules/mat-display-shared.module';
import { SharedEditModule } from 'src/app/shared/modules/mat-edit-shared.module';

@Component({
  selector: 'app-create-fighter-dialog',
  templateUrl: './create-fighter-dialog.component.html',
  standalone: true,
  imports: [SharedDisplayModule, SharedEditModule],
  styleUrls: ['./create-fighter-dialog.component.scss'],
})
export class CreateFighterDialogComponent {
  fighterForm!: FormGroup<FighterRegistration>;
  fighter: Partial<Fighter>;

  fighterImageList: FighterImageList[] = [
    { value: 'orange_fighter.svg', option: 'orange' },
    { value: 'purple_fighter.svg', option: 'purple' },
    { value: 'red_fighter.svg', option: 'red' },
    { value: 'blue_fighter.svg', option: 'blue' },
    { value: 'ocean_fighter.svg', option: 'ocean' },
    { value: 'pink_fighter.svg', option: 'pink' },
    { value: 'yellow_fighter.svg', option: 'yellow' },
    { value: 'purple_fighter.svg', option: 'purple' },
  ];
  selected: string = '';

  private initializeForm(): void {
    this.fighterForm = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(4)]),
      image: this.fb.control('', [Validators.required]),
      kick: this.fb.control(10, [Validators.required, Validators.min(10)]),
      fist: this.fb.control(10, [Validators.required, Validators.min(10)]),
      weapon: this.fb.control(10, [Validators.required, Validators.min(10)]),
      story: this.fb.control('', [
        Validators.required,
        Validators.minLength(20),
      ]),
    });
  }

  constructor(
    private fb: NonNullableFormBuilder,
    @Optional() public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,

    @Optional() @Inject(MAT_DIALOG_DATA) public data: Fighter
  ) {
    this.initializeForm();
    this.fighter = {
      name: '',
      image: '',
      stats: {
        kick: 0,
        weapon: 0,
        fist: 0,
      },
      story: '',
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.fighterForm.status === 'VALID') {
      this.fighter.name = this.fighterForm.get('name')!.value;
      this.fighter.image = this.fighterForm.get('image')!.value;
      const stats = {
        kick: this.fighterForm.get('kick')!.value,
        weapon: this.fighterForm.get('weapon')!.value,
        fist: this.fighterForm.get('fist')!.value,
      };
      (this.fighter.story = this.fighterForm.get('story')!.value),
        (this.fighter.stats = stats);
      this.dialogRef.close(this.fighter);
    }

    return;
  }

  protected get fighterFormControl() {
    return this.fighterForm.controls;
  }
}

export class DialogOverviewExampleDialog {
  selected: string = '';

  fighter: Partial<Fighter> = {
    name: '',
    image: '',
    stats: {
      kick: 0,
      weapon: 0,
      fist: 0,
    },
    story: '',
  };

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Fighter
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirm() {
    this.dialogRef.close(this.fighter);
  }
}
