import { Component } from '@angular/core';

interface Espacio {
  id: number;
  nombre: string;
  capacidad: number;
  estado: string;
}

@Component({
  selector: 'app-espacios-disponibles',
  imports: [],
  templateUrl: './espacios-disponibles.html',
  styleUrl: './espacios-disponibles.css',
})
export class EspaciosDisponibles {

  espacios: Espacio[] = [
    {
      id: 1,
      nombre: 'The Collaboration Hub',
      capacidad: 12,
      estado: 'Disponible'
    },
    {
      id: 2,
      nombre: 'The Focus Zone',
      capacidad: 6,
      estado: 'Disponible'
    },
    {
      id: 3,
      nombre: 'The Code Corner',
      capacidad: 8,
      estado: 'Ocupada'
    },
    {
      id: 4,
      nombre: 'The Idea Incubator',
      capacidad: 15,
      estado: 'Disponible'
    }
  ];

}