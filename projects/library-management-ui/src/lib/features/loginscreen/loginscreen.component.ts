import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  FloatLabelType,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'kwp-loginscreen',
  standalone: true,
  imports: [
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './loginscreen.component.html',
  styleUrl: './loginscreen.component.css',
})
export class LoginscreenComponent {
  @Input() content = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  hide = true;

  onSubmit() {
    if (this.loginForm.valid) {
      console.warn('logged in');
    }
  }
}
