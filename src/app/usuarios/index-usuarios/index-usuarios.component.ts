import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DropdownOptionComponent } from '../../components/dropdown-option/dropdown-option.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-index-usuarios',
  standalone: true,
  imports: [RouterLink, DropdownOptionComponent, PaginatorComponent],
  templateUrl: './index-usuarios.component.html',
  styleUrl: './index-usuarios.component.css'
})
export class IndexUsuariosComponent {
  dropdownOptions = [
    'Administrador',
    'Editor',
    'Supervisor',
    'Usuario'
  ];
}
