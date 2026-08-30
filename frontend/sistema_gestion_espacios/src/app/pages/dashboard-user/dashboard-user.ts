import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Nav } from '../../shared/nav/nav';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-dashboard-user',
  imports: [
    RouterLink,
    RouterOutlet,
    Nav,
    Footer
  ],
  templateUrl: './dashboard-user.html',
  styleUrl: './dashboard-user.css',
})
export class DashboardUser {}