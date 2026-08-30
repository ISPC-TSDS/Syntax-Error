import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-reservar-espacio',
  imports: [ReactiveFormsModule],
  templateUrl: './reservar-espacio.html',
  styleUrl: './reservar-espacio.css',
})
export class ReservarEspacio {

  reservaForm: FormGroup;

  constructor(private fb: FormBuilder) {

    this.reservaForm = this.fb.group({
      sala: ['', Validators.required],
      fechaDesde: ['', Validators.required],
      horaDesde: ['', Validators.required],
      fechaHasta: ['', Validators.required],
      horaHasta: ['', Validators.required]
    });

  }

  confirmarReserva(): void {

    if (this.reservaForm.invalid) {

      this.reservaForm.markAllAsTouched();

      return;
    }

    console.log('Reserva realizada:', this.reservaForm.value);

    alert('Reserva realizada correctamente.');

    this.reservaForm.reset();
  }

  campoInvalido(campo: string): boolean {

    const control = this.reservaForm.get(campo);

    return !!control &&
      control.invalid &&
      control.touched;
  }

}