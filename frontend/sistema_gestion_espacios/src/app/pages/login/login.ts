import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  errorMessage = '';

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, completá los campos correctamente.';
      this.loginForm.markAllAsTouched();
      return;
    }

    console.log('Intentando iniciar sesión con:', this.loginForm.value);
    this.errorMessage = '';
  }
}