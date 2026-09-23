import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { catchError, finalize, startWith } from 'rxjs/operators';
import { LabsService, Lab } from '../../services/labs';

const fallbackLabs: Lab[] = [
  {
    id: 1,
    nombre: 'Laboratorio Ciclo Básico',
    ciclo: 'Ciclo Básico',
    descripcion: 'Equipado con mesones y sillas para el alumnado. Se requiere solicitar en pañol las computadoras y televisores adicionales.',
    capacidad: 15,
    imagen: '/images/lab_ciclo_basico.jpg',
    equipamiento: ['Recursos multimedia a solicitar en pañol'],
    activa: true,
  },
  {
    id: 2,
    nombre: 'Laboratorio Ciclo Orientado',
    ciclo: 'Ciclo Orientado',
    descripcion: 'Espacio equipado con netbooks individuales por estudiante. Cuenta con televisor y proyector integrados. No requiere solicitar recursos extra.',
    capacidad: 32,
    imagen: '/images/lab_ciclo_orientado.jpg',
    equipamiento: ['Netbooks individuales con cargadores', 'Televisor y proyector integrados'],
    activa: true,
  },
];

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing implements OnInit {
  private labsService = inject(LabsService);

  labs: Lab[] = [...fallbackLabs];
  loading = false;

  ngOnInit(): void {
    this.labsService
      .getLabs()
      .pipe(
        startWith(fallbackLabs),
        catchError((err) => {
          console.warn('No se pudieron cargar los laboratorios, usando datos de respaldo.', err);
          return of(fallbackLabs);
        }),
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((labs) => {
        this.labs = labs;
      });
  }
}