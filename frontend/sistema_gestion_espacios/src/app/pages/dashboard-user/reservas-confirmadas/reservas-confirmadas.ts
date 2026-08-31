import { Component } from '@angular/core';

interface Reserva {
  sala: string;
  fechaDesde: string;
  fechaHasta: string;
}

@Component({
  selector: 'app-reservas-confirmadas',
  imports: [],
  templateUrl: './reservas-confirmadas.html',
  styleUrl: './reservas-confirmadas.css',
})
export class ReservasConfirmadas {

  reservas: Reserva[] = [
    {
      sala: 'Laboratorio Ciclo Orientado',
      fechaDesde: '20/05/2026 - 15:00 hs',
      fechaHasta: '20/05/2026 - 17:00 hs'
    },
    {
      sala: 'Laboratorio Ciclo Básico',
      fechaDesde: '23/05/2026 - 09:00 hs',
      fechaHasta: '23/05/2026 - 11:00 hs'
    }
  ];

}