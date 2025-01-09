import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-add-server-dialog',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    SelectModule,
    ButtonModule,
    DialogModule,
  ],
  templateUrl: './add-server-dialog.component.html',
  styleUrl: './add-server-dialog.component.scss',
  providers: [DialogService],
})
export class AddServerDialogComponent {
  public serverForm: FormGroup;

  constructor(private _fb: FormBuilder, private dialogRef: DynamicDialogRef) {
    this.serverForm = this._fb.group({
      name: this._fb.control(null, Validators.required),
      publicIP: this._fb.control(null, Validators.required),
      privateIP: this._fb.control(null, Validators.required),
      location: this._fb.control(null, Validators.required),
    });
  }

  public locations: any[] = [
    { name: 'San Francisco', id: 'SF' },
    { name: 'London', id: 'LDN' },
    { name: 'Paris', id: 'PRS' },
    { name: 'Istanbul', id: 'IST' },
    { name: 'Berlin', id: 'BRL' },
    { name: 'Barcelona', id: 'BRC' },
    { name: 'Rome', id: 'RM' },
  ];

  public onSubmit() {
    this.dialogRef.close();
  }
}
