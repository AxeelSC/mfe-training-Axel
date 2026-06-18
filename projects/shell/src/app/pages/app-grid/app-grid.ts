import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-grid',
  templateUrl: './app-grid.html',
  styleUrl: './app-grid.scss',
})
export class AppGrid {
  private readonly router = inject(Router);

  goToCatalog(): void {
    this.router.navigate(['/catalog']);
  }

  goToReports(): void {
    this.router.navigate(['/reports']);
  }
}
