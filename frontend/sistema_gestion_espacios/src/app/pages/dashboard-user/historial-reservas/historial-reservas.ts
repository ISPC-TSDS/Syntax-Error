import { Component } from '@angular/core';

interface ReservaHistorial {
  id: number;
  sala: string;
  fecha: string;
  hora: string;
  estado: string;
}

@Component({
  selector: 'app-historial-reservas',
  imports: [],
  templateUrl: './historial-reservas.html',
  styleUrl: './historial-reservas.css',
})
export class HistorialReservas {

  historial: ReservaHistorial[] = [
    {
      id: 1,
      sala: 'The Focus Zone',
      fecha: '20/05/2026',
      hora: '15:00 hs',
      estado: 'Confirmada'
    },
    {
      id: 2,
      sala: 'The Code Corner',
      fecha: '15/05/2026',
      hora: '10:00 hs',
      estado: 'Finalizada'
    },
    {
      id: 3,
      sala: 'The Collaboration Hub',
      fecha: '10/05/2026',
      hora: '18:00 hs',
      estado: 'Finalizada'
    }
  ];

}