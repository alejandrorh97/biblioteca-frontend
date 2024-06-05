import { Component } from '@angular/core';
import { DropdownOptionComponent } from '../../components/dropdown-option/dropdown-option.component';
import { PrestamoCardComponent } from '../../components/prestamo-card/prestamo-card.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-index-prestamos',
  standalone: true,
  imports: [DropdownOptionComponent, PrestamoCardComponent, PaginatorComponent],
  templateUrl: './index-prestamos.component.html',
  styleUrl: './index-prestamos.component.css'
})
export class IndexPrestamosComponent {
  dropdownOptions = [
    'Opción 1',
    'Opción 2',
    'Opción 3',
  ];
}
