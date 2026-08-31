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
      nombre: 'Laboratorio Ciclo Básico',
      capacidad: 32,
      estado: 'Disponible'
    },
    {
      id: 2,
      nombre: 'Laboratorio Ciclo Orientado',
      capacidad: 32,
      estado: 'Ocupado'
    }
  ];

}