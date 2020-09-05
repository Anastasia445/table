import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-changee-people',
  templateUrl: './changee-people.component.html',
  styleUrls: ['./changee-people.component.css'],
})
export class ChangeePeopleComponent implements OnInit {
  formPeople: FormGroup;
  dialogRef: any;
  matcher = new MyErrorStateMatcher();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
  peopleControl = new FormControl('', Validators.required);
  ngOnInit() {
    this.formPeople = new FormGroup({
      surname: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      patronymic: new FormControl(null, [Validators.required]),
    });
    if (this.data.item) {
      this.formPeople.get('surname').setValue(this.data.item.surname);
      this.formPeople.get('name').setValue(this.data.item.name);
      this.formPeople.get('patronymic').setValue(this.data.item.patronymic);
    }
  }
  onSubmitPeople() {}

  onConfirm() {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
