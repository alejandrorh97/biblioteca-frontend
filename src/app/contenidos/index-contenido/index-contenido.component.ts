import { Component } from '@angular/core';
import { DropdownOptionComponent } from '../../components/dropdown-option/dropdown-option.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-index-contenido',
  standalone: true,
  imports: [DropdownOptionComponent, PaginatorComponent],
  templateUrl: './index-contenido.component.html',
  styleUrl: './index-contenido.component.css'
})
export class IndexContenidoComponent {
  dropdownOptions = [
    'Opción 1',
    'Opción 2',
    'Opción 3',
  ];
}
